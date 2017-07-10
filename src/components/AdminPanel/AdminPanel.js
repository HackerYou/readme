import React from 'react';
import { Link } from 'react-router-dom';

const AdminPanel = () => (
    <header className="intro">
        <h2>What would you like to do?</h2>
        <div className="buttons">
            <Link className="linkBtn dashboardBtn" to="/classroom/manage">
                <i className="fa fa-th-large" />
                <p>Classrooms</p>
            </Link>
            <Link className="linkBtn dashboardBtn" to="topics">
                <i className="fa fa-th-list" />
                <p>Topics</p>
            </Link>
            <Link className="linkBtn dashboardBtn" to="course-templates">
                <i className="fa fa-file-text" />
                <p>Course Templates</p>
            </Link>
            <Link className="linkBtn dashboardBtn" to="instructors">
                <i className="fa fa-graduation-cap" />
                <p>Instructors</p>
            </Link>
            <Link className="linkBtn dashboardBtn" to="members">
                <i className="fa fa-users" />
                <p>Members</p></Link>
            <Link className="linkBtn dashboardBtn" to="media">
                <i className="fa fa-file-image-o" />
                <p>Media</p>
            </Link>
            <Link className="linkBtn dashboardBtn" to="questions">
                <i className="fa fa-check-square-o" />
                <p>Questions</p>
            </Link>
            <Link className="linkBtn dashboardBtn flagged" to="issues">
                {/* {this.state.numOfIssues !== 0 ? showNotification : null}*/ }Fix Me
                <i className="fa fa-inbox" />
                <p>Flagged Notes</p>
            </Link>
        </div>
    </header>
);

export default AdminPanel;
