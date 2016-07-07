const { uploadFile, downloadFiles } = require('../controllers/RequestController');

module.exports = (app) => {
  app.post('/api/upload', uploadFile);
  app.get('/api/download', downloadFiles);
};
