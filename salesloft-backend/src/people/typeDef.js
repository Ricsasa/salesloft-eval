const {
  GraphQLID,
  GraphQLInt,
  GraphQLList,
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
} = require('graphql');

const peopleType = new GraphQLObjectType({
  name: 'people',
  fields: () => {
    return {
      id: { type: new GraphQLNonNull(GraphQLID) },
      first_name: { type: GraphQLString },
      last_name: { type: GraphQLString },
      display_name: { type: GraphQLString },
      email_address: { type: GraphQLString },
      title: { type: GraphQLString },
    }
  }
});

exports.peopleList = new GraphQLObjectType({
  name: 'peopleList',
  fields: () => {
    return {
      per_page: { type: GraphQLInt },
      current_page: { type: GraphQLInt },
      next_page: { type: GraphQLInt },
      prev_page: { type: GraphQLInt },
      total_pages: { type: GraphQLInt },
      total_count: { type: GraphQLInt },
      people: { type: new GraphQLList(peopleType) }
    }
  }
});
