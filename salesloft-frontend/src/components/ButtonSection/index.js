import React from 'react';

import DuplicateReport from '../DuplicatesReport';
import Statistics from '../Statistics';
import { ReportBehaviorButton } from '../Utils';

const ButtonSection = () => (
  <div className="button-container">
    <ReportBehaviorButton
      caption="Generate Statistics for Records in page"
    >
      <Statistics
        type="page"
      />
    </ReportBehaviorButton>
    <ReportBehaviorButton
      caption="Generate Statistics for all Records"
    >
      <Statistics
        type="global"
      />
    </ReportBehaviorButton>
    <ReportBehaviorButton
      caption="Generate Duplicate Report for Records in page"
    >
      <DuplicateReport
        type="page"
      />
    </ReportBehaviorButton>
    <ReportBehaviorButton
      caption="Generate Duplicate Report for all Records"
    >
      <DuplicateReport
        type="global"
      />
    </ReportBehaviorButton>
  </div>
);

export default ButtonSection;
