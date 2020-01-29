const  S3 = require('aws-sdk/clients/s3');
const AWS = require('aws-sdk');

// route
const writeS3 = (options) => { 
    return (req, res) => { console.log('Kick starting role::')
  const s3 = new S3();
  const params = {
    Bucket: 'sls-logs-bucketyj',
    Key: 'successful_lambda_call!!'
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

        var lambda = new AWS.Lambda({region: "us-east-1"});
        const event = {
            "key1": "value1",
            "key2": "value2",
            "key3": "value3"
          }
 lambda.invoke({
    FunctionName: ':step-function-test-dev-writeS3',
    Payload: JSON.stringify(event, null, 2) // pass params
  }, function(error, data) {
    if (error) {
      console.log('error', error);
    }
    if(data.Payload){
     console.log('Payload::',data.Payload)
    }
  });
       
    }
    catch (error) {
        //callback(error.message);
        console.log(error.message);
    }
}
};
 module.exports =  writeS3 ;
