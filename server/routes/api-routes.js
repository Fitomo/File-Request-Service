const UploadController = require('./../controllers/UploadController');

module.exports = (app) => {
  app.post('/api/upload', UploadController.uploadFile);
};
