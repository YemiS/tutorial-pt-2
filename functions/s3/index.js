const  S3 = require('aws-sdk/clients/s3');

// route
const writeS3 = (req, res) => { 
    console.log('output')
  /*const s3 = new S3();
  const params = {
    Bucket: 'sls-logs-bucketyj',
    Key: 'success!!'
 }

  try {
         s3.putObject(params).promise().then((response) => {
            console.log( `a log sent successfully`);

         });
        //callback(null, `a log written successfully`);
       
    }
    catch (error) {
        //callback(error.message);
        console.log(error.message);
    }*/
};
 module.exports =  writeS3 ;
