const helper = require('../helpers/index');
const bookModel = require('../models/bookModel');
const fs = require('fs');
const path = './src/public/images';

module.exports = {
    getAllBook: async function(req, res){
        console.log(req.decodedToken);
        try{
            const result = await bookModel.getAllBookModel();
            return helper.response(res, 'success', result, 200);
        } catch (error){
            console.log(error);
            return helper.response(res, 'fail', 'Internal Server Error', 500);
        }
    },

    getSeacrhBook: async function(req, res){
        const limit = parseInt(req.query.limit) || 8;
        const page = parseInt(req.query.page) || 1;
        const sort = req.query.sort || 'asc';
        const order = req.query.order || 'added_at';
        const title = `%${req.query.title}%` || '';
        const author = `%${req.query.author}%` || '';
        const genre = `%${req.query.genre}%` || '';
        try{
            const result = await bookModel.getSearchBookModel(title, author, genre, order, sort, limit, page)
            if(result[0]){
                return helper.response(res, 'success', result, 200);
            } else {
                return helper.response(res, 'fail', 'Not find data', 404);
            }
        } catch(error){
            console.log(error);
                return helper.response(res, 'fail', 'Internal Server Error', 500);
        }
    },

    paginationBook : async function(req, res){
        const limit = parseInt(req.query.limit) || 8;
        const page = parseInt(req.query.page) || 1;
        const sort = req.query.sort || 'asc';
        const order = req.query.order || 'added_at';
        try{
            const result = await bookModel.getPaginationBookModel(order, sort, limit, page)
            if(result[0]){
                return helper.response(res, 'success', result, 200);
            } else {
                return helper.response(res, 'fail', 'Not find data', 404);
            }
        } catch(error){
            console.log(error);
                return helper.response(res, 'fail', 'Internal Server Error', 500);
        }
    },

    postBook: async function(req, res){
        const setData = req.body;
        setData.bookImage = req.file.filename;
        try {
            const result = await bookModel.postBookModel(setData);
            return helper.response(res, 'success', result, 200);
        } catch(error){
            console.log(error);
            return helper.response(res, 'fail', 'Internal Server Error', 500);
        }
    },

    putBook: async function(req, res){
        try{
            const body = req.body;
            const id = req.params.id;
            const oldData = await bookModel.getDataById(id);
            console.log(oldData);
            const setData = {
                ...body,
                bookImage: req.file.filename
            }
            const result = await bookModel.putBookModel(setData, id);
            const newData = {
                id: id,
                ...setData
            }

            if (result.affectedRows > 0){
                fs.unlinkSync(path + '/' + oldData[0].bookImage);
                return helper.response(res, "success", newData, 200);
            } else {
                fs.unlinkSync(path + '/' + req.file.filename);
                return helper.response(res, "fail", "Data Not Found", 404);
            }
        } catch(error) {
            console.log(error);
            return helper.response(res, 'fail', 'Internal Server Error', 500);
        }
    },

    deleteBook: async function(req, res){
        const id = req.params.id;
        const data = await bookModel.getDataById(id);
        try{
            const result = await bookModel.deleteBookModel(id);
            if(result.affectedRows > 0 ){
                fs.unlinkSync(path + '/' + data[0].bookImage);
                return helper.response(res, 'success', 'Successfully Deleted The Book' , 200);
            } else {
                return helper.response(res, 'fail', 'Data Not Found', 404)
            }
        } catch(error){
            console.log(error);
            return helper.response(res, 'fail', 'Internal Server Error', 500);
        }
    },

    borrowBook: async function(req, res){
        const setData = req.body;
        const setTitle = setData.title;
        try {
            const oldData = await bookModel.getDataByTitle(setTitle);
            if (oldData[0].status == 'ada' || oldData[0].status == 'Ada'){
                const updateStatus = await bookModel.updateBorrowBookModel(setTitle);
                const result = await bookModel.borrowBookModel(setData);
                return helper.response(res, 'success', result, 200);
            } else {
                return helper.response(res, 'fail', 'Book Already Borrowed!', 400);
            }
        } catch(error){
            console.log(error);
            return helper.response(res, 'fail', 'Internal Server Error', 500);
        }
    },

    returnBook: async function(req, res){
        const id = req.params.id;
        const setData = req.body.title;
        try{
            const updateStatus = await bookModel.updateReturnBookModel(setData);
            const result = await bookModel.returnBookModel(id);
            return helper.response(res, 'success', 'Return The Book Success!', 200);
        } catch(error) {
            console.log(error);
            return helper.response(res, 'fail', 'Internal Server Error', 500);
        }
    }
}