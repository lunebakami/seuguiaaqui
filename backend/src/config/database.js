module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: 'postgres',
  database: 'sga',
  define: {
    timestamp: true,
    underscored: true,
    underscoredAll: true,
  },
};
