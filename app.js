const mysql = require('mysql');
const inquirer = require('inquirer');

// Start connection to sql database
const connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "password",
	database: "employeeTracker_db",
});

connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}`);

});