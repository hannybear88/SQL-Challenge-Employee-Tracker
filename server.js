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
                "View All Departments", // view all departments
                "View All Roles", // view all roles
                "View All Employees", // view all employees
                "Add a Department",
                "Add a Role",
                "Add an Employee",
                "Update an Employee Role",
                "Update Employee Managers",
                "View Employees by Manager",
                "View Employees by Department",
                "View the Total Utilized Budget of a Department" // the combined salaries of all employees in that department

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
        if(action == "View All Employees") {
            viewAllEmployeess()
        }
        if(action == "Add a Department") {
            addADepartment()
        }
        if(action == "Add a Role") {
            addARole()
        }
        if(action == "Add an Employee") {
            addAnEmployee()
        }
        if(action == "Update an Employee Role") {
            updateAnEmployeeRole()
        }
        if(action == "Update Employee Managers") {
            updateAnEmployeeRole()
        }
        if(action == "View Employees by Manager") {
            viewEmployeesByManager()
        }
        if(action == "View Employees by Department") {
            viewEmployeesByDepartment()
        }
        if(action == "View the Total Utilized Budget of a Department") {
            viewTheTotalUtilizedBudgetOfADepartment()
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