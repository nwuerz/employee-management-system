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
                "View All Employees By Manager"
            ]
        }
    ]).then((answer)=> {
        switch(userAction)
        {
            case (answer.userAction === "View All Employees"):
                viewAll();
                break;
            case (answer.userAction === "View All Employees By Department"):
                dptView();
                break;
            case (answer.userAction === "View All Employees by Manager"):
                mgrView();
        }
    });
}

