const AWS = require('aws-sdk');
const configPath = require('path').join(__dirname, '../config/aws-config.json');
AWS.config.loadFromPath(configPath);
const s3 = new AWS.S3();
const fs = require('fs');
const formidable = require('formidable');
const { insertUrlToDB } = require('../helpers/helperFunctions');
const Url = require('../models/UrlModel');

module.exports = {
  uploadFile: (req, res) => {
    const form = new formidable.IncomingForm();
    form.parse(req, (formError, fields, files) => {
      const { name, path, type } = files.file;
      const { userId } = fields; // use 'let' to enable default parameter
      const params = {
        Bucket: 'fitomo',
        ACL: 'public-read',
        Key: `images/${name}`,
        Body: fs.createReadStream(path),
        ContentType: type,
      };
      s3.upload(params, (s3Error, data) => {
        let result = '';
        if (s3Error) {
          console.log('Upload failed ---->\n', s3Error);
          result = 'Upload failed. See the console for more information';
        } else {
          console.log('Upload succeeded ---->\n', data);
          result = 'Upload succeeded';
          insertUrlToDB(data.Location, userId); // save uploaded url to the database;
        }
        res.send(result);
      });
    });
  },
  downloadFiles: (req, res) => {
    const userId = parseInt(req.query.userId, 10);
    console.log('userId ----->', userId);
    Url.where({ userId }).fetchAll().then(({ models }) => {
      const urls = [];
      models.forEach(({ attributes }) => {
        urls.push({
          url: attributes.url,
          createdAt: attributes.created_at,
        });
      });
      res.send(urls);
    });
  },
};
