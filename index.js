const express = require('express')
const app = express()
var adsS3 = require('./functions/s3');

app.use('/', adsS3.writeS3());
app.listen(3000, () => console.log('Server running on port 3000'))