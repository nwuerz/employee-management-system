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
                "View All Departments",
                "View All Roles",
                "Add An Employee",
                "Add A Role",
                "Add A Department",
                "Update Employee Role",
                "Exit"
            ]
        }
    ]).then((answer) => {
        switch(answer.userAction)
        {
            case "View All Employees":
                viewAll();
                break;
            case "View All Departments":
                dptView();
                break;
            case "View All Roles":
                viewRoles();
                break;
            case "Add An Employee":
                addEmployee();
                break;
            case "Add A Role":
                addRole();
                break;
            case "Add A Department":
               addDepartment();
               break;
            case "Update Employee Role":
                updateRole();
                break;
            case "Exit":
                connection.end();
                console.log("Goodbye!")
        }
    });
}

function viewAll() {
    connection.query("SELECT * FROM employees", function(err, res) {
        if (err) throw err;
        var values = res.map(function(employee){
            return [employee.id, employee.first_name, employee.last_name];
        });
        console.table(['Id', 'First Name', 'Last Name'], values);
            start();
    });
}

function dptView() {
    connection.query("SELECT * FROM department", function(err, res) {
        if (err) throw err;
        var values = res.map(function(department){
            return [department.id, department.department_name];
        });
        console.table(['Id', 'Department Name'], values);
        start();
    });
}

function viewRoles() {
    connection.query("SELECT * FROM roles", (err, res) => {
        if (err) throw err;
        var values = res.map((roles)=>{
            return [roles.id, roles.title, roles.salary, roles.deparment_id];
        });
        console.table(['Id', 'Title', 'Salary', 'Department Id'], values);
        start();
    });
}

function addEmployee() {
    inquirer.prompt([
        {
            type: "input",
            name: "firstName",
            message: "Please enter the new employee's first name."
        },
        {
            type: "input",
            name: "lastName",
            message: "Please enter the new employee's last name."
        },
        {
            type: "input",
            name: "roleId",
            message: "Please enter the role id."

        },
        {
            type: "input",
            name: "manager",
            message: "Please enter the manager id."
        }
    ]).then((answer)=>{
        connection.query("INSERT INTO employees SET ?",
        {
            first_name: answer.firstName,
            last_name: answer.lastName,
            role_id: answer.roleId,
            manager_id: answer.manager
        });
        console.log("Success!");
        start();
    });
}

function addRole() {
    inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: "What is the new role?"
        },
        {
            type: "input",
            name: "salary",
            message: "What is the $alary?"
        },
        {
            type: "list",
            name: "department",
            message: "which department will this role belong to?",
            choices: [
                "1",
                "2",
                "3",
                "4"
            ]
        }
    ]).then((answer)=>{
        connection.query("INSERT INTO roles SET ?",
        {
            title: answer.title,
            salary: answer.salary,
            deparment_id: answer.department
        });
        console.log("Success!");
        start();
    });
}

function addDepartment() {
    inquirer.prompt([
        {
            type: "input",
            name: "department",
            message: "what department would you like to add?",
        }
    ]).then((answer)=>{
        connection.query("INSERT INTO department SET ?",
        {
            department_name: answer.department
        });
        console.log("Success!");
        start();
    });
}

function updateRole() {
    inquirer.prompt([
        {
            type: "input",
            name: "oldId",
            message: "Please enter the CURRENT employee id"
        },
        {
            type: "input",
            name: "newId",
            message: "Please input the NEW employee id."
        }
    ]).then((answer)=>{
        connection.query("UPDATE employees SET role_id=? WHERE id=?",[answer.newId, answer.oldId],(err, res)=>{
            if (err) throw err;
            return res;
        });
        console.log("Success!");
        start();
    })
}