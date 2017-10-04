import React from 'react';
import { Link } from 'react-router-dom';

import Input from '../Forms/Input/Input';

const Members = () => {
    return (
        <section className="mainContent">
            <div className="container">
                <header className="topContent">
                    <Link className="linkBtn button primary" to="/dashboard">
                        back to dashboard
                    </Link>
                </header>
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
                <ul className="memberList">
                    <li>
                        <p>
                            <strong>Sylvia Nguyen</strong>
                        </p>
                        <p>sylvia@hackeryou.com</p>
                        <p>
                            <span>1</span>
                            <span>Classroom</span>
                        </p>
                        <div className="inputBlock">
                            <div className="fieldRow">
                                <label htmlFor="12">Instructor</label>
                                <input type="checkbox" id="12" />
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Members;
