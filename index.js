const express = require('express')
const app = express()
let adsS3 = require('./functions/s3');

const router = express.Router();

router.use(require('./functions/s3'));
app.use(router);

//var router = express.Router();
//router.route('/', adsS3.writeS3());

//app.use('/', adsS3.writeS3());
app.listen(3000, () => console.log('Server running on port 3000'))