var db = require('../db');
var mysql = require('mysql');



module.exports = {
  messages: {
    get: function (req, callback) {
      // Use ORM (Object Relational Mapping?) to communicate with DB
      db.dbConnection.connect();
      
      // create mysql query string
      var queryString = 'SELECT * FROM messages';

      dbConnection.query(
        queryString, 
        // values, 
        function(err, rows, fields) {
          if (err) {
            console.log('err: ', err); 
            throw err; 
          }
          console.log('rows: ', rows);
          console.log('fields: ', fields);
        }   
      );
      // callback(data);

    }, // a function which produces all the messages
    post: function () {} // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function () {}
  }
};

