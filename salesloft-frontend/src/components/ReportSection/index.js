import React, { useState } from 'react';

import ReportTable from '../ReportTable';
import ReportTableToolbar from '../ReportTableToolbar';
import { useQuery } from '@apollo/react-hooks';
import { GET_PEOPLE_QUERY, GET_QUERY_PARAMETERS } from '../../data/queries';

const ReportSection = () => {
  const [page, setPage] = useState(1);
  const [perPage, setPerPage] = useState(25);

  const { loading, error, data, refetch } = useQuery(GET_PEOPLE_QUERY, {
    variables: { page, perPage },
  });

  const { client } = useQuery(GET_QUERY_PARAMETERS);

  const changePage = (value) => {
    setPage(value);
    client.writeData({ data: { page: value, perPage } });
    refetch();
  };

  const changePerPage = (newPerPage) => {
    setPerPage(newPerPage);
    setPage(1);
    client.writeData({ data: { page: 1, perPage: newPerPage } });
    refetch();
  };

  let meta = {};
  if (data) {
    meta = data.people.metadata;
    client.writeData({ data: { totalCount: meta.total_count } });
  }

  if (error) return `Error! ${error}`;

  return (
    <>
      <ReportTableToolbar
        loading={loading}
        metadata={meta}
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

export default ReportSection;
