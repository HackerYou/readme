import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const LessonGroup = ({ group }) => {
    return (
        <pre>
            <p>{group.title}</p>
            {group.lessons.map((lesson) => {
                return (
                    <Link key={lesson._id} to={`/lesson/${lesson._id}`}>{lesson.title}</Link>
                );
            })}
        </pre>
    );
};

LessonGroup.propTypes = {
    group: PropTypes.shape({
        title: PropTypes.string.isRequired,
        lessons: PropTypes.arrayOf(PropTypes.object).isRequired,
    }).isRequired,
};

export default LessonGroup;
