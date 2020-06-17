//require
const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const xssFilter = require('x-xss-protection');
const whitelist = ['http://localhost:3000'];

const connection = require('./src/helpers/mysql');
const corsHelper =  require('./src/helpers/cors');
const routes = require('./src/routes/index');

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

//connection database
connection.connect(function(error){
    if (error) throw error;
    console.log('Database has connection!');
});

//CORS
app.use(cors());
app.options('*', cors(corsHelper.corsOptions));
app.use(xssFilter());

//Routes
app.use('/', routes);

//port
app.listen(3000, function(){
    console.log('Running at Port 3000!');
});