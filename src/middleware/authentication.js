const jwt = require("jsonwebtoken");
const { nextTick } = require("process");

const authentication = async function(req, res) {
    try{
        let isToken = req.headers["x-auth-token"]
        if (!isToken) {
            return res.status(400).send({ status: false, msg: "token must be present"});
        }
        let decodedToken = jwt.verify(isToken, "secuiretyKeyToCheckToken");
        if (!decodedToken) {
            res.status(401).send({ status: false, msg: "token is invalid"});
        }
        next();
    }
    catch(error) {
        console.log(error.message)
        return res.status(500).send({error: error.message })
    }
}



module.exports.authentication = authentication;