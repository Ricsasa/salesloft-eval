const express = require('express')
const app = express()
const graphqlExpress = require('express-graphql');
const { PeopleSchema } = require('./src/people/schema');
const cors = require('cors');

app.use(cors());

app.set('port', (process.env.PORT || 4000));

app.listen(app.get('port'), ()=> {
    console.log("Node app is running at localhost:" + app.get('port'))
});

app.use('/graphql', graphqlExpress({
  schema: PeopleSchema,
  rootValue: global,
  graphiql: true
}));
