import React from 'react';
import PropTypes from 'prop-types';

import { useQueryForReports } from '../../data/useQueryForReports';
import { generateDuplicateReport } from '../../data/dataProcessor';
import { LoadingIcon, Table } from '../Utils';

const DuplicatesReport = ({ type }) => {
  // use custom hook to share logic between components
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

    const duplicates = generateDuplicateReport(emailList);

    let index = 0;
    if (duplicates.size === 0) {
      tableBody = (
        <tr>
          <td colSpan="3">
            <div className="loading-container">
              No Duplicates Found!
            </div>
          </td>
        </tr>
      );
    } else {
      duplicates.forEach((firstRecord, possibleDuplicate) => {
        tableBody.push(
          <DuplicatesRow
            firstRecord={firstRecord}
            possibleDuplicate={possibleDuplicate}
            key={index++}
          />
        );
      });
    }
  }

  return (
    <div className="modal-table-fill">
      <Table compact>
        <thead>
          <tr>
            <th>
              First Record
            </th>
            <th>
              Possible Duplicate
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

export const DuplicatesRow = ({ firstRecord, possibleDuplicate }) => (
  <tr>
    <td className="truncate">
      {firstRecord}
    </td>
    <td className="truncate">
      {possibleDuplicate}
    </td>
  </tr>
);

DuplicatesReport.propTypes = {
  type: PropTypes.string
};

DuplicatesRow.propTypes = {
  firstRecord: PropTypes.string,
  possibleDuplicate: PropTypes.string,
};

export default DuplicatesReport;
