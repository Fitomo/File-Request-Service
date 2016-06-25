const db = require('../config/db');
const Url = db.model.extend({
  tableName: 'urls',
  hasTimestamps: true,
});

module.exports = Url;
