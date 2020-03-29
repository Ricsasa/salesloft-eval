const nock = require('nock');
const BASE_URL = require('../src/config').BASE_URL;
const { peopleResolver } = require('../src/people/resolvers');

const mockRetrieve = {
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

describe('peopleResolver', () => {
  it('should retrieve data and parse it in proper format', async () => {
    // Interceptor for http requests
    nock(BASE_URL)
      .get(`/people?per_page=25&page=1&include_paging_counts=true`)
      .reply(200, {
        metadata: {
          filtering: {},
          paging: {
            per_page: 2,
            current_page: 1,
            next_page: 2,
            prev_page: null,
            total_pages: 176,
            total_count: 351
          },
          sorting: { sort_by: 'updated_at', sort_direction: 'DESC NULLS LAST' }
        },
        data: [
          {
            id: 249340741,
            first_name: 'Steven',
            last_name: 'Pease',
            display_name: 'Steven Pease',
            email_address: 'sakatius@gmail.com',
            title: 'Software Engineer',
          },
          {
            id: 251436152,
            first_name: 'Possibly',
            last_name: 'Duplicate',
            display_name: 'Possibly Duplicate',
            email_address: 'sakatiuss@gmail.com',
            title: 'My Job',
          }
        ]
      }
    );

    const args = {};
    const ctx = {};

    const data = await peopleResolver({}, args, ctx);

    expect(JSON.stringify(data) === JSON.stringify(mockRetrieve)).toEqual(true);

  });
});
