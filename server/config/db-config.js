module.exports = {
  host: process.env.DB_HOST,
  database: process.env.APP_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  charset: 'utf8',
};
