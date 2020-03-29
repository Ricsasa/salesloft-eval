import React from 'react';
import PropTypes from 'prop-types';

import { useQueryForReports } from '../../data/useQueryForReports';
import { generateStatistics } from '../../data/dataProcessor';
import { LoadingIcon, Table } from '../Utils';

const Statistics = ({ type }) => {
  // Use custom hook to share logic between components
  const [loading, peopleRecords, error] = useQueryForReports(type);

  let tableBody = [];

  if (error) return `Error! ${error}`;

  if (loading) {
    tableBody = (
      <tr>
        <td colSpan="3">
          <div className="loading-container">
            <LoadingIcon />
          </div>
        </td>
      </tr>
    );
  } else {
    const emailList = peopleRecords.map((person) => person.email_address);

    const statistics = generateStatistics(emailList);

    statistics.forEach((frequency, char) => {
      tableBody.push((
        <StatisticsRow
          char={char}
          frequency={frequency}
          key={char}
        />
      ));
    });
  }

  return (
    <div className="modal-table-fill">
      <Table compact>
        <thead>
          <tr>
            <th>
              Char
            </th>
            <th>
              Frequency
            </th>
          </tr>
        </thead>
        <tbody>
          {tableBody}
        </tbody>
      </Table>
    </div>
  );
};

export const StatisticsRow = ({ char, frequency }) => (
  <tr>
    <td className="truncate">
      {char}
    </td>
    <td className="truncate">
      {frequency}
    </td>
  </tr>
);

Statistics.propTypes = {
  type: PropTypes.string
};

StatisticsRow.propTypes = {
  char: PropTypes.string,
  frequency: PropTypes.string,
};

export default Statistics;
