/*const express = require('express')
const app = express()
const router = require('./functions/s3/index');


//app.use('/todos', router);
app.use('/', router);
router.get('/', (req, res) => {
    adsS3.writeS3()
} );

//var router = express.Router();
//router.route('/', adsS3.writeS3());

//app.use('/', adsS3.writeS3());
app.listen(3000, () => console.log('Server running on port 3000'))*/

const express = require('express');
const app = express();

let router = require('./routers/index')
app.use('/', router);

const server = app.listen(8080, function() {

    let host = server.address().address
    let port = server.address().port

    console.log("App listening at http://%s:%s',  host, port");
});