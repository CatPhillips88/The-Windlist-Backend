'use strict';

const serverless = require('serverless-http');
const express = require('express');
const app = express();
const uuidv4 = require('uuid/v4');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host     : 'XXXX',
  user     : 'XXXX',
  password : 'XXXX',
  database : 'XXXX'
});

// RETRIEVE TASKS
app.get('/tasks', function (req, res) {
  
  connection.query('SELECT * FROM `tasks` WHERE `user_id` = 1', function (error, results, fields) {
    // error will be an Error if one occurred during the query
    if(error) {
      console.error("There is an error with query when fetching tasks", error);
      res.status(500).json({errorMessage: error});
    }
    else {
      // Query was successful
      res.json({tasks: results});
    }
    // results will contain the results of the query
    // fields will contain information about the returned results fields (if any)
  });

  
});

// CREATING TASKS
app.post('/tasks', function (req, res) {
  res.json({
    message: 'Your POST works'
  });
});

// UPDATING TASKS
app.put('/tasks/:id', function (req, res) {
  res.json({
    message: 'Your PUT works',
  });
});

// DELETING TASKS
app.delete('/tasks/:id', function (req, res) {
  res.json({
    message: 'Your DELETE works',
  });
});




module.exports.tasks = serverless(app);

