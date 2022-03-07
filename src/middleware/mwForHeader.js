const checkHeader = function ( req , res , next ) {
    const isHeader = req.headers

    if(isHeader.isfreeappuser) {
        next()
    } else {
        res.send("error : IsFreeAppUser header is not present ,Please enter ...")
    }
}

module.exports.checkHeader = checkHeader