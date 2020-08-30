var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const firebase = require("firebase");
const { graphqlHTTP } = require('express-graphql');
const cors = require('cors');



const config = {
    apiKey: "AIzaSyDYAUieF8LwMp6Uhmu-iO521jPa9a0HKMA",
    authDomain: "phonebook-d3ea8.firebaseapp.com",
    databaseURL: "https://phonebook-d3ea8.firebaseio.com",
    projectId: "phonebook-d3ea8",
    storageBucket: "phonebook-d3ea8.appspot.com",
    messagingSenderId: "707227753522"
};
firebase.initializeApp(config);

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('*', cors());

app.use('/', indexRouter);
app.use('/users', usersRouter);


var userSchema = require('./graphql').userSchema;
app.use('/graphql', cors(), graphqlHTTP({
    schema: userSchema,
    rootValue: global,
    graphiql: true
}));


module.exports = app;
