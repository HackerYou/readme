import React from 'react';
import { Link } from 'react-router-dom';

const Instructors = () => {
    return (
        <div>
            <div className="container">
                <header className="topContent">
                    <Link to="dashboard" className="linkBtn">
                        <button className="primary">
                            <i className="chalk-home" />back to dashboard
                        </button>
                    </Link>
                </header>
                <h1>Manage Instructors</h1>
            </div>
        </div>
    );
};

export default Instructors;
