const jwt = require('jsonwebtoken');


const auth = (req, res, next) => {

    const token = req.header('token');
    if (!token){return res.status(403).json({"token": "token not found"})};
    try {
        const result = jwt.verify(token ,process.env.SECRET_KEY);
        if(!result){return res.status(403).json({"token": "token error"})};
        req.user = result.user;
        
        next();
    } catch (error) {
        return res.status(403).json({error: error.message});
        
    }

};

module.exports = auth;