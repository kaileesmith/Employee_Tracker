const mysql = require('mysql');
const inquirer = require('inquirer');
const consTable = require("console.table");


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
            'Add a Employee',
            "Exit",
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

            case 'Add a Employee':
                addEmployee();
                break;

            default:
            connection.end();
            process.exit(0);
        }
    });
};

// Veiw functions
const veiwDepartments = () => {
    const query = 
    'SELECT * FROM department';
    connection.query(query, (err, res) => {
        if (err) throw err;
        console.log(res);
        startMenu();
        });
    };


    const veiwRoles = () => {
        const query = 
        'SELECT * FROM role';
        connection.query(query, (err, res) => {
            if (err) throw err;
            console.log(res);
            startMenu();
            });
        };

        const veiwEmployees = () => {
            const query = 
            'SELECT * FROM employee';
            connection.query(query, (err, res) => {
                if (err) throw err;
                console.log(res);
                startMenu();
                });
            };

// Add Functions

const addDepartment = () => {
    inquirer.prompt({
        name:"addDept",
        type:"input",
        message:"What is the name of the department you want to add?",
    }).then(function (answer) {
        connection.query(
            "INSERT INTO department SET ?", {
                    name: answer.addDept
                }
            );
            let query = 
            'SELECT * FROM department';
            connection.query(query, (err, res) => {
                if (err) throw err;
                console.log(res);
                startMenu();
                });
            });
        };

        const addEmployee = () => {
            inquirer.prompt([
                {
                name: "fName",
                type:"input",
                message: "What is new employee's first name?",
            },
            {
                name: "lName",
                type:"input",
                message: "What is new employee's last name?",
            },
            {
                name: "roleId",
                type:"input",
                message: "What is new employee's role?",
            },
            {
                name: "managerId",
                type: "input",
                message: "Who is their Manager?",
                },
            ])
            .then((answers) => {
                try {
                    console.log(answers.fName,
                        answers.lName,
                        +answers.roleId,
                        +answers.managerId)
                    console.log( answers.roleId, typeof answers.roleId)
                    console.log(answers.roleId, typeof +answers.roleId)
                    connection.query(
                        "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?);",
                        [
                            answers.fName,
                            answers.lName,
                            +answers.roleId,
                            +answers.managerId,
                        ],
                                    (err, answers) => {
                                        if (err) throw err;
                                        console.log(answers);
                                    }
                                    );
                                startMenu();
                } catch ({message}) {
                    console.log(message)
                }
            });
        };

// connect to database
connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}`);
    startMenu();
});