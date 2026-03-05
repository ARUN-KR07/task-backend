const { UsersService } = require('./users.class');
const createModel = require('../../models/users.model');
const usersHooks = require('./users.hooks');

module.exports = function (app) {

  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service
  app.use('/users', new UsersService(options, app));

  // Get our initialized service to register hooks
  const service = app.service('users');

  service.hooks(usersHooks);  // attach hooks here
};