import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Card = ({ children }) => (
  <div className="card">
    <div className="container">
      {children}
    </div>
  </div>
);

Card.propTypes = {
  children: PropTypes.element,
};

export default Card;
