import React from 'react';
import PropTypes from 'prop-types';

import { Link } from 'react-router-dom';
import MembersCard from './MembersCard';
import { run, ruleRunner } from '../../utils/forms/ruleRunner';
import { validEmail } from '../../utils/forms/rules';
import Input from '../Forms/Input/Input';
import Pagination from '../Pagination/Pagination';

const fieldValidations = [
    ruleRunner('email', 'E-mail address', validEmail),
];

class Members extends React.Component {
    constructor() {
        super();
        this.state = {
            members: [],
            email: '',
            name: '',
            validationErrors: {},
            pageOfItems: [],
        };
        this.handleInput = this.handleInput.bind(this);
        this.addUser = this.addUser.bind(this);
        this.onChangePage = this.onChangePage.bind(this);
    }
    componentDidMount() {
        const { getInstructors } = this.props.actions;
        const { getAllUsersThunk } = this.props.actions;

        getInstructors();
        getAllUsersThunk();
        this.setState({ validationErrors: run(this.state, fieldValidations) });
    }
    onChangePage(pageOfItems) {
        this.setState({ pageOfItems });
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
                        <Link className="linkBtn button primary" to="/dashboard">
                            back to dashboard
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
                <Pagination items={this.props.users.users} onChangePage={this.onChangePage} />
                <div className="container card memberWrap">
                    {this.state.pageOfItems.map((member) => {
                        console.log(member);
                        return (<MembersCard
                            member={member}
                            key={member._id}
                        />);
                    })}
                </div>
            </div>
        );
    }
}

Members.propTypes = {
    users: PropTypes.shape({
        instructors: PropTypes.array.isRequired,
        users: PropTypes.array.isRequired,
    }).isRequired,
    actions: PropTypes.shape({
        getInstructors: PropTypes.func.isRequired,
        broadcast: PropTypes.func.isRequired,
        getAllUsersThunk: PropTypes.func.isRequired,
    }).isRequired,
};

export default Members;
