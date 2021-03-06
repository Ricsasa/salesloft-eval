import { gql } from 'apollo-boost';

const GET_PEOPLE_QUERY = gql`
  query getPeople($page: Int, $perPage: Int, $getAll: Boolean, $totalCount: Int) {
    people(page: $page, perPage: $perPage, getAll: $getAll, totalCount: $totalCount) {
      people {
        id
        display_name
        email_address
        title
      }
      metadata {
        per_page
        current_page
        next_page
        prev_page
        total_pages
        total_count
      }
    }
  }`;

const GET_METADATA_QUERY = gql`
  query getMetadata($page: Int, $perPage: Int) {
    people(page: $page, perPage: $perPage) {
      metadata {
        per_page
        total_pages
        total_count
      }
    }
  }`;

const GET_EMAIL_LIST_QUERY = gql`
  query getPeople($page: Int, $perPage: Int) {
      people(page: $page, perPage: $perPage) {
        people {
          email_address
        }
      }
  }`;

const GET_QUERY_PARAMETERS = gql`
  {
    page @client
    perPage @client 
    totalCount @client
  }`;

export {
  GET_EMAIL_LIST_QUERY,
  GET_METADATA_QUERY,
  GET_PEOPLE_QUERY,
  GET_QUERY_PARAMETERS,
};
