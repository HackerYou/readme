import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import Input from '../Forms/Input/Input';
import MembersCard from '../Members/MembersCard';

class Members extends React.Component {
    constructor() {
        super();
        this.state = {
            members: [],
        };
    }
    componentDidMount() {
        const { getInstructors } = this.props.actions;
        getInstructors();
    }
    render() {
        return (
            <section className="mainContent">
                <div className="container">
                    <header className="topContent">
                        <Link className="linkBtn button primary" to="/dashboard">
                            back to dashboard
                    </Link>
                    </header>
                    <h1>Manage Members</h1>
                </div>
                <section className="full card detailsForm">
                    <form action="">
                        <div className="fieldRow">
                            <Input
                                labelText="Add by email"
                                type="text"
                                labelClass="inline largeLabel"
                                name="add"
                            />
                            <button className="success">Add User</button>
                        </div>
                    </form>
                    <form action="">
                        <div className="fieldRow">
                            <Input
                                labelText="Search by name"
                                type="text"
                                labelClass="inline largeLabel"
                                name="search"
                            />
                            <button className="primary">Search</button>
                        </div>
                    </form>
                </section>
                <div className="container card memberWrap">
                    <MembersCard members={this.props.users.instructors} />
                </div>
            </section>
        );
    }
}

Members.propTypes = {
    users: PropTypes.shape({
        instructors: PropTypes.array.isRequired,
    }).isRequired,
    actions: PropTypes.shape({
        getInstructors: PropTypes.func.isRequired,
    }).isRequired,
};

export default Members;
