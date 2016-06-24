module.exports = {
  uploadFile: (req, res) => {
    const data = JSON.parse(Object.keys(req.body)[0]);
    const { filename, filetype, data_uri } = data;
    
    res.json(data);
  },
};
