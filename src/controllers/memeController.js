const axios = require('axios');

const getMemes = async function(req, res) {
    try{
        let options = {
            method: `get`,
            url: `https://api.imgflip.com/get_memes`
        }
        let result = await axios(options)
        console.log(result)
        let data = result.data;
        console.log(data)
        res.status(200).send({msg: data, status: true})
    }
    catch(err) {
        console.log(err)
        res.status(500).send({msg: err.message})
    }
}

const createMemes = async function(req, res) {
    try{
        let template_id = req.query.id
        let text0 = req.query.text0
        let text1 = req.query.text1
        let username = req.query.username
        let password = req.query.password

        let options = {
            method: `post`,
            url: `https://api.imgflip.com/caption_image?template_id=${template_id}&text0=${text0}&text1=${text1}&username=${username}&password=${password}`
        }
        let result = await axios(options)
        console.log(result)
        let data = result.data
        console.log(data)
        res.status(200).send({msg: data, status: true})
    }
    catch(err) {
        console.log(err);
        res.status(500).send({msg: err.message})
    }
}

module.exports.getMemes = getMemes;
module.exports.createMemes = createMemes;