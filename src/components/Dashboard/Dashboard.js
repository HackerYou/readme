import React from 'react';
import PropTypes from 'prop-types';

import { isAdmin } from '../../services/authService';
import AdminPanel from '../AdminPanel/AdminPanel';
import CourseCard from '../CourseCard/CourseCard';

class Dashboard extends React.Component {
    componentDidMount() {
        const { getCourses } = this.props.actions;
        getCourses();
    }
    render() {
        const { courses } = this.props.course;
        return (
            <div className="container full classroom-container">
                {isAdmin(this.props.user) && <AdminPanel />}
                <div className="content">
                    <h1>Your Classrooms</h1>
                    <section className="dashWrap">
                        {courses.map((course) => {
                            return (
                                <CourseCard
                                    title={course.title}
                                    instructor={course.instructor}
                                    term={course.term}
                                    classroomId={course._id}
                                    key={course._id}
                                />
                            );
                        })}
                    </section>
                </div>
            </div>
        );
    }
}

Dashboard.propTypes = {
    course: PropTypes.shape({
        courses: PropTypes.arrayOf(PropTypes.object).isRequired,
    }).isRequired,
    user: PropTypes.shape({
        admin: PropTypes.bool.isRequired,
    }).isRequired,
    actions: PropTypes.shape({
        getCourses: PropTypes.func.isRequired,
    }).isRequired,
};

export default Dashboard;
