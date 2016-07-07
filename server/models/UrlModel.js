const db = require('../config/db');
const Url = db.Model.extend({
  tableName: 'urls',
  hasTimestamps: true,
});

module.exports = Url;
