module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'docker',
  database: 'sga',
  define: {
    timestamp: true,
    underscored: true,
    underscoredAll: true,
  },
};
