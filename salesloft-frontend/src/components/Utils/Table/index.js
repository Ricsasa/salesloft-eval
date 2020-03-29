import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';

const Table = ({ children, compact }) => (
  <table className={`${compact && 'compact'}`}>
    {children}
  </table>
);

Table.propTypes = {
  children: PropTypes.element,
  compact: PropTypes.string,
}

export default Table;
