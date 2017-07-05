import React from 'react';
import PropTypes from 'prop-types';
import { getUserId } from '../../services/userService';

class CourseCard extends React.Component {
    constructor() {
        super();
        this.state = {
            instructor: 'Loading...',
        };
    }
    componentDidMount() {
        if (this.props.instructor) {
            getUserId(this.props.instructor)
                .then(response => response.json())
                .then((data) => {
                    this.setState({
                        instructor: `${data.user.firstName} ${data.user.lastName}`,
                    });
                });
        } else {
            this.setState({
                instructor: 'N/A',
            });
        }
    }
    render() {
        return (
            <div>
                <h2>{this.props.title}</h2>
                <h3>{this.state.instructor}</h3>
                <h3>{this.props.term}</h3>
                <h3>{this.props.classroomId}</h3>
            </div>
        );
    }
}

CourseCard.propTypes = {
    title: PropTypes.string.isRequired,
    instructor: PropTypes.string.isRequired,
    term: PropTypes.string.isRequired,
    classroomId: PropTypes.string.isRequired,
};

export default CourseCard;
