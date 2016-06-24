const { uploadFile } = require('./../controllers/UploadController');

module.exports = (app) => {
  app.post('/api/upload', uploadFile);
};
