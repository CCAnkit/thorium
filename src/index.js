const express = require('express');
const bodyParser = require('body-parser');
const requestIp = require('request-ip');
const route = require('./routes/route.js');
const { default: mongoose } = require('mongoose');
const moment = require('moment');


const app = express();


app.use(requestIp.mw({attributeName:'myIp'}))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(function(req,res,next){
   
  let newData=moment().format('YYYY-MM-DD HH:mm:ss:a');
  let ip=req.myIp;
  let apiMy=req.originalUrl;
  console.log(newData,ip,apiMy)
    next()
})

mongoose.connect("mongodb+srv://CCAnkit:CCAnkit09@clusternew.gds9x.mongodb.net/Ankit", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route);


app.listen(process.env.PORT || 3000, function () {
    console.log('Express app running on port ' + (process.env.PORT || 3000))
});
