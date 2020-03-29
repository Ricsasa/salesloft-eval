import React from 'react';
import PropTypes from 'prop-types';

import { LoadingIcon, Table } from '../Utils';

const ReportTable = ({ loading, people }) => {
  let tableBody = null;

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
    tableBody =
      people.map((person) => (
        <ReportTableRow {...person}
          key={person.id}
        />));
  }

  return (
    <Table>
      <thead>
        <tr>
          <th>Display Name</th>
          <th>Email Address</th>
          <th>Title</th>
        </tr>
      </thead>
      <tbody>
        {tableBody}
      </tbody>
    </Table>
  );
};

export const ReportTableRow = (person) => (
  <tr>
    <td className="truncate">
      {person.display_name}
    </td>
    <td className="truncate">
      {person.email_address}
    </td>
    <td className="truncate">
      {person.title}
    </td>
  </tr>
);

ReportTable.propTypes = {
  loading: PropTypes.bool,
  people: PropTypes.array,
};

ReportTableRow.propTyes = {
  person: PropTypes.object,
};

export default ReportTable;
