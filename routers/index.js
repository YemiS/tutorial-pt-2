const  Router  = require('express');
const router = Router();

 //const adsS3= require('../functions/s3/index');

//router.get('/', () => {
  //  adsS3.writeS3();
//});

router.use('/search', require('../functions/s3/index'));

module.exports = { router };