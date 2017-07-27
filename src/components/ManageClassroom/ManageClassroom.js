import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import { Link } from 'react-router-dom';

import { run, ruleRunner } from '../../utils/forms/ruleRunner';
import { required, notDefault } from '../../utils/forms/rules';
import Select from '../Forms/Select/Select';
import Input from '../Forms/Input/Input';
import DatePicker from '../Forms/DatePicker/DatePicker';
import TextArea from '../Forms/TextArea/TextArea';

const fieldValidations = [
    ruleRunner('title', 'Title', required),
    ruleRunner('term', 'Term', required),
    ruleRunner('template', 'Template', notDefault),
];

class ManageClassroom extends React.Component {
    constructor() {
        super();
        this.state = {
            template: 'default',
            title: '',
            term: '',
            startDate: moment(),
            endDate: moment(),
            instructor: 'default',
            description: '',
            validationErrors: {},
        };
        this.handleDate = this.handleDate.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.createClass = this.createClass.bind(this);
    }
    componentDidMount() {
        const { getTemplates, getInstructors } = this.props.actions;
        getTemplates();
        getInstructors();
        this.setState({ validationErrors: run(this.state, fieldValidations) });
    }
    errorFor(field) {
        return this.state.validationErrors[field] || '';
    }
    handleDate(date, stateSlice) {
        this.setState({
            [stateSlice]: date,
        });
    }
    handleInput(e) {
        const newState = Object.assign({}, this.state, {
            [e.target.name]: e.target.value,
        });
        newState.validationErrors = run(newState, fieldValidations);
        this.setState(newState);
    }
    createClass(e) {
        e.preventDefault();
        const { broadcast } = this.props.actions;
        const { validationErrors } = this.state;
        const prefix = 'Please resolve the following errors: ';


        if (Object.keys(validationErrors).length > 0) {
            let errors = Object.keys(validationErrors).map(error => validationErrors[error]);
            errors = errors.join(', ');
            broadcast(prefix + errors, 'error');
            return null;
        }
        const { title, template, term, startDate, endDate, instructor, description } = this.state;
        return this.props.actions.createClassroomThunk({
            title,
            template,
            term,
            start_date: +new Date(startDate._d),
            end_date: +new Date(endDate._d),
            instructor,
            description,
        });
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
                <form onSubmit={this.createClass}>
                    <div className="fieldRow">
                        <Select
                            options={courses}
                            name="template"
                            labelText="Template"
                            chosenKey="_id"
                            chosenText="title"
                            chosenVal="_id"
                            value={this.state.template}
                            handleChange={this.handleInput}
                            labelInline
                        />
                    </div>
                    <div className="fieldRow">
                        <Input
                            labelText="Title"
                            name="title"
                            type="text"
                            value={this.state.title}
                            placeholder="Enter Course Title"
                            handleChange={this.handleInput}
                            labelInline
                        />
                        <Input
                            labelText="Term"
                            name="term"
                            type="text"
                            value={this.state.term}
                            placeholder="eg Fall 2015"
                            handleChange={this.handleInput}
                            labelInline
                        />
                    </div>
                    <div className="fieldRow">
                        <DatePicker
                            labelText="Start Date"
                            pickerId="startDate"
                            handleChange={this.handleDate}
                            selectedDate={this.state.startDate}
                            labelInline
                        />
                        <DatePicker
                            labelText="End Date"
                            pickerId="endDate"
                            handleChange={this.handleDate}
                            selectedDate={this.state.endDate}
                            labelInline
                        />
                    </div>
                    <div className="fieldRow">
                        <Select
                            options={instructors.map(i => ({ name: `${i.firstName} ${i.lastName}`, _id: i._id }))}
                            name="instructor"
                            labelText="Instructor"
                            chosenKey="_id"
                            chosenText="name"
                            chosenVal="_id"
                            handleChange={this.handleInput}
                            value={this.state.instructor}
                            labelInline
                        />
                        <small>
                            Create a new instructor
                        </small>
                    </div>
                    <div className="fieldRow">
                        <TextArea
                            name="description"
                            label="Classroom Description"
                            cols="30"
                            rows="10"
                            handleChange={this.handleInput}
                            val={this.state.description}
                        />
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
        broadcast: PropTypes.func.isRequired,
        getTemplates: PropTypes.func.isRequired,
        getInstructors: PropTypes.func.isRequired,
        createClassroomThunk: PropTypes.func.isRequired,
    }).isRequired,
};

export default ManageClassroom;
