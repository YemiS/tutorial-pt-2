const express = require('express')
const app = express()
let adsS3 = require('./functions/s3');

const router = express.Router();

router.get('/',() => {
     console.log('Call underway')
    const s3 = new S3();
    const params = {
      Bucket: 'sls-logs-bucketyj',
      Key: 'success!!'
   }
  
    try {
          await s3.putObject(params).promise();
         // callback(null, `a log written successfully`);
         console.log('a log written successfully')
      }
      catch (error) {
          //callback(error.message);
          console.log('unsuccessful attempt');
      }
  });

//var router = express.Router();
//router.route('/', adsS3.writeS3());

//app.use('/', adsS3.writeS3());
app.listen(3000, () => console.log('Server running on port 3000'))