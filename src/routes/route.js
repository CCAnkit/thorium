let obj=require('../logger/logger.js');
let newObj=require('../util/helper.js');
let kb=require('lodash');
const express = require('express');
const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My first ever api!');
    obj.welcome();
    obj.printMessage('Thorium');
    console.log(obj.endPoint);
    console.log(newObj.varNew);
    newObj.dateInfo();
    newObj.month();
    newObj.batchInfo();
});
router.get('/hello', function (req, res){
    let array=["Jan","Feb","Mar","April","May","June","July","Aug","Sept","Oct","Nov","Dec"];
    const output=kb.chunk(array,[size=3]);
    console.log(output);
    
    
    const oldArr=[1,3,5,7,9,11,13,15,17,19];
    
    const tailArr=kb.tail(oldArr);
    console.log(tailArr);
    
    
    const unionArr=kb.union([1,2,3,4,5],[2,3,5,7,8],[4,6,8,0,1],[3,7,5,90],[12,4,77,9]);
    console.log(unionArr);
    
    
    const fromParisArr=kb.fromPairs( [["horror","The Shining"],["drama","Titanic"],["thriller","Shutter Island"],["fantasy","Pans Labyrinth"]
    ]);
    console.log(fromParisArr);
});

module.exports = router;