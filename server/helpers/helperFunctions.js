const Url = require('../models/UrlModel');

module.exports = {
  insertUrlToDB: (url, userId) => {
    new Url({ userId, url }).save().then((newUrl) => console.log('url saved!\n', newUrl));
  },
};
