import React from 'react';
import PropTypes from 'prop-types';

class EditCourseTemplates extends React.Component {
    constructor() {
        super();
        this.addSection = this.addSection.bind(this);
    }
    componentDidMount() {
        const { getCourse } = this.props.actions;
        getCourse(this.props.match.params.template_id);
    }
    addSection(e) {
        e.preventDefault();
        console.log('hello');
        return this;
    }
    render() {
        const sections = this.props.course.courses.sections;
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
                                    <form className="new-lesson" onSubmit={this.addSection}>
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
                        {sections.map((section) => {
                            return (
                                <li className="lessonGroup" key={section._id}>
                                    <header className="lessonGroupTop">
                                        <h3>{section.title}</h3>
                                        <p className="deleteSection">
                                            <i className="chalk-remove red" />Remove Section
                                        </p>
                                    </header>
                                    <div className="card">
                                        <ol>
                                            {section.lessons.map((item) => {
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
                        })}
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
    }
}

EditCourseTemplates.propTypes = {
    actions: PropTypes.shape({
        getCourse: PropTypes.func.isRequired,
    }).isRequired,
    course: PropTypes.shape({
        courses: PropTypes.shape({
            sections: PropTypes.array,
        }).isRequired,
    }).isRequired,
    match: PropTypes.shape({
        params: PropTypes.shape({
            template_id: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
};

export default EditCourseTemplates;
