const { GraphQLInt, GraphQLObjectType } = require('graphql');
const { peopleResolver } = require('./resolvers');
const { peopleList } = require('./typeDef');

exports.peopleQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
      people: {
        type: peopleList,
        args: {
          perPage: { type: GraphQLInt },
          page: { type: GraphQLInt },
        },
        resolve: peopleResolver
      }
  }
});
