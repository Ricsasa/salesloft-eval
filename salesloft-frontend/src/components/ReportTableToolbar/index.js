import React from 'react'

import PagesSelector from './PagesSelector';
import PerPageSelector from './PerPageSelector';

import './styles.scss';

const ReportTableToolbar = (props) => {
  const totalResults = props.loading ?
    (
      <>
        Loading...
      </>
    ) : (
      <>
        {props.metadata.total_count} found records
      </>
    );

  return (
    <div className="report-table-toolbar">
      <PagesSelector
        {...props}
      />
      <span className="total-results-container">
        {totalResults}
      </span>
      <PerPageSelector
        {...props}
      />
    </div>
  );
};

export default ReportTableToolbar;
