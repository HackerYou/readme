import React from 'react';
import PropTypes from 'prop-types';

const QuestionCard = ({ title, category, type, difficulty }) => {
    return (
        <div className="inline card questionCard">
            <ul className="questionCard--attr">
                <li>{category}</li>
                <li>{difficulty}</li>
                <li>{type}</li>
            </ul>
            <div className="questionCard--attr">
                <p><strong>{title}</strong></p>
            </div>
        </div>
    );
};

QuestionCard.propTypes = {
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    difficulty: PropTypes.string.isRequired,
};

export default QuestionCard;
