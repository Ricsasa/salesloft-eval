import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const ActionButton = ({ additionalClass, callback, children }) => {
  const clickHandler = (e) => {
    const { target: { value } } = e;
    callback(value);
  };

  return (
    <button
      className={`action-button ${additionalClass}`}
      onClick={clickHandler}
      type="button"
    >
      {children}
    </button>
  );
};

ActionButton.propTypes = {
  additionalClass: PropTypes.string,
  callback: PropTypes.func,
  children: PropTypes.element,
};

export default ActionButton;
