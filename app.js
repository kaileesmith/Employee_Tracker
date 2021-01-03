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

const startMenu= () => {
    inquirer.prompt({
        name: 'optionList',
        type: 'rawlist',
        message: 'What would you like to do?',
        choices: [
            'View Departments',
            'Veiw Roles',
            'View Employees',
            'Add a Department',
            'Add a Role',
            'Add a Employee'
        ],
    })
    .then((answer) => {
        switch (answer.optionList) {
            case 'View Departments':
                veiwDepartments();
                break;

            case 'Veiw Roles':
                veiwRoles();
                break;

            case 'View Employees':
                veiwEmployees();
                break;

            case 'Add a Department':
                addDepartment();
                break;

            case 'Add a Role':
                addRole();
                break;

            case 'Add a Role':
                addRole();
                break;

            default:
            connection.end();
            process.exit(0);
        }
    });
};










// connect to database
connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}`);
    startMenu();
});