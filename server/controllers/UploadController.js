const AWS = require('aws-sdk');
const configPath = require('path').join(__dirname, '../config/aws-config.json');
AWS.config.loadFromPath(configPath);
const s3 = new AWS.S3();
const fs = require('fs');
const formidable = require('formidable');

module.exports = {
  uploadFile: (req, res) => {
    const form = new formidable.IncomingForm();
    form.parse(req, (formError, fields, files) => {
      const { name, path } = files.file;
      const params = {
        Bucket: 'fitomo',
        ACL: 'public-read',
        Key: name,
        Body: fs.createReadStream(path),
      };
      s3.upload(params, (s3Error, data) => {
        let result = '';
        if (s3Error) {
          console.log('Upload failed ---->\n', s3Error);
          result = 'Upload failed. See the console for more information';
        } else {
          console.log('Upload succeeded ---->\n', data);
          result = `<img src="${data.Location}">`;
        }
        res.send(`${result}`);
      });
    });
  },
};
