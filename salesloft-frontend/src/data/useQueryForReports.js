import { useApolloClient, useQuery } from '@apollo/react-hooks';
import { GET_EMAIL_LIST_QUERY, GET_PEOPLE_QUERY, GET_QUERY_PARAMETERS } from './queries';

const useQueryForReports = (type) => {
  const client = useApolloClient();

  const { data } = useQuery(GET_QUERY_PARAMETERS);

  const { loading, error, data: allData } = useQuery(GET_PEOPLE_QUERY, {
    variables: { getAll: true, totalCount: data.totalCount },
  });

  let peopleRecords = [];

  if (type === 'page') {
    // retrieve from cache
    const { people: { people } } = client.readQuery({
      query: GET_EMAIL_LIST_QUERY,
      variables: {
        page: data.page,
        perPage: data.perPage,
      },
    });
    peopleRecords = people;
  } else if (allData) {
    peopleRecords = allData.people.people;
  }

  return [loading, peopleRecords, error];
};

export { useQueryForReports };
