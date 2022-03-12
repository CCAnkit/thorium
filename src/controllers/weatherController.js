const axios = require('axios');

const getLondon = async function(req, res) {
    try {
        let city = req.query.q
        let appid = req.query.appid
        
        let options = {
            method: `get`,
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}`
        }
        let result = axios(option)
        console.log(result.data);
        res.status(200).send({msg:result.data})
    }
    catch(err) {
        console.log(err);
        res.status(500).send({msg: err.message})
    }
}

const getTempLondon = async function(req, res) {
    try {
        let city = req.query.q
        let appid = req.query.appid
        
        let options = {
            method: `get`,
            url: `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${appid}`
        }
        let result = axios(options);
        console.log(result.data)
        res.status(200).send({msg:result.data.main.temp})
    }
    catch(err) {
        console.log(err);
        res.status(500).send({msg: err.message})
    }
}

const sortCityTemp = async function(req, res) {
    try{
        let cities = ["Bengaluru","Mumbai", "Delhi", "Kolkata", "Chennai", "London", "Moscow"]
        let appid = req.query.appid
        
        let tempCity = [];
        
        for(let i= 0; i<cities.length; i++) {

            let options = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cities[i]}&appid=${appid}`)
            tempCity[i] = {city: cities[i], temp: options.data.main.temp}
            
        } 

        sortedCity = tempCity.sort(function(a, b) {
            return a.temp - b.temp
        })
        res.status(200).send({status: true, data: sortedCity })

    }
    catch(err) {
        console.log(err)
        res.status(500).send({msg: err.message})
    }
}


module.exports.getLondon = getLondon;
module.exports.getTempLondon = getTempLondon;
module.exports.sortCityTemp = sortCityTemp;
