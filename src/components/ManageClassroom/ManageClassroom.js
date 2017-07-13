import React from 'react';

import { Link } from 'react-router-dom';

const ManageClassroom = () => {
    return (
        <div className="container">
            <header className="topContent">
                <Link className="linkBtn" to="/dashboard">
                    <button className="primary">
                        <i className="chalk-home" />back to dashboard
                    </button>
                </Link>
            </header>
            <div className="card setupCard">
                <h2>Create a new classroom</h2>
                <form>
                    <div className="fieldRow">
                        Template
                    </div>
                    <div className="fieldRow">
                        Title & Term
                    </div>
                    <div className="fieldRow">
                        Start Data, End Date
                    </div>
                    <div className="fieldRow">
                        Instructor + Create a new instructor
                    </div>
                    <div className="fieldRow">
                        Classroom Description + Textarea
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
        </div>
    );
};

export default ManageClassroom;
