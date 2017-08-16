import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import Input from '../Forms/Input/Input';
import { run, ruleRunner } from '../../utils/forms/ruleRunner';
import { required } from '../../utils/forms/rules';

const fieldValidations = [
    ruleRunner('title', 'Template title', required),
];

class CourseTemplates extends React.Component {
    constructor() {
        super();
        this.state = {
            title: '',
            validationErrors: {},
        };
        this.handleInput = this.handleInput.bind(this);
        this.createTemplate = this.createTemplate.bind(this);
    }
    componentDidMount() {
        this.setState({ validationErrors: run(this.state, fieldValidations) });
    }
    handleInput(e) {
        const newState = Object.assign({}, this.state, {
            [e.target.name]: e.target.value,
        });
        newState.validationErrors = run(newState, fieldValidations);
        this.setState(newState);
    }
    createTemplate(e) {
        e.preventDefault();
        const { broadcast } = this.props.actions;
        const { validationErrors, title } = this.state;
        const prefix = 'Please resolve the following errors: ';
        const errorKeys = Object.keys(validationErrors);

        if (errorKeys.length > 0) {
            let errors = errorKeys.map(error => validationErrors[error]);
            errors = errors.join(', ');
            broadcast(prefix + errors, 'error');
            return null;
        }
        return this.props.actions.createTemplateThunk({
            title,
        });
    }
    render() {
        return (
            <section className="mainContent">
                <div className="container">
                    <header className="topContent">
                        <Link to="/dashboard" className="linkBtn">
                            <button className="primary">
                                <i className="chalk-home" />back to dashboard</button>
                        </Link>
                        <h1>Course Templates</h1>
                    </header>
                </div>
                <section className="full card detailsForm">
                    <form action="" onSubmit={this.createTemplate}>
                        <div className="fieldRow">
                            <Input
                                labelText="Create new template"
                                name="title"
                                type="text"
                                value={this.state.title}
                                placeholder="e.g Intro to Web Development"
                                handleChange={this.handleInput}
                                labelInline
                                largeLabel
                            />
                            <button className="success">Save Template</button>
                        </div>
                    </form>
                </section>
            </section>
        );
    }
}

CourseTemplates.propTypes = {
    actions: PropTypes.shape({
        broadcast: PropTypes.func.isRequired,
        createTemplateThunk: PropTypes.func.isRequired,
    }).isRequired,
};

export default CourseTemplates;
