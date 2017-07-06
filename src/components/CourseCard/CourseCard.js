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
        getUserId(this.props.instructor)
            .then(response => response.json())
            .then((data) => {
                this.setState({
                    instructor: `${data.user.firstName} ${data.user.lastName}`,
                });
            });
    }
    render() {
        return (
            <div className="classCard">
                <article className="card">
                    <h3>{this.props.title}</h3>
                    <h4>{this.state.instructor}</h4>
                    <h4>{this.props.term}</h4>
                    <h4>{this.props.classroomId}</h4>
                </article>
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
