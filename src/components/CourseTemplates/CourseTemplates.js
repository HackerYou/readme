import React from 'react';
import { Link } from 'react-router-dom';

const CourseTemplates = () => {
    return (
        <div className="container">
            <header className="topContent">
                <Link to="/dashboard" className="linkBtn">
                    <button className="primary">
                        <i className="chalk-home" />back to dashboard</button>
                </Link>
                <h1>Course Templates</h1>
            </header>
            <section className="full card detailsForm">
                <form action="">
                    <div className="fieldRow" />
                </form>
            </section>
        </div>
    );
};

export default CourseTemplates;
