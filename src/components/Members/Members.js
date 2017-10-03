import React from 'react';
import { Link } from 'react-router-dom';

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
                <form className="addMembersForm" action="">
                    <div className="fieldRow">
                        <label
                            className="inline largeLabel"
                            htmlFor="add"
                        >Add by email
                        </label>
                        <div className="inlineRow">
                            <input id="add" type="text" />
                        </div>
                        <button className="success">Add User</button>
                    </div>
                </form>
                <form action="">
                    <div className="fieldRow">
                        <label
                            className="inline largeLabel"
                            htmlFor="search"
                        >Search by name:
                        </label>
                        <input type="text" id="search" />
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
