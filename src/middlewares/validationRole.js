const helper = require('../helpers/index');

module.exports = {
    verifyAdmin : function (req, res, next){
        try {
            const role = req.decodedRefreshToken.role;
            console.log(role);
            next();
            if ( role === 1 ){
                return helper.response(res, 'success', 'You Allowed!', 200);
            } else {
                return helper.response(res, 'fail', 'You Not Allowed!', 400);
            }
        } catch (error) {
            console.log(error);
            return
        }
        

    }
}