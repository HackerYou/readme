import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import * as broadcastActions from '../../actions/broadcastActions/broadcastActions';

const mapStateToProps = (state) => {
    const newState = Object.assign({}, state);
    return {
        broadcast: newState.broadcast,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(broadcastActions, dispatch),
    };
};

const Broadcast = ({ broadcast, actions }) => {
    const broadcastContainerClass = classNames({
        'notifications-tr': true,
    });
    const broadcastClass = classNames({
        notification: true,
        'notification-success': broadcast.broadcastType === 'success',
        'notification-error': broadcast.broadcastType === 'error',
        'notification-visible': broadcast.show,
        'notification-hidden': !broadcast.show,
    });
    return (
        <div className={broadcastContainerClass}>
            <div className={broadcastClass}>
                {broadcast.message}
                <div className="notification-close">
                    <button onClick={actions.endBroadcast} >
                        X
                    </button>
                </div>
            </div>
        </div>
    );
};

Broadcast.propTypes = {
    actions: PropTypes.shape({
        broadcast: PropTypes.func.isRequired,
    }).isRequired,
    broadcast: PropTypes.shape({
        message: PropTypes.string.isRequired,
    }).isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Broadcast);
