const helper = require('../helpers/index');
const genreModel = require('../models/genreModel');

module.exports = {
    getAllGenre: async function(request , response){
        try {
            const result = await genreModel.getAllGenreModel();
            return helper.response(response, 'success', result, 200);
        } catch (error){
            console.log(error);
            return helper.response(response, 'fail', 'Internal Server Error', 500);
        }
    },

    postGenre: async function(request, response){
        const setData = request.body;
        try {
            const result = await genreModel.postGenreModel(setData);
            return helper.response(response, 'success', result, 200);
        } catch(error) {
            console.log(error);
            return helpers.response(response, 'fail', 'Internal Server Error', 500);
        }
    },

    putGenre: async function(request, response){
        const setData = request.body;
        const id = request.params.id;
        try {
            const result =  await genreModel.putGenreModel(setData,id);
            return helper.response(response, 'success', result, 200);
        } catch(error) {
            console.log(error);
            return helper.response(response, 'fail', 'Internal Server Error', 500);
        }
    },

    deleteGenre: async function(req, res){
        const id = req.params.id;
        try{
            const result = await genreModel.deleteGenreModel(id);
            return helper.response(res, 'success', 'Berhasil Hapus data ke '+id , 200);
        } catch(error){
            console.log(error);
            return helper.response(res, 'fail', 'Internal Server Error', 500);
        }
    },
};