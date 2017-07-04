import React from 'react';
import PropTypes from 'prop-types';

class Dashboard extends React.Component {
    componentDidMount() {
        const { getCourses } = this.props.actions;
        getCourses();
    }
    render() {
        return (
            <div>
                <pre>
                    {JSON.stringify(this.props.course, null, 3)}
                </pre>
            </div>
        );
    }
}

Dashboard.propTypes = {
    // auth: PropTypes.shape({
    //     loggedIn: PropTypes.bool.isRequired,
    // }).isRequired,
    course: PropTypes.shape({
        courses: PropTypes.arrayOf(PropTypes.object).isRequired,
    }).isRequired,
    actions: PropTypes.shape({
        getCourses: PropTypes.func.isRequired,
    }).isRequired,
};

export default Dashboard;
