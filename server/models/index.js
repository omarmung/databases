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
    post: function (req, callback) {
      db.dbConnection.connect();
      
      var username = req.body.username;
      console.log('is username string?', username, typeof username);
      var roomname = req.body.roomname;
      var message = req.body.message;

      console.log('MODEL POST - REQ.body', req.body);
    

    // check if username exists in db
      // form new query string about username existence
      var queryString = "SELECT id FROM users WHERE username = '" + username + "';";
      // connect to database
      db.dbConnection.query(
        queryString, 
        // [], 
        function(err, rows, fields) {
      // if no
          if (err) {
            // throw err;
        // insert new row into username table
            var errorQueryString = 
              "INSERT INTO users (username) VALUES ('" + username + "');";

            db.dbConnection.query(
              errorQueryString, 
              // [], 
              function(err, rows, fields) {
                if (err) {
                  console.log('err: ', err); 
                  throw err; 
                }
          // do a Q to get that ID
                //TODO: get the ID
            // save that as userID
                //callback(JSON.stringify(rows));
              }   
            );

          }
      // if yes
        // get id from result and 
        // save that as userID
          // save that as userID
          userID = rows[0].id;
          console.log('userID: ', userID);
        }   
      );




      

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

