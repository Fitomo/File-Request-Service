const Url = require('../models/UrlModel');

module.exports = {
  insertUrlToDB: (url, userId = 15) => {
    new Url({ userId, url }).save().then((newUrl) => console.log('url saved!\n', newUrl));
  },
};
