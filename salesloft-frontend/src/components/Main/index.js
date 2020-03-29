import React from 'react';

import { Card } from '../Utils';
import ButtonSection from '../ButtonSection';
import ReportSection from '../ReportSection';

import './styles.scss';

const Main = () => (
  <main>
    <div className="wrapper">
      <Card>
        <ButtonSection />
      </Card>
      <Card>
        <ReportSection />
      </Card>
    </div>
  </main>
);

export default Main;
