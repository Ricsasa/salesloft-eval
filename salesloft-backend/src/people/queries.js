const { GraphQLBoolean, GraphQLInt, GraphQLObjectType } = require('graphql');
const { peopleResolver } = require('./resolvers');
const { peopleList } = require('./typeDef');

exports.peopleQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
      people: {
        type: peopleList,
        args: {
          getAll: {type: GraphQLBoolean},
          page: { type: GraphQLInt },
          perPage: { type: GraphQLInt },
          totalCount: { type: GraphQLInt },
        },
        resolve: peopleResolver
      }
  }
});
