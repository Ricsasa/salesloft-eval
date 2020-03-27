import React from 'react';

const PerPageSelector = ({ loading, metadata }) => {
  if (loading) {
    return (
      <div className="per-page-selector-container">
        Loading...
      </div>
    );
  }

  const { per_page } = metadata;

  return (
    <div className="per-page-selector-container">
      Results per page:
      <PerPageButton perPage={per_page} value={25} /> / 
      <PerPageButton perPage={per_page} value={50} /> / 
      <PerPageButton perPage={per_page} value={100} />
    </div>
  );
};

const PerPageButton = ({ perPage, value }) => {
  return (
    <button
      className={`${perPage === value ? 'selected' : ''}`}
    >
      {value}
    </button>
  );
};

export default PerPageSelector;
