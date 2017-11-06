import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import LessonGroup from '../LessonGroup/LessonGroup';
import ClassroomDetails from '../ClassroomDetails/ClassroomDetails';

class Classroom extends React.Component {
    componentDidMount() {
        const { getCourse } = this.props.actions;
        const { classroom_id } = this.props.match.params;

        getCourse(classroom_id);
    }
    render() {
        const { classroom, user } = this.props;
        return (
            <div className="container full">
                <Link to="/dashboard" className="linkBtn">Go Back To Dashboard</Link>
                <header>
                    <h1>{classroom.title}</h1>
                </header>
                <section className="lessonsWrap clearfix">
                    <ol className="lessonColumn">
                        {classroom.sections.map((section) => {
                            return (
                                <LessonGroup
                                    key={section._id}
                                    group={section}
                                />
                            );
                        })}
                    </ol>
                    <ClassroomDetails user={user} classroom={classroom} />
                </section>
            </div>
        );
    }
}

Classroom.propTypes = {
    actions: PropTypes.shape({
        getCourse: PropTypes.func.isRequired,
    }).isRequired,
    user: PropTypes.shape({
        admin: PropTypes.bool.isRequired,
        instructor: PropTypes.bool.isRequired,
    }).isRequired,
    classroom: PropTypes.shape({
        title: PropTypes.string.isRequired,
        sections: PropTypes.arrayOf(PropTypes.object).isRequired,
    }).isRequired,
    match: PropTypes.shape({
        params: PropTypes.shape({
            classroom_id: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
};

export default Classroom;
