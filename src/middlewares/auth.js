const jwt = require('jsonwebtoken');
const config = require('../configs/global');
const helper = require('../helpers/index');

module.exports = {
    verifyJwtToken : function(req, res, next){
        try{
            const splitToken = req.headers.authorization.split(' ');
            let token = '';
            if(splitToken.length > 1){
                token = splitToken.pop();
            }else{
                token = req.headers.authorization;
            }
            const decoded = jwt.verify(token, config.jwtSecretKey);    
            req.decodedToken = decoded;
            next();
        }catch(error){
            if(error.name === 'TokenExpiredError'){
                return helper.response(res, 'fail', 'Please refresh token', 401)
            }
            return helper.response(res, 'fail', 'Invalid Token!', 401);
        }
    },

    verifyJwtRefreshToken : function(req, res, next){
        try{
            const splitRefreshToken = req.headers.authorization.split(' ');
            let refreshToken = '';
            if(splitRefreshToken.length > 1){
                refreshToken = splitToken.pop();
            }else{
                refreshToken = req.headers.authorization;
            }
            const decoded = jwt.verify(refreshToken, config.jwtSecretKey);
            delete decoded.iat;
            delete decoded.exp;
            console.log(decoded);
            req.decodedRefreshToken = decoded;
            next();
        }catch(error){
            console.log(error);
            if(error.name === 'TokenExpiredError'){
                return helper.response(res, 'fail', 'Please refresh token', 401)
            }
            return helper.response(res, 'fail', 'Invalid Token!', 401);
        }
    },

    levelAdmin : function(req, res, next){
        try {
            const role = req.decodedToken.role;
            if (role == 1){
                next();
            } else {
                return helper.response(res, 'fail', 'You Not Allowed!', 400);
            }
        } catch(error) {
            return helper.response(res, 'fail', 'Internal Server Error', 500);
        };    
    },
    
    levelUser : function(req, res, next){
        try{
            const role = req.decodedToken.role;
            if (role == 1 || role == 0){
                next();
            } else {
                return helper.response(res, 'fail', 'You Not Allowed!', 400);
            }
        } catch(error) {
            return helper.response(res, 'fail', 'Internal Server Error!', 500);
        }
    }
}