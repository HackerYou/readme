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
