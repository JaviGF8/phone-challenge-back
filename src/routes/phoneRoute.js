const functions = require('../controllers/phoneController');

module.exports = function (app) {
  // functions Routes
  app.route('/phones')
    .get(functions.endpoints.findAll)
};
