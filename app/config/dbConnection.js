var mysql = require('mysql2');
require('dotenv').config()


var connMySQL = function(){
	return mysql.createConnection({
		host : process.env.DB_IP,
		port: process.env.DB_PORT,
		user : process.env.DB_USER,
		password : process.env.DB_PASS,
		database : 'crud_node',
        charset: "utf8_general_ci"
	});
}

module.exports = function () {
	return connMySQL;
}