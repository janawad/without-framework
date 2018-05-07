    var express=require("express");
    var bodyParser=require('body-parser');
    var app = express();
    var authenticateController=require('./controllers/authenticate-controller');
    var registerController=require('./controllers/register-controller');
    var deleteController=require('./controllers/deleteuser-controller');
    app.use(bodyParser.urlencoded({extended:false}));
    app.use(bodyParser.json());
    /* route to handle login and registration */
    app.post('/api/register',registerController.register);
    app.post('/api/authenticate',authenticateController.authenticate);
    app.post('/api/deleteuser',deleteController.deleteuser);
    app.listen(8000);