const jwt = require('jsonwebtoken');
require('dotenv').config();

const auth = (req, res, next) => {
    try{
        const token = req.header('x-auth-token');
        if(!token)
            return res.status(401).json({message:"Np authentication token, authorization failed"});

        const varified = jwt.verify(token, process.env.JWT_SECRET);

        if(!varified)
            return res.status(401).json({message:"Token verification failed"});
        req.id = varified.id;
        next();
    }catch(err){
        res.status(500)
    }
}

module.exports =auth