module.exports = {
  up: queryInterface => {
    return queryInterface.sequelize.query('CREATE EXTENSION postgis;');
  },

  down: queryInterface => {
    queryInterface.sequelize.query('DROP EXTENSION postgis;');
  },
};
