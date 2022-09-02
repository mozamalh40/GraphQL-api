var express = require('express');
var { graphqlHTTP } = require('express-graphql');
require('dotenv').config();
const schema = require('./schema');
const connectDB = require('./config/db');







var app = express();

connectDB();


app.use('/graphql', graphqlHTTP({
    schema: schema,
//   rootValue: root,
  graphiql: process.env.NODE_ENV === 'development',
}));

const port = process.env.PORT || 5000;
app.listen(port, console.log(`Server running on port ${port}`));