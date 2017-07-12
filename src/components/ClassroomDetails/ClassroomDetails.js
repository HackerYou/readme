import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import { hasOps } from '../../services/authService';

const ClassroomDetails = ({ user, classroom }) => {
    return (
        <aside>
            <section className="sideCard">
                {hasOps(user) && classroom.tests.length > 0 ?
                    <div className="card">
                        <Link to={`/classroom/${classroom._id}/test-results`}>View Test Results</Link>
                    </div>
                 : () => classroom.tests.length > 0 && (
                 <div className="card cardAddTest">
                     <h3>Test Progress:</h3>
                 </div>
                 )}
                <div className="card topicLegend">
                    <h3>Course Topics</h3>
                    <ul className="topicsList">
                        {classroom.sections.map(section => (
                            <li key={section._id}>{section.title}</li>
                        ))}
                    </ul>
                    {hasOps(user) && (
                        <div>
                            <div className="card">
                                <h3>Members</h3>
                                <p>
                                    <i className="chalk-users" />
                                    {classroom.students.length} members of this classroom
                                </p>
                                <button>Manage classroom members</button>
                            </div>
                            <div className="card testCard">
                                <h3>Add Tests</h3>
                                <ul>
                                    <li>Test Stub</li>
                                </ul>
                                <Link to={`/classroom/${classroom._id}/create-test`}>Add a Test</Link>
                            </div>
                        </div>
                    )}
                </div>
            </section>
        </aside>
    );
};

ClassroomDetails.propTypes = {
    user: PropTypes.shape({
        admin: PropTypes.bool.isRequired,
        instructor: PropTypes.bool.isRequired,
    }).isRequired,
    classroom: PropTypes.shape({
        title: PropTypes.string.isRequired,
        students: PropTypes.arrayOf(PropTypes.object).isRequired,
        sections: PropTypes.arrayOf(PropTypes.object).isRequired,
    }).isRequired,
};


export default ClassroomDetails;
