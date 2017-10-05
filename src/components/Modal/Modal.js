import React from 'react';
import PropTypes from 'prop-types';

const Modal = (props) => {
    return (
        <div className="modal">
            {props.children}
        </div>
    );
};


Modal.propTypes = {
    children: PropTypes.node.isRequired,
};

export default Modal;
