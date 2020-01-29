const express = require('express')
const app = express();
const adsS3 = require('./functions/s3');

app.get('/', () => { adsS3.writeS3(); });

//var router = express.Router();
//router.route('/', adsS3.writeS3());

//app.use('/', adsS3.writeS3());
app.listen(3000, () => console.log('Server running on port 3000'));

