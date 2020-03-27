import React from 'react';

const PerPageSelector = ({ loading, metadata, changePerPage }) => {
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
      <PerPageButton perPage={per_page} value={25} changePerPage={changePerPage}/> / 
      <PerPageButton perPage={per_page} value={50} changePerPage={changePerPage}/> / 
      <PerPageButton perPage={per_page} value={100} changePerPage={changePerPage}/>
    </div>
  );
};

const PerPageButton = ({ perPage, value, changePerPage }) => {
  const clickHandler = (e) => {
    const { target: {value}} = e;
    changePerPage(parseInt(value));
  };

  return (
    <button
      className={`${perPage === value ? 'selected' : ''}`}
      onClick={clickHandler}
      value={value}
    >
      {value}
    </button>
  );
};

export default PerPageSelector;
