import React from 'react';
import PropTypes from 'prop-types';

class TestResults extends React.Component {
    componentDidMount() {
        const { getTestResults } = this.props.actions;
        const { classroom_id } = this.props.match.params;

        getTestResults(classroom_id);
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
        getTestResults: PropTypes.func.isRequired,
    }).isRequired,
};


export default TestResults;
