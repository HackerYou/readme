import React from 'react';
import PropTypes from 'prop-types';

class Lesson extends React.Component {
    componentDidMount() {
        const { actions, match } = this.props;
        actions.getLesson(match.params.lesson_id);
    }
    render() {
        const { lesson } = this.props;
        return (<pre>
            {JSON.stringify(lesson, null, 3)}
        </pre>);
    }
}

Lesson.propTypes = {
    lesson: PropTypes.shape({
        name: PropTypes.string.isRequired,
    }).isRequired,
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
