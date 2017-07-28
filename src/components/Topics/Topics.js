import React from 'react';
import PropTypes from 'prop-types';

class Topics extends React.Component {
    componentDidMount() {
        const { getTopicsThunk } = this.props.actions;
        getTopicsThunk();
    }
    render() {
        return (
            <p>Topics Stub</p>
        );
    }
}

Topics.propTypes = {
    topics: PropTypes.shape({
        topics: PropTypes.array.isRequired,
    }).isRequired,
    actions: PropTypes.shape({
        getTopicsThunk: PropTypes.func.isRequired,
    }).isRequired,
};

export default Topics;
