import Sequelize from 'sequelize';

import User from '../app/models/User';
import File from '../app/models/File';
import Enterprise from '../app/models/Enterprise';

import databaseConfig from '../config/database';

const models = [User, File, Enterprise];

class Database {
  constructor() {
    this.init();
  }

  async init() {
    try {
      this.connection = new Sequelize(databaseConfig);
      models
        .map(model => model.init(this.connection))
        .map(
          model => model.associate && model.associate(this.connection.models)
        );

      await this.connection.authenticate();
      console.log('Database connection successful');
    } catch (error) {
      console.error(error);
    }
  }
}

export default new Database();
