import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const LessonGroup = ({ group }) => {
    return (
        <li className="lessonGroup">
            <h3>{group.title}</h3>
            <div className="card lessonCard">
                <ol className="lessonSection">
                    {group.lessons.map((lesson) => {
                        return (
                            <li key={lesson._id} className="lessonRow"><Link to={`/lesson/${lesson._id}`}>{lesson.title}</Link></li>
                        );
                    })}
                </ol>
            </div>
        </li>
    );
};

LessonGroup.propTypes = {
    group: PropTypes.shape({
        title: PropTypes.string.isRequired,
        lessons: PropTypes.arrayOf(PropTypes.object).isRequired,
    }).isRequired,
};

export default LessonGroup;
