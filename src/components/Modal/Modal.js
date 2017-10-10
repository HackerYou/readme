import React from 'react';
import PropTypes from 'prop-types';


const Modal = (props) => {
    if (props.isOpen) {
        return (
            <div className="modal">
                {props.children}
            </div>
        );
    }
    return null;
};

Modal.propTypes = {
    children: PropTypes.node.isRequired,
    isOpen: PropTypes.bool.isRequired,
};

export default Modal;
