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
            <div>
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
