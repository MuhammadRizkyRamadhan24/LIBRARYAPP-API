const connection = require('../helpers/mysql');

module.exports = {
    getAllAuthorModel: function(){
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM authors', function(error, result){
                if (error) {
                    reject(error);
                };
                resolve(result);
            });
        });
    },

    postAuthorModel: function(setData){
        return new Promise((resolve, reject) => {
            connection.query('INSERT INTO authors SET ?', setData, function(error, result){
                if (error) {
                    reject(error);
                };
                const newData = {
                    id: result.insertId,
                    ...setData
                };
                resolve(newData);
            });
        });
    },

    putAuthorModel : function(setData, id){
        return new Promise((resolve, reject) =>{
            connection.query('UPDATE authors SET ? WHERE id_author=?', [setData, id], function(error){
                if (error){
                    reject(error);
                }
                const newData = {
                    id,
                    ...setData
                }
                resolve(newData);
            });
        });
    },

    deleteAuthorModel : function(id){
        return new Promise((resolve, reject) => {
            connection.query('DELETE FROM authors WHERE id_author=?', id, function(error, result){
                if (error){
                    reject(error)
                } 
                resolve(result);
            });
        });
    }
}