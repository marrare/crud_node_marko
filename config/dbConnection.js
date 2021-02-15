var mysql = require('mysql2');

var connMySQL = function(){
	return mysql.createConnection({
		host : 'localhost',
		user : 'rivaldo',
		password : 'MKO)nji9',
		database : 'crud_node',
        charset: "utf8_general_ci"
	});
}

module.exports = function () {
	return connMySQL;
}