import React from 'react';

const EditCourseTemplates = () => {
    return (
        <div className="container full">
            <button className="primary"><i className="chalk-home" />back to dashboard</button>
            <header className="topContent">
                <h1>Template</h1>
                <p className="title">
                    Drag and drop to reorganize lessons
                    (one at a time for now, multiple coming soon!)
                </p>
            </header>
            <section className="lessonsWrap">
                <ol className="lessonColumn">
                    <li className="lessonGroup">
                        <header className="lessonGroupTop">
                            <h3>Title goes here</h3>
                            <p className="deleteSection">
                                <i className="chalk-remove red" />Remove Section
                            </p>
                        </header>
                        <div className="card">
                            <ol>
                                <li className="lessonRow">
                                    <a href="" lassName="lessonInfo">
                                        <p className="lessonTitle">Lesson title goes here</p>
                                    </a>
                                    <div className="lessonMeta">
                                        <span>
                                            <a href="">view</a>
                                            <a href="">|edit</a>
                                        </span>
                                    </div>
                                </li>
                            </ol>
                            <ol>
                                <li className="new-lessonRow">
                                    <p className="lessonTitle">+ Add new lesson</p>
                                </li>
                            </ol>
                        </div>
                    </li>
                    <li>
                        <article className="lessonNew">
                            <ul>
                                <form className="new-lesson">
                                    <h3>Add new section</h3>
                                    <input
                                        type="text"
                                        placeholder="topic section title"
                                    />
                                    <button className="success">Create</button>
                                </form>
                            </ul>
                        </article>
                    </li>
                </ol>
                <aside>
                    <section className="sideCard">
                        <h3>Course Topics</h3>
                        <div className="card topicLegend">
                            <ul className="topicList">
                                <li>something</li>
                            </ul>
                        </div>
                    </section>
                    <button className="error">
                        <i className="chalk-remove" />delete template
                    </button>
                </aside>
            </section>
        </div>
    );
};

export default EditCourseTemplates;
