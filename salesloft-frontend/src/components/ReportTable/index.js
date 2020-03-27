import React from 'react';
import { LoadingIcon } from '../Utils';
import './styles.scss';

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
      people.map(person =>
        <ReportTableRow {...person}
          key={person.id} />
      );
  }

  return (
    <table>
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
    </table>
  )
};

const ReportTableRow = (person) => {
  return (
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
};

export default ReportTable;
