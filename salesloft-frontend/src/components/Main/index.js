import React from 'react';
import { Card } from '../Utils';

import ReportContainer from '../ReportContainer';

import './styles.scss';

const Main = () => {
  return (
    <main>
      <div className="wrapper">
        <Card>
          <h1>Texto</h1>
        </Card>
        <Card>
          <ReportContainer />
        </Card>
      </div>
    </main>
  );
};

export default Main;
