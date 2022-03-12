const axios = require('axios');

const getStates = async function(req, res) {
    try {
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/states`
        }
    
        let result = await axios(options);
        console.log(result);
        let data = result.data
        res.status(200).send({msg: data, status: true});
    }
    catch(err) {
        console.log(err);
        res.status(500).send({ msg: err.message })
    }
};

const getDistrict = async function(req, res) {
    try {
        let id = req.param.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result);
        let data = result.data;
        res.status(200).send({msg: data, status: true});
    }
    catch(err) {
        console.log(err);
        res.status(500).send({msg: err.message});
    }
};

const getByPin = async function(req, res) {
    try {
        let pin = req.query.pin
        let date = req.query.date
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = axios(options)
        console.log(result.data);
        res.status(200).send({msg: result.data})
    }
    catch(err) {
        console.log(err);
        res.status(500).send({msg: err.message})
    }
};

const getByDistrict = async function(req, res) {
    try {
        let id = req.query.district_id
        let date = req.query.date
        let options = {
            method : "get",
            url : `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district_id}&date=${date}`
        }
        let result = axios(options);
        console.log(result);
        let data = result.data;
        res.status(200).send({msg:data, status: true});
    }
    catch(err) {
        console.log(err)
        res.status(500).send({msg: err.message})
    }
};

const getByOtp = async function(req, res) {
    try {
        let otpp = req.body
        console.log( `body is : ${otpp} `)
        let options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: otpp
        }
        let result = axios(options)
        console.log(result.data)
        res.status(200).send({msg: result.data})
    }
    catch(err) {
        console.log(err);
        res.status(500).send({msg: err.message})
    }
};


module.exports.getStates = getStates;
module.exports.getDistricts = getDistrict;
module.exports.getByPin = getByPin;
module.exports.getByDistrict = getByDistrict;
module.exports.getByOtp = getByOtp;