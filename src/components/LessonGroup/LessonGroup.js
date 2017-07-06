import React from 'react';
// import PropTypes from 'prop-types';

const LessonGroup = (props) => {
    const lesson = props;
    console.log('hello', lesson.group);
    return (
        <li className="lessonGroup">
            <h3>{lesson.group.title}</h3>
            <div className="card lessonCard">
                <ol className="lessonSection">
                    {lesson.group.lessons.map((item) => {
                        return (
                            <li className="lessonRow">{item.title}</li>
                        );
                    })}
                </ol>
            </div>
        </li>
    );
};

// LessonGroup.propTypes = {
//     group: PropTypes.shape({
//         name: PropTypes.string.isRequired,
//     }).isRequired,
// };

export default LessonGroup;
