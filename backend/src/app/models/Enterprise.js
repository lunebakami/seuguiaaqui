import Sequelize, { Model } from 'sequelize';
import bcrypt from 'bcryptjs';

class Enterprise extends Model {
  static init(sequelize) {
    super.init(
      {
        name: Sequelize.STRING,
        description: Sequelize.STRING,
        phone: Sequelize.INTEGER,
        email: Sequelize.STRING,
        password: Sequelize.VIRTUAL,
        password_hash: Sequelize.STRING,
        localization: Sequelize.GEOMETRY,
      },
      {
        sequelize,
      }
    );

    this.addHook('beforeSave', async enterprise => {
      if (enterprise.password) {
        enterprise.password_hash = await bcrypt.hash(enterprise.password, 8);
      }
    });

    return this;
  }

  static associate(models) {
    this.belongsTo(models.File, { foreignKey: 'avatar_id', as: 'avatar' });
  }

  checkPassword(password) {
    return bcrypt.compare(password, this.password_hash);
  }
}

export default Enterprise;
