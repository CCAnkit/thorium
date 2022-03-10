const jwt = require("jsonwebtoken");

const authorization = async function(req, res) {
    try{
        let isToken = req.headers["x-auth-token"]

        let decodedToken = jwt.verify(isToken, "secuiretyKeyToCheckToken");

        let userId = req.params.userId

        if (decodedToken.userId != userId) {
          return  res.status(403).send({ error: " LogedIn user is not authorize to change with requested userid" })
        }

        next();
    }
    catch (error){
        console.log(error.message)
        return res.status(500).send({ error : error.message})
    }

}

module.exports.authorization = authorization;