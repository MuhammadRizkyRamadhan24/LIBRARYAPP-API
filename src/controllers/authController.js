const userModel = require('../models/userModel');
const helper = require('../helpers/index');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const config = require('../configs/global');

module.exports = {
    register: async function(req,res){
        const setData = req.body;
        const salt = bcrypt.genSaltSync(10);
        const hashPass = bcrypt.hashSync(setData.password, salt);
        setData.password = hashPass;

        try{
            const result = await userModel.registerModel(setData);
            delete result.password;
            return helper.response(res, 'success', result, 200);
        } catch(error){
            console.log(error);
            return helper.response(res, 'fail', 'Internal Server Error', 500);
        }
    },

    login: async function(req, res) {
        const loginData = req.body;
        try{
            const result = await userModel.loginModel(loginData.username);
            if (result.length > 0){
                const hashPass = result[0].password;
                const checkPass = bcrypt.compareSync(loginData.password, hashPass);
                if (checkPass){
                delete result[0].password;
                const tokenData = {
                    ...result[0]
                };
                const token = jwt.sign(tokenData, config.jwtSecretKey, {expiresIn: '1d'});
                const refreshToken = jwt.sign(tokenData, config.jwtSecretKey, {expiresIn: '1d'});
                result[0].token = token;
                result[0].refreshToken = refreshToken;
                return helper.response(res, 'success', result, 200);
            }
            return helper.response(res, 'fail', 'Username atau Password salah', 400);
            }
            return helper.response(res, 'fail', 'Username atau Password salah', 400);
        } catch(error){
            console.log(error);
            return helper.response(res, 'fail', 'Internal Server Error', 500);
        }
    },

    refreshToken: async function(req, res){
        try{
            const result = req.decodedRefreshToken;
            const token = jwt.sign(result, config.jwtSecretKey, {expiresIn: '1d'});
            const refreshToken = jwt.sign(result, config.jwtSecretKey, {expiresIn: '1d'});
            return helper.response(res, 'success', { token: token, refreshToken : refreshToken }, 200)
        } catch (error) {
            console.log(error);
            return helper.response(res, "fail", "Internal Server Error", 500);
        }
    },
};