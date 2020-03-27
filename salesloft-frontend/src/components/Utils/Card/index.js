import React from 'react';
import './styles.scss';

const Card = ({children}) => {
  return(
    <div className="card">
      <div className="container">
        {children}
      </div>
    </div>
  );
};

export default Card;
