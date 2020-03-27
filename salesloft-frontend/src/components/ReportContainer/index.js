import React from 'react';
import ReportTable from '../ReportTable';
import ReportTableToolbar from '../ReportTableToolbar';

import { useQuery } from '@apollo/react-hooks';
import { GET_PEOPLE_QUERY } from '../../graphql/queries';

const ReportContainer = () => {
  const { loading, error, data } = useQuery(GET_PEOPLE_QUERY, {  });

  if (error) return `Error! ${error}`;

  return (
    <>
      <ReportTableToolbar
        loading={loading}
        metadata={data ? data.people.metadata : null}
      />
      <ReportTable
        loading={loading}
        people={data ? data.people.people: null}
      />
    </>
  );
};

export default ReportContainer;
