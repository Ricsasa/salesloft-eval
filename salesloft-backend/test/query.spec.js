const nock = require('nock');
const BASE_URL = require('../src/config').BASE_URL;
const { graphql } = require('graphql');

const { PeopleSchema } = require('../src/people/schema');

const schema = PeopleSchema;

const context = {
  metadata: {
    per_page: 2,
    current_page: 1,
    next_page: 2,
    prev_page: null,
    total_pages: 176,
    total_count: 351
  },
  people: [
    {
      id: 249340741,
      first_name: 'Steven',
      last_name: 'Pease',
      display_name: 'Steven Pease',
      email_address: 'sakatius@gmail.com',
      title: 'Software Engineer'
    },
    {
      id: 251436152,
      first_name: 'Possibly',
      last_name: 'Duplicate',
      display_name: 'Possibly Duplicate',
      email_address: 'sakatiuss@gmail.com',
      title: 'My Job'
    }
  ]
};

describe('query', () => {
  it('should fail if incorrect query is tried', async () => {

    const query = `
      query getPeople($page: Int, $perPage: Int) {
        people(page: $page, perPage: $perPage) {
          people {
            id
            display_name
            email_address
            title
            non_existant_field
          }
        }
      }    
    `;

    const variables = {
      page: 1,
      perPage: 25,
    };

    const result = await graphql(schema, query, null, context, variables);
    return expect(result.errors.length).toEqual(1);
  });

  it('should fail if incorrect vars type are passed', async () => {

    const query = `
      query getPeople($page: Int, $perPage: Int) {
        people(page: $page, perPage: $perPage) {
          people {
            id
            display_name
            email_address
            title
          }
        }
      }    
    `;

    const variables = {
      page: 1,
      perPage: 'string',
    };

    const result = await graphql(schema, query, null, context, variables);
    return expect(result.errors.length).toEqual(1);
  });
});