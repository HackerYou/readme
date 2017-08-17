import React from 'react';
import { Link } from 'react-router-dom';

const Members = () => {
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
        </div>
    );
};

export default Members;
