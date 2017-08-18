import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { run, ruleRunner } from '../../utils/forms/ruleRunner';
import { validEmail } from '../../utils/forms/rules';
import Input from '../Forms/Input/Input';

const fieldValidations = [
    ruleRunner('email', 'E-mail address', validEmail),
];

class Members extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            name: '',
            validationErrors: {},
        };
        this.handleInput = this.handleInput.bind(this);
        this.addUser = this.addUser.bind(this);
    }
    componentDidMount() {
        const { getAllUsersThunk } = this.props.actions;
        getAllUsersThunk();
        this.setState({ validationErrors: run(this.state, fieldValidations) });
    }
    handleInput(e) {
        const newState = Object.assign({}, this.state, {
            [e.target.name]: e.target.value,
        });
        newState.validationErrors = run(newState, fieldValidations);
        this.setState(newState);
    }
    addUser(e) {
        e.preventDefault();
        const { broadcast } = this.props.actions;
        const { validationErrors } = this.state;
        const prefix = 'Please resolve the following errors: ';
        const errorKeys = Object.keys(validationErrors);

        if (errorKeys.length > 0) {
            let errors = errorKeys.map(error => validationErrors[error]);
            errors = errors.join(', ');
            broadcast(prefix + errors, 'error');
            return null;
        }
        return null;
    }
    render() {
        return (
            <div>
                <div className="container">
                    <header className="topContent">
                        <Link to="dashboard" className="linkBtn">
                            <button className="primary">
                                <i className="chalk-home" />Back to Dashboard
                            </button>
                        </Link>
                    </header>
                    <h1>Manage Members</h1>
                </div>
                <section className="full card detailsForm">
                    <form className="addMembersForm" onSubmit={this.addUser}>
                        <div className="fieldRow">
                            <Input
                                labelText="Add by email"
                                name="email"
                                type="text"
                                value={this.state.email}
                                placeholder="Enter emails"
                                handleChange={this.handleInput}
                                largeLabel
                                labelInline
                            />
                            <button className="success">Add User</button>
                        </div>
                    </form>
                    <form className="addMembersForm">
                        <div className="fieldRow">
                            <Input
                                labelText="Search by name:"
                                name="name"
                                type="text"
                                value={this.state.name}
                                handleChange={this.handleInput}
                                placeholder="Enter name"
                                largeLabel
                                labelInline
                            />
                            <button className="primary">Search</button>
                        </div>
                    </form>
                </section>
            </div>
        );
    }
}

Members.propTypes = {
    actions: PropTypes.shape({
        broadcast: PropTypes.func.isRequired,
        getAllUsersThunk: PropTypes.func.isRequired,
    }).isRequired,
};

export default Members;
