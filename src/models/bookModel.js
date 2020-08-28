const connection =  require('../helpers/mysql');
const { resolve } = require('path');

module.exports = {
    getAllBookModel : function(){
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM books', function(error, result){
                if (error) {
                    reject(error);
                }
                resolve(result);
            });
        });
    },

    getDataById: function(id){
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM books WHERE id=?', id, function(error, result){
                if (error) {
                    reject(error);
                }
                resolve(result);
            });
        });
    },
   

    getSearchBookModel : function(search, order, sort, limit, page){
        return new Promise((resolve, reject) =>{
            const offset = (limit * page) - limit;
            connection.query(`SELECT * FROM books INNER JOIN genres ON books.id_genre=genres.id_genre INNER JOIN authors ON books.id_author=authors.id_author WHERE title LIKE ? OR author LIKE ? OR genre LIKE ? ORDER BY ${order} ${sort} LIMIT ? OFFSET ?`, [search, search, search, limit, offset], function(error, result){
                if (error){
                    reject(error);
                }
                resolve(result);
            });
        });
    },

    getPaginationBookModel : function(order, sort, limit, page){
        return new Promise((resolve, reject) =>{
            const offset = (limit * page) - limit;
            connection.query(`SELECT * FROM books ORDER BY ${order} ${sort} LIMIT ? OFFSET ?`, [limit, offset], function(error, result){
                if (error){
                    reject(error);
                }
                resolve(result);
            });
        });
    },

    postBookModel : function(setData, bookImage){
        return new Promise((resolve, reject) =>{
            connection.query('INSERT INTO books SET ?', setData, function(error, result){
                if (error) {
                    reject(error);
                };
                const newData = {
                    id: result.insertId,
                    ...setData
                }
                resolve(newData);
            });
        });
    },

    putBookModel : function(setData, id){
        return new Promise((resolve, reject) =>{
            connection.query('UPDATE books SET ? WHERE id=?', [setData, id], function(error, result){
                if (error){
                    reject(error);
                }
                resolve(result);
            });
        });
    },

    deleteBookModel : function(id){
        return new Promise((resolve, reject) => {
            connection.query('DELETE FROM books WHERE id=?', id, function(error, result){
                if (error){
                    reject(error)
                } 
                resolve(result);
            });
        })
    },

    getDataByTitle: function(title){
        return new Promise((resolve, reject) => {
            connection.query('SELECT status FROM books WHERE title=?', title, function(error, result){
                if (error) {
                    reject(error);
                }
                resolve(result);
            });
        });
    }, 

    updateBorrowBookModel : function(title){
        return new Promise((resolve, reject) =>{
            connection.query(`UPDATE books SET status = 'Dipinjam' WHERE title=?`, title, function(error, result){
                if (error){
                    reject(error);
                }
                resolve(result);
            });
        });
    },

    borrowBookModel : function(setData){
        return new Promise((resolve, reject) => {
            connection.query(`INSERT INTO borrows SET ? , status = 'Dipinjam'`, setData, function(error, result){
                if (error){
                    reject(error);
                }
                const newData = {
                    id: result.insertId,
                    ...setData
                }
                resolve(newData);
            });
        });
    },

    returnBookModel : function(username, title){
        return new Promise((resolve, reject) => {
            connection.query(`UPDATE borrows SET status = 'Dikembalikan' WHERE username=? AND title=? AND status='Dipinjam'`, [username, title], function(error, result){
                if (error){
                    reject(error)
                } 
                resolve(result);
            });
        })
    },

    updateReturnBookModel : function(title){
        return new Promise((resolve, reject) =>{
            connection.query(`UPDATE books SET status = 'Ada' WHERE title=?`, title, function(error, result){
                if (error){
                    reject(error);
                }
                resolve(result);
            });
        });
    },

    getDataHistory: function(username){
        return new Promise((resolve, reject) => {
            connection.query('SELECT *,(SELECT bookImage FROM books WHERE books.title = borrows.title) AS bookImage FROM borrows WHERE username=?', username, function(error, result){
                if (error) {
                    reject(error);
                }
                resolve(result);
            });
        });
    }, 
}