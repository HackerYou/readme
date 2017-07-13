import React from 'react';

const QuestionCard = () => {
    return (
        <div className="inline card questionCard">
            <ul className="questionCard--attr">
                <li>Item one</li>
                <li>Item Two</li>
                <li>Item Three</li>
            </ul>
            <div className="questionCard--attr">
                <p><strong>Question Title</strong></p>
            </div>
        </div>
    );
};

export default QuestionCard;
