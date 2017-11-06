import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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
                    <footer className="classCardMeta">
                        <p className="red">
                            <strong>{this.props.term}</strong>
                        </p>
                        <Link className="button primary" to={`/classroom/${this.props.classroomId}`}>View Class</Link>
                    </footer>
                </article>
            </div>
        );
    }
}

CourseCard.defaultProps = {
    title: '',
    instructor: '',
    term: '',
};

CourseCard.propTypes = {
    title: PropTypes.string,
    instructor: PropTypes.string,
    term: PropTypes.string,
    classroomId: PropTypes.string.isRequired,
};

export default CourseCard;
