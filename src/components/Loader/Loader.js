import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Loader = ({ loader }) => {
    const loaderClass = classNames({
        'chalk-loader': true,
        hide: !loader.loading,
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
    loader: PropTypes.shape({
        loading: PropTypes.bool.isRequired,
    }).isRequired,
};

const mapStateToProps = ({ loader }) => {
    return {
        loader,
    };
};

export default connect(mapStateToProps)(Loader);
