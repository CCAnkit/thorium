const express = require('express');
const bodyParser = require('body-parser');
const route = require('./routes/route.js');
const mongoose = require('mongoose');
const multer  = require('multer')
const app = express();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/',route);
app.use(multer().any())


mongoose.connect("mongodb+srv://CCAnkit:CCAnkit09@clusternew.gds9x.mongodb.net/Ankit/group24Database",{
	useNewUrlParser:true})
.then(()=>console.log("MongoDb connected"))
.catch(err=>console.log(err))


app.listen(process.env.PORT || 3000, function() {
	console.log('Express app running on port ' + (process.env.PORT || 3000))
});
