import React from 'react';
import PropTypes from 'prop-types';

import TestResultsCard from './TestResultsCard/TestResultsCard';

class TestResults extends React.Component {
    componentDidMount() {
        const { getTestResults } = this.props.actions;
        const { classroom_id } = this.props.match.params;

        getTestResults(classroom_id);
    }
    render() {
        return (
            <section className="dashWrap">
                {this.props.classroom.test_results.map((student) => {
                    return Object.keys(student.tests).length > 0 &&
                    (
                        <TestResultsCard
                            key={student._id}
                            student={student}
                        />
                    );
                })}
            </section>
        );
    }
}

TestResults.propTypes = {
    classroom: PropTypes.shape({
        test_results: PropTypes.array.isRequired,
    }).isRequired,
    match: PropTypes.shape({
        params: PropTypes.object.isRequired,
    }).isRequired,
    actions: PropTypes.shape({
        getTestResults: PropTypes.func.isRequired,
    }).isRequired,
};


export default TestResults;
