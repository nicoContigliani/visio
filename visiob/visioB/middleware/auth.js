
const jwt = require("jsonwebtoken");
const config = process.env;

const verifyToken = (req, res, next) => {
    // console.log(req.body.token, req.query.token, req.headers("x-access-token"))
    // const token = req.header('auth-token')
    // console.log(req.body, "toma por miron")

    // console.log(token)
    // const token =
    //     req.body.token || req.query.token || req.headers["x-access-token"];

    const token =
        req.body.token || req.query.token || req.header('auth-token');



    if (!token) {
        return res.status(403).send("Error 403 -  A token is required for authentication ");
    }
    try {
        const decoded = jwt.verify(token, config.TOKEN_SECRET);
        req.user = decoded;
    } catch (err) {
        return res.status(401).send("Error 401 - Invalid Token");
    }
    return next();
};

module.exports = verifyToken;
