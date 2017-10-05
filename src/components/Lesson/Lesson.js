import React from 'react';
import PropTypes from 'prop-types';

import LessonTopic from '../LessonTopic/LessonTopic';

class Lesson extends React.Component {
    componentDidMount() {
        const { actions, match } = this.props;
        actions.getLesson(match.params.lesson_id);
    }
    render() {
        const { lesson, admin } = this.props;
        return (<div className="full">
            <header className="topContent container">
                <div className="headerLinks">
                    HeaderLinks Stub
                </div>
                <div className="lessonHeader">
                    <h1>{lesson.title}</h1>
                    <div>
                        Upload Exercise Stub
                    </div>
                </div>
                <span>Modal Stub</span>
            </header>
            <section className="lessonView card">
                {lesson.topics.map((topic) => {
                    return (<LessonTopic key={topic._id} topic={topic} admin={admin} />);
                })}
            </section>
            <div className="container">
                Back to Classroom Stub
            </div>
        </div>);
    }
}

Lesson.propTypes = {
    lesson: PropTypes.shape({
        title: PropTypes.string.isRequired,
        topics: PropTypes.arrayOf(PropTypes.object).isRequired,
    }).isRequired,
    admin: PropTypes.bool.isRequired,
    actions: PropTypes.shape({
        getLesson: PropTypes.func.isRequired,
    }).isRequired,
    match: PropTypes.shape({
        params: PropTypes.shape({
            lesson_id: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
};

export default Lesson;
