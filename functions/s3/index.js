const  S3 = require('aws-sdk/clients/s3');
const AWS = require('aws-sdk');

// route
const writeS3 = (options) => { 
    return (req, res) => { console.log('Kick starting role::')
  const s3 = new S3();
  const params = {
    Bucket: 'sls-logs-bucketyj',
    Key: 'successful_role!!'
 }
 var metadata = new AWS.MetadataService();
            
            metadata.request('/latest/meta-data/iam/security-credentials/',function(err,rolename){
                if(err) console.log(error);
                console.log(rolename);            
               
            });
 
  try {
         s3.putObject(params).promise().then((response) => {
            console.log( `a log was sent successfully today`);

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
