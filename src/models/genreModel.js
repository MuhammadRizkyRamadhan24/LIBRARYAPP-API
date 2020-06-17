const connection = require('../helpers/mysql');

module.exports = {
    getAllGenreModel: function(){
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM genres', function(error, result){
                if (error) {
                    reject(error);
                };
                resolve(result);
            });
        });
    },

    postGenreModel: function(setData){
        return new Promise((resolve, reject) => {
            connection.query('INSERT INTO genres SET ?', setData, function(error, result){
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

    putGenreModel : function(setData, id){
        return new Promise((resolve, reject) =>{
            connection.query('UPDATE genres SET ? WHERE id_genre=?', [setData, id], function(error){
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

    deleteGenreModel : function(id){
        return new Promise((resolve, reject) => {
            connection.query('DELETE FROM genres WHERE id_genre=?', id, function(error, result){
                if (error){
                    reject(error)
                } 
                resolve(result);
            });
        });
    }
}