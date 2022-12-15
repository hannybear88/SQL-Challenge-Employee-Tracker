const inquirer = require("inquirer");
const mysql = require("mysql2");
require("console.table");

const connection = mysql.createConnection({
  host: "localhost",
  // Your username
  user: "root",
  // Your password
  password: "rootroot",
  database: "employee_tracker"
});

connection.connect(function (err, data) {
  if (err){
    console.log(err)
    console.log(data)
  }
});



function mainMenu() {
    inquirer.prompt(
        {
            type: "list",
            message: "What would you like to do?",
            name: "action",
            choices: [
                "View Departments", // view all departments
                "View Roles", // view all roles
                "View Employees", // view all employees
                "Add a Department",
                "Add a Role",
                "Add an Employee",
                "Update an Employee Role",

            ]
        }
    )
    .then(({action}) => {
        if(action == "View Departments") {
            viewDepartments()
        }
        if(action == "View Roles") {
            viewRoles()
        }
    })
}


function viewDepartments() {
    connection.query("SELECT * FROM department;", (err, res) => {
        console.table(res)
        mainMenu();
    })
}

function viewRoles() {
    connection.query("SELECT * FROM role;", (err, res) => {
        console.table(res)
        mainMenu();
    })
}

mainMenu()