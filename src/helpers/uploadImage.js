const multer  = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, callbback) => {
      callbback(null, './src/public/images');
    },
    filename: (req, file, callbback) => {
      console.log(file);
      var filetype = '';
      if(file.mimetype === 'image/png') {
        filetype = 'png';
      }
      if(file.mimetype === 'image/jpeg') {
        filetype = 'jpg';
      }
      callbback(null, 'image-' + Date.now() + '.' + filetype);
    }
});
const upload = multer({storage: storage, limits: {
  fileSize: 1024 * 1024 * 5
}});

module.exports = upload;