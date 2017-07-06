import React from 'react';
import PropTypes from 'prop-types';

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
                <div className="content">
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
                        <pre>
                            {JSON.stringify(this.props.course, null, 3)}
                        </pre>
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
    actions: PropTypes.shape({
        getCourses: PropTypes.func.isRequired,
    }).isRequired,
};

export default Dashboard;
