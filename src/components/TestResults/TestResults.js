import React from 'react';
import PropTypes from 'prop-types';

class TestResults extends React.Component {
    componentDidMount() {
        const { getCourse, getTestResultsForCourse } = this.props.actions;
        const { classroom_id } = this.props.match.params;

        getCourse(classroom_id);
        getTestResultsForCourse(classroom_id);
    }
    render() {
        return (
            <pre>
                {JSON.stringify(this.props.match.params, null, 3)}
            </pre>
        );
    }
}

TestResults.propTypes = {
    match: PropTypes.shape({
        params: PropTypes.object.isRequired,
    }).isRequired,
    actions: PropTypes.shape({
        getCourse: PropTypes.func.isRequired,
        getTestResultsForCourse: PropTypes.func.isRequired,
    }).isRequired,
};


export default TestResults;
