const helper = require('../helpers/index');
const authorModel = require('../models/authorModel');

module.exports = {
    getAllAuthor: async function(request , response){
        try {
            const result = await authorModel.getAllAuthorModel();
            return helper.response(response, 'success', result, 200);
        } catch (error){
            console.log(error);
            return helper.response(response, 'fail', 'Internal Server Error', 500);
        }
    },

    postAuthor: async function(request, response){
        const setData = request.body;
        try {
            const result = await authorModel.postAuthorModel(setData);
            return helper.response(response, 'success', result, 200);
        } catch(error) {
            console.log(error);
            return helpers.response(response, 'fail', 'Internal Server Error', 500);
        }
    },

    putAuthor: async function(request, response){
        const setData = request.body;
        const id = request.params.id;
        try {
            const result =  await authorModel.putAuthorModel(setData,id);
            return helper.response(response, 'success', result, 200);
        } catch(error) {
            console.log(error);
            return helper.response(response, 'fail', 'Internal Server Error', 500);
        }
    },

    deleteAuthor: async function(req, res){
        const id = req.params.id;
        try{
            const result = await authorModel.deleteAuthorModel(id);
            return helper.response(res, 'success', 'Berhasil Hapus data ke '+id , 200);
        } catch(error){
            console.log(error);
            return helper.response(res, 'fail', 'Internal Server Error', 500);
        }
    },
};