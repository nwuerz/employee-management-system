const mysql = require("mysql");
const inquirer = require("inquirer");
const cTable = require("console.table");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "root",
    database: "employees_DB"
});

connection.connect(function(err) {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}`);
    start();
    //do stuff
});

function start() {
    inquirer.prompt([
        {
            type: "list",
            message: "What would you like to do?",
            name: "userAction",
            choices: [
                "View All Employees",
                "View All Employees By Department",
                "View All Employees By Manager",
                "Remove Employee",
                "Update Employee Role",
                "Update Employee Manager",
                "View All Roles",
                "Create A Role",
                "Remove A Role",
                "View Department Budget"
            ]
        }
    ]).then((answer) => {
        switch(answer.userAction)
        {
            case "View All Employees":
                viewAll();
                break;
            case "View All Employees By Department":
                dptView();
                break;
            case "View All Employees by Manager":
                mgrView();
                break;
            case "Remove Employee":
                removeEmployee();
                break;
            case "Update Employee Role":
                updateRole();
                break;
            case "Update Employee Manager":
                updateMgr();
                break;
            case "View All Roles":
                viewRoles();
                break;
            case "Create A Role":
                createRole();
                break;
            case "Remove A Role":
                removeRole();
                break;
            case "View Department Budget":
                viewBudget();
                break;
        }
    });
}

function viewAll() {
    connection.query("SELECT id, first_name, last_name FROM employees", function(err, res) {
        if (err) throw err;
        var values = res.map(function(employee){
            return [employee.id, employee.first_name, employee.last_name];
        });
        console.table(['Id', 'First Name', 'Last Name'], values);
            start();
    });
}

function dptView() {
    connection.query("SELECT id, first_name, last_name, department FROM employees ORDER BY department", function(err, res) {
        if (err) throw err;
        var values = res.map(function(employee){
            return [employee.id, employee.first_name, employee.last_name, employee.department];
        });
        console.table(['Id', 'First Name', 'Last Name', 'Department'], values);
    });
}

// function mgrView() {

// }

// function removeEmployee() {

// }

// function updateRole() {

// }

// function updateMgr() {

// }

// function viewRoles() {

// }

function createRole() {
    
}

// function removeRole() {

// }

// function viewBudget() {

// }