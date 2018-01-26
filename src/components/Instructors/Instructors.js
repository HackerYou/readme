import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class Instructors extends React.Component {
    componentDidMount() {
        const { getInstructors } = this.props.actions;
        getInstructors();
    }
    render() {
        let instructors = this.props.users.instructors;
        instructors = instructors.filter((person) => {
            return person.instructor;
        });
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
                <section className="full card detailsForm">
                    <form action="">
                        <h2>Add a new instructor</h2>
                        <div className="fieldRow">
                            <label htmlFor="name">Search by name</label>
                            <input type="text" />
                            <button className="primary">Search</button>
                        </div>
                    </form>
                </section>
                <div className="container card instructorWrap">
                    <ul className="instructorList">
                        {instructors.map((instructor) => {
                            return (
                                <li>
                                    <p><strong>{instructor.firstName}</strong></p>
                                    <p>{instructor.email}</p>
                                    <p>{instructor.courses.length} Classrooms</p>
                                    <p>Remove User? <i className="chalk-remove red" /></p>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

Instructors.propTypes = {
    users: PropTypes.shape({
        instructors: PropTypes.array.isRequired,
    }).isRequired,
    actions: PropTypes.shape({
        getInstructors: PropTypes.func.isRequired,
    }).isRequired,
};

export default Instructors;
