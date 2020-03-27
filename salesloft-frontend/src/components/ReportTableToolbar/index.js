import React from 'react';
import PagesSelector from './PagesSelector';
import PerPageSelector from './PerPageSelector';

import './styles.scss';

const ReportTableToolbar = (props) => {
  return (
    <div className="report-table-toolbar">
      <PagesSelector
        {...props}
      />
      <PerPageSelector
        {...props}
      />
    </div>
  );
};

export default ReportTableToolbar;
