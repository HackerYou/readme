import React from 'react';
import PropTypes from 'prop-types';

const SectionCard = ({ title, id, lessons, removeSection }) => {
    return (
        <li className="lessonGroup" key={id}>
            <header className="lessonGroupTop">
                <h3 id={title}>{title}</h3>
                <a
                    className="deleteSection"
                    onClick={
                        e => removeSection(e, id)
                    }
                >
                    <i className="chalk-remove red" />Remove Section
                                            </a>
            </header>
            <div className="card">
                <ol>
                    {lessons.map((item) => {
                        return (
                            <li className="lessonRow" key={item._id}>
                                <a href="" className="lessonInfo">
                                    <p className="lessonTitle">
                                        {item.title}
                                    </p>
                                </a>
                                <div className="lessonMeta">
                                    <span>
                                        <a href="">view</a>
                                        <a href="">|edit</a>
                                    </span>
                                </div>
                            </li>
                        );
                    })}
                </ol>
                <ol>
                    <li className="new-lessonRow">
                        <p className="lessonTitle">+ Add new lesson</p>
                    </li>
                </ol>
            </div>
        </li>
    );
};

SectionCard.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    lessons: PropTypes.arrayOf(PropTypes.object).isRequired,
    removeSection: PropTypes.func.isRequired,
};

export default SectionCard;

