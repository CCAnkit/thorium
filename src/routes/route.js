const express = require('express');
const router = express.Router;

const cowinController = require('../controllers/cowinController.js');
const memeController = require('../controllers/memeController.js');
const weatherController = require('../controllers/weatherController.js');

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

//  CO-WIN
router.get("/cowin/states", cowinController.getStates);  //find by state
router.get("/cowin/districtInState/:stateId", cowinController.getDistricts);  //find by stateId / districtId
router.get("/cowin/getByPin", cowinController.getByPin);   //find by pincode
router.get("/cowin/findByDistrict", cowinController.getByDistricts);   //find by district Id & for any given Date.
// router.get("/cowin/getByDistrict/:districtId", cowinController.getByDistricts);   //find by districtId
router.post("/cowin/getByOtp", cowinController.getByOtp);    //find by otp

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date

//  Weather
router.get("/weather/getLondon", weatherController.getLondon);
router.get("/weather/getTempLondon", weatherController.getTempLondon);
router.get("/weather/sort", weatherController.sortCityTemp);

//  meme
router.get("/meme/listOfMemes", memeController.getMemes);
router.post("/meme/createMemes", memeController.createMemes);

module.exports = router;