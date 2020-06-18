const connection =  require('../helpers/mysql');

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

    getDataByTitle: function(setTitle){
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM books WHERE title=?', setTitle, function(error, result){
                if (error) {
                    reject(error);
                }
                resolve(result);
            });
        });
    },    

    getSearchBookModel : function(title, author, genre, order, sort, limit, page){
        return new Promise((resolve, reject) =>{
            const offset = (limit * page) - limit;
            connection.query(`SELECT * FROM books INNER JOIN genres ON books.id_genre=genres.id_genre INNER JOIN authors ON books.id_author=authors.id_author WHERE title LIKE ? OR author LIKE ? OR genre LIKE ? ORDER BY ${order} ${sort} LIMIT ? OFFSET ?`, [title, author, genre, limit, offset], function(error, result){
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

    updateBorrowBookModel : function(setTitle){
        return new Promise((resolve, reject) =>{
            connection.query(`UPDATE books SET status = 'Dipinjam' WHERE title=?`, setTitle, function(error, result){
                if (error){
                    reject(error);
                }
                resolve(result);
            });
        });
    },

    updateReturnBookModel : function(setData){
        return new Promise((resolve, reject) =>{
            connection.query(`UPDATE books SET status = 'Ada' WHERE title=?`, setData, function(error, result){
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

    returnBookModel : function(id){
        return new Promise((resolve, reject) => {
            connection.query(`UPDATE borrows SET status = 'Dikembalikan' WHERE id_borrow=?`, id, function(error, result){
                if (error){
                    reject(error)
                } 
                resolve(result);
            });
        })
    },
}