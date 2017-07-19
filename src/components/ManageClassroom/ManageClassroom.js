import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import Select from '../Forms/Select/Select';
import Input from '../Forms/Input/Input';
import DatePicker from '../Forms/DatePicker/DatePicker';
import TextArea from '../Forms/TextArea/TextArea';

class ManageClassroom extends React.Component {
    componentDidMount() {
        const { getTemplates, getInstructors } = this.props.actions;
        getTemplates();
        getInstructors();
    }
    render() {
        const { instructors } = this.props.users;
        const { courses } = this.props.course;
        return (<div className="container">
            <header className="topContent">
                <Link className="linkBtn" to="/dashboard">
                    <button className="primary">
                        <i className="chalk-home" />back to dashboard
                    </button>
                </Link>
            </header>
            <div className="card setupCard">
                <h2>Create a new classroom</h2>
                <form>
                    <div className="fieldRow">
                        <Select
                            options={courses}
                            name="template"
                            labelText="Template"
                            chosenKey="_id"
                            chosenVal=""
                            labelInline
                        />
                    </div>
                    <div className="fieldRow">
                        <Input
                            labelText="Title"
                            name="title"
                            type="text"
                            value=""
                            placeholder="Enter Course Title"
                            labelInline
                        />
                        <Input
                            labelText="Term"
                            name="term"
                            type="text"
                            value="courseTerm"
                            placeholder="eg Fall 2015"
                            labelInline
                        />
                    </div>
                    <div className="fieldRow">
                        <DatePicker
                            labelText="Start Date"
                            pickerId="startdate"
                            handleChange={() => this}
                            labelInline
                        />
                        <DatePicker
                            labelText="End Date"
                            pickerId="startdate"
                            handleChange={() => this}
                            labelInline
                        />
                    </div>
                    <div className="fieldRow">
                        <Select
                            options={instructors.map(i => ({ name: `${i.firstName} ${i.lastName}`, _id: i._id }))}
                            name=""
                            chosenKey="_id"
                            chosenVal="name"
                        />
                        Create a new instructor
                    </div>
                    <div className="fieldRow">
                        <TextArea name="classroom-description" label="Classroom Description" />
                    </div>
                    <button className="success">Create Classroom</button>
                </form>
            </div>
            <div className="content">
                <h1>Your Classrooms</h1>
                <section>
                    Classrooms Stub
                </section>
            </div>
        </div>);
    }
}

ManageClassroom.propTypes = {
    users: PropTypes.shape({
        instructors: PropTypes.arrayOf(PropTypes.object).isRequired,
    }).isRequired,
    course: PropTypes.shape({
        courses: PropTypes.arrayOf(PropTypes.object).isRequired,
    }).isRequired,
    actions: PropTypes.shape({
        getTemplates: PropTypes.func.isRequired,
        getInstructors: PropTypes.func.isRequired,
    }).isRequired,
};

export default ManageClassroom;
