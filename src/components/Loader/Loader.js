import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Loader = ({ loading }) => {
    const loaderClass = classNames({
        'chalk-loader': true,
        hide: !loading,
    });
    return (
        <div className={loaderClass}>
            <div className="loader-container">
                <h2>Loading</h2>
                <span className="loader" />
                <span className="loader" />
                <span className="loader" />
                <span className="loader" />
            </div>
        </div>
    );
};

Loader.propTypes = {
    loading: PropTypes.bool.isRequired,
};

const mapStateToProps = ({ loading }) => {
    return {
        loading,
    };
};

export default connect(mapStateToProps)(Loader);
