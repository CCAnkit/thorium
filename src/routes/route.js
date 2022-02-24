const express = require('express');
const router = express.Router();

let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ],
           "bookings": []
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ],
           "bookings": []
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ],
           "bookings": []
       },
    ];
//Q1)
    router.post("/players", function(req, res) {
        let value=req.body.name;
        let value1=req.body.dob;
        let value2=req.body.gender;
        let value3=req.body.city;
        let value4=req.body.sports;
        let value5=req.body.bookings;
        let players1;
        for(let i=0;i<players.length;i++)
    {
        if(players[i].name==value)
        {
           res.send("Player With same name already exist");
        }
        
        else
        {
            players.push(value,value1,value2,value3,value4,value5);
            
            res.send({msg:players,status:true});
        }
        
    }
    });
//Q2)
const express = require('express');
const { is } = require('express/lib/request');
const router = express.Router();


let players =
   [
       {
           "name": "manish",
           "dob": "1/1/1995",
           "gender": "male",
           "city": "jalandhar",
           "sports": [
               "swimming"
           ],
           "bookings": []
       },
       {
           "name": "gopal",
           "dob": "1/09/1995",
           "gender": "male",
           "city": "delhi",
           "sports": [
               "soccer"
           ],
           "bookings": []
       },
       {
           "name": "lokesh",
           "dob": "1/1/1990",
           "gender": "male",
           "city": "mumbai",
           "sports": [
               "soccer"
           ],
           "bookings": []
       },
    ];

    router.post("/players", function(req, res) {
        let value=req.body.name;
        let value1=req.body.dob;
        let value2=req.body.gender;
        let value3=req.body.city;
        let value4=req.body.sports;
        let value5=req.body.bookings;
        let players1;
        for(let i=0;i<players.length;i++)
    {
        if(players[i].name==value)
        {
           res.send("Player With same name already exist");
        }
        
        else
        {
            players.push(value,value1,value2,value3,value4,value5);
            
            res.send({msg:players,status:true});
        }
        
    }
    });

//Q2)
     router.post("/players/:playerName/bookings/:bookingId", function(req, res) {
        let name=req.params.playerName;
        let booking=req.body
        let bookingNo=req.params.bookingNo
            for(let i=0;i<players.length;i++)
            {
                if(players[i].name==name)
                {
                    for(let j=0;j<players[i].bookings.length;j++)
                    {
                        if(players[i].bookings[j].bookingNo==bookingNo)
                        {
                            return res.send("booking with this id already exist")
                        }
                    }
                    players[i].bookings.push(booking)
                }
            }  
        
       res.send(players)
});

module.exports = router

    

module.exports = router;

