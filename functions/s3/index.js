const  S3 = require('aws-sdk/clients/s3');
const AWS = require('aws-sdk');

// route
const writeS3 = (options) => { 
    return (req, res) => { console.log('Kick starting now::')
  const s3 = new S3({accessKeyId: process.env.ACCESS_KEY_ID, secretAccessKey: process.env.SECRET_ACCESS_KEY});
  const params = {
    Bucket: 'sls-logs-bucketyj',
    Key: 'successful!!'
 }
 var metadata = new AWS.MetadataService();
            
            metadata.request('/latest/meta-data/iam/security-credentials/',function(err,rolename){
                if(err) console.log(error);
                console.log(rolename);            
               
            });
 console.log(s3);
  try {
         s3.putObject(params).promise().then((response) => {
            console.log( `a log sent successfully`);

         });
        //callback(null, `a log written successfu3lly`);
       
    }
    catch (error) {
        //callback(error.message);
        console.log(error.message);
    }
}
};
 module.exports =  writeS3 ;
