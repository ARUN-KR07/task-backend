import { UsersService } from './users.class.js';
import * as usersHooks from './users.hooks.js';

export default function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  app.use('/users', new UsersService(options, app));

  const service = app.service('users');
  service.hooks(usersHooks);
}