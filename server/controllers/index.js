var models = require('../models');

module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(req, function(data) {
        
      // TODO
        // add headers
        // res.writeHead(200, headers); 
        res.end(data);
      });
    }, // a function which handles a get request for all messages
    post: function (req, res) {} // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {}
  }
};

