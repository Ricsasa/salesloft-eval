const { GraphQLSchema } = require('graphql');
const { peopleQuery } = require('./queries');

exports.PeopleSchema = new GraphQLSchema({
  query: peopleQuery,
});
