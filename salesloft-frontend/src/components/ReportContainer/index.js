import React, { useState } from 'react';
import ReportTable from '../ReportTable';
import ReportTableToolbar from '../ReportTableToolbar';

import { useQuery } from '@apollo/react-hooks';
import { GET_PEOPLE_QUERY } from '../../graphql/queries';

const ReportContainer = () => {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(25);

  const { loading, error, data, refetch } = useQuery(GET_PEOPLE_QUERY, {
    variables: { page, perPage }
  });

  const changePage = value => {
    setPage(value);
    refetch();
  };

  const changePerPage = newPerPage => {
    setPerPage(newPerPage);
    setPage(1);
    refetch();
  };

  if (error) return `Error! ${error}`;

  return (
    <>
      <ReportTableToolbar
        loading={loading}
        metadata={data ? data.people.metadata : null}
        changePage={changePage}
        changePerPage={changePerPage}
      />
      <ReportTable
        loading={loading}
        people={data ? data.people.people : null}
      />
    </>
  );
};

export default ReportContainer;
