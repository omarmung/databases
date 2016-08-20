var db = require('../db/index.js');
var mysql = require('mysql');



module.exports = {
  messages: {
    get: function (req, callback) {

      // Use ORM (Object Relational Mapping?) to communicate with DB
      db.dbConnection.connect();
      
      // create mysql query string
      var queryString = 'SELECT * FROM messages;';

      db.dbConnection.query(
        queryString, 
        // [], 
        function(err, rows, fields) {
          if (err) {
            console.log('err: ', err); 
            throw err; 
          }
          callback(JSON.stringify(rows));
        }   
      );
      // db.dbConnection.end();

    }, // a function which produces all the messages
    post: function () {

    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {

      // Use ORM (Object Relational Mapping?) to communicate with DB
      db.dbConnection.connect();
      
      // create mysql query string
      var queryString = 'SELECT * FROM users;';

      db.dbConnection.query(
        queryString, 
        // [], 
        function(err, rows, fields) {
          if (err) {
            console.log('err: ', err); 
            throw err; 
          }
          callback(JSON.stringify(rows));
        }   
      );
      // db.dbConnection.end();

    },
    post: function () {

    }
  }
};

