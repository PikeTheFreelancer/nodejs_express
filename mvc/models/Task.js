var db = require('../database/database');

class Task{
    getAll(callback){
        var sql = `Select * from posts`;
        db.query(sql, callback);
    }

    getOne(id, callback){
        var sql = `Select * from posts where id ='${id}'`;
        db.query(sql, callback);
    }
    save(id, title, callback){
        if (id) {
            var sql = `Update posts set title = '${title}' where id = ${id}`;
            db.query(sql, callback); 
        } else {
            var sql = `Insert into posts set title = '${title}'`;
            db.query(sql, callback); 
        }
    }
    delete(id, callback){
        var sql = `Delete from posts where id ='${id}'`;
        db.query(sql, callback);
    }
}

module.exports = new Task;