import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Modal = ({ handleClose, children, title }) => (
  <div className="modal-container">
    <div className="modal">
      <div className="modal-title">
        <h2>
          {title}
        </h2>
      </div>
      <div className="modal-button">
        <button
          onClick={handleClose}
          type="button"
        >
          X
        </button>
      </div>
      <div className="modal-content">
        {children}
      </div>
      <div className="modal-footer">
        <button
          onClick={handleClose}
          type="button"
        >
          Close
        </button>
      </div>
    </div>
  </div>
);

Modal.propTypes = {
  handleClose: PropTypes.func,
  children: PropTypes.element,
  title: PropTypes.string,
};

export default Modal;
