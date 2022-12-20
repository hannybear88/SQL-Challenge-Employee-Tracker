const inquirer = require("inquirer"); // Interact with user via command line
const mysql = require("mysql2"); // connect to db to perform queries
// const chalk = require('chalk'); // Terminal String Styling
// const figlet = require('figlet') // Implement FIGfont spec in Javascript
require("console.table"); // Print MySQL rows to the console

const connection = mysql.createConnection({
  host: "localhost",
  // Your username
  user: "root",
  // Your password
  password: "rootroot",
  database: "employee_tracker",
});

// const db = mysql.createConnection(
//   {
//       host: 'localhost',
//       user: process.env.DB_USER,
//       password: process.env.DB_PASSWORD,
//       database: process.env.DB_NAME
//   },

// const connection = mysql.createConnection({
//   host: 'localhost',
//   port: 3306,
//   user: 'root',
//   password: process.env.DB_PASSWORD,
//   database: 'employeeTracker_db'
// });

connection.connect(function (err, data) {
  if (err) {
    console.log(err);
    console.log(data);
  }
});

// connection.connect();
// console.log(chalk.yellow.bold('======================================================================================================='));
// console.log(``);
// console.log(chalk.red.bold(figlet.textSync('EMPLOYEE TRACKER')));
// console.log(``);
// console.log(`                               ` + chalk.green.bold('(C)ONTENT (M)ANAGEMENT (S)YSTEM'));
// console.log(``);
// console.log(chalk.yellow.bold(`======================================================================================================`));

function mainMenu() {
  inquirer
    .prompt({
      type: "list",
      message: "What would you like to do?",
      name: "action",
      choices: [
        "View All Departments", // code done
        "View All Roles", // code done
        "View All Employees", // code done
        "View All Employees by Manager", // code done
        "View All Employees by Department", // code done
        "Add a Department", // code done
        "Add a Role", // code done
        "Add an Employee", // code done
        "Update an Employee Role", // code done
        "Update An Employee Manager", // need to work on code
        "Remove Department", // work in progress
        "Remove Role", // work in progress
        "Remove Employee", // code done
        "View the Total Utilized Budget of a Department", // the combined salaries of all employees in that department
        "Exit",
      ],
    })
    .then(({ action }) => {
      if (action == "View All Departments") {
        //
        viewAllDepartments();
      }
      if (action == "View All Roles") {
        //
        viewAllRoles();
      }
      if (action == "View All Employees") {
        //
        viewAllEmployeess();
      }
      if (action == "View All Employees by Manager") {
        ///
        viewAllEmployeesByManager();
      }
      if (action == "View All Employees by Department") {
        ///
        viewAllEmployeesByDepartment();
      }
      if (action == "Add a Department") {
        //
        addADepartment();
      }
      if (action == "Add a Role") {
        //
        addARole();
      }
      if (action == "Add an Employee") {
        //
        addAnEmployee();
      }
      if (action == "Update an Employee Role") {
        //
        updateAnEmployeeRole();
      }
      if (action == "Update an Employee Manager") {
        /////
        updateAnEmployeeManager();
      }
      if (action == "Remove Department") {
        ///
        removeDepartment();
      }
      if (action == "Remove Role") {
        ///
        removeRole();
      }
      if (action == "Remove Employee") {
        ///
        removeEmployee();
      }
      if (action == "View the Total Utilized Budget of a Department") {
        viewTheTotalUtilizedBudgetOfADepartment();
      }
      if (action == "Exit") {
        console.log("Goodbye!");
        process.exit(1);
      }
    });
}

//========== VIEW ALL DEPARTMENTS ==========//

function viewAllDepartments() {
  connection.query("SELECT * FROM department;", (err, res) => {
    console.table(res);
    mainMenu();
  });
}
//========== VIEW ALL ROLES ==========//

// query to get the list of roles

function viewAllRoles() {
  const sql = `SELECT role.id, role.title AS role, department.name AS department, role.salary
             FROM role
             LEFT JOIN department
             ON role.department_id = department.id
             ORDER BY role.id`;
  connection.query(sql, (err, res) => {
    console.table(res);
    mainMenu();
  });
}

//========== VIEW ALL EMPLOYEES ==========//

function viewAllEmployeess() {
  const sql = `SELECT 
                    employee.id, 
                    employee.first_name, 
                    employee.last_name, 
                    role.title AS role, 
                    department.name AS department, 
                    role.salary, 
                    CONCAT(manager.first_name, " ", manager.last_name) AS manager
                FROM 
                    employee
                LEFT JOIN 
                    role ON employee.role_id = role.id
                LEFT JOIN 
                    department ON role.department_id = department.id
                LEFT JOIN 
                    employee AS manager ON employee.manager_id = manager.id
                ORDER BY
                    employee.id`;
  connection.query(sql, (err, res) => {
    console.table(res);
    mainMenu();
  });
}

//========== VIEW ALL EMPLOYEES BY MANAGER ==========//

const viewAllEmployeesByManager = () => {
  connection.query(
    "SELECT employee.first_name, employee.last_name, CONCAT (manager.first_name, ' ', manager.last_name) AS Manager_Name FROM employee JOIN employee AS manager ON employee.manager_id = manager.id;",
    (err, res) => {
      // if the user wants to view employees of all managers
      sql = `
                    SELECT
                        CONCAT(manager.first_name, ' ', manager.last_name) AS manager,
                        employee.id, 
                        employee.first_name, 
                        employee.last_name, 
                        role.title, 
                        department.name AS department, 
                        role.salary
                    FROM 
                        employee 
                    JOIN 
                        employee AS manager ON employee.manager_id = manager.id
                    LEFT JOIN 
                        role ON employee.role_id = role.id
                    LEFT JOIN 
                        department ON role.department_id = department.id
                    ORDER BY 
                        manager`;
      // } else { // if the user wants to view employees of a specific manager
      //     sql = `
      //         SELECT
      //             employee.id,
      //             employee.first_name,
      //             employee.last_name,
      //             role.title,
      //             department.name AS department,
      //             role.salary
      //         FROM
      //             employee
      //         LEFT JOIN
      //             role ON employee.role_id = role.id
      //         LEFT JOIN
      //             department ON role.department_id = department.id
      //         LEFT JOIN
      //             employee AS manager ON employee.manager_id = manager.id
      //         WHERE
      //             manager.id = ${answers.managerId}`;
      // }
      connection.query(sql, (err, res) => {
        if (err) throw err;
        console.table(res);
        mainMenu();
      });
    }
  );
};

//========== VIEW ALL EMPLOYEES BY DEPARTMENT ==========//

const viewAllEmployeesByDepartment = () => {
  connection.query(
    "SELECT employee.first_name, employee.last_name, department.name AS Department FROM employee JOIN role ON employee.role_id = role.id JOIN department ON role.department_id = department.id ORDER BY employee.id;",
    (err, res) => {
      // if the user wants to view employees of all departments
      sql = `    
                    SELECT
                        department.name AS department, 
                        employee.id, 
                        employee.first_name, 
                        employee.last_name, 
                        role.title, 
                        role.salary,
                        CONCAT(manager.first_name, ' ', manager.last_name) AS manager
                    FROM 
                        employee 
                    LEFT JOIN 
                        role ON employee.role_id = role.id
                    LEFT JOIN
                        employee AS manager ON employee.manager_id = manager.id
                    JOIN 
                        department ON role.department_id = department.id
                    ORDER BY 
                        department`;
      // if the user wants to view employees of a specific department
      //     sql = `
      //         SELECT
      //             employee.id,
      //             employee.first_name,
      //             employee.last_name,
      //             role.title,
      //             role.salary,
      //             CONCAT(manager.first_name, ' ', manager.last_name) AS manager
      //         FROM
      //             employee
      //         LEFT JOIN
      //             role ON employee.role_id = role.id
      //         LEFT JOIN
      //             employee AS manager ON employee.manager_id = manager.id
      //         JOIN
      //             department ON role.department_id = department.id
      //         WHERE
      //             department.id = ${answers.departmentId}`;
      // }
      connection.query(sql, (err, res) => {
        if (err) throw err;
        console.table(res);
        mainMenu();
      });
    }
  );
};

// //============= ADD A DEPARTMENT ==========================//
function addADepartment() {
  inquirer
    .prompt([
      {
        name: "name",
        type: "input",
        message: "What department would you like to add?",
      },
    ])
    .then(function (res) {
      var query = connection.query(
        "INSERT INTO department SET ? ",
        {
          name: res.name,
        },
        function (err) {
          if (err) throw err;
          console.log("Successfully added a department!");
          console.table(res);
          mainMenu();
        }
      );
    });
}

//========== ADD A ROLE ==========//

function addARole() {
  connection.query(
    "SELECT role.title AS Title, role.salary AS Salary FROM role",
    function (err, res) {
      inquirer
        .prompt([
          {
            name: "Title",
            type: "input",
            message: "What is the title of the role?",
          },
          {
            name: "Salary",
            type: "input",
            message: "What is the salary of the role?",
          },
        ])
        .then(function (res) {
          connection.query(
            "INSERT INTO role SET ?",
            {
              title: res.Title,
              salary: res.Salary,
            },
            function (err) {
              if (err) throw err;
              console.log("Successfully added an employee role!");
              console.table(res);
              mainMenu();
            }
          );
        });
    }
  );
}

//========== ADD AN EMPLOYEE ==========//

function addAnEmployee() {
  connection.query("SELECT * FROM role", function (err, results) {
    if (err) throw err;
    inquirer
      .prompt([
        {
          name: "employeeAdd",
          type: "input",
          message:
            "Enter the first name of the employee you would like to add.",
        },
        {
          name: "last_name",
          type: "input",
          message: "Enter the last name of the employee you would like to add.",
        },
        {
          name: "role_id",
          type: "list",
          message: "Select the role of this employee.",
          choices: results.map((item) => item.title),
        },
      ])
      .then((answer) => {
        const roleChosen = results.find(
          (item) => item.title === answer.role_id
        );
        const employeeFirstName = answer.employeeAdd;
        const employeeLastName = answer.last_name;
        connection.query("SELECT * FROM employee", function (err, results) {
          if (err) throw err;
          inquirer
            .prompt([
              {
                name: "manager_id",
                type: "list",
                message: "Select the manager for this employee.",
                choices: results.map((item) => item.first_name),
              },
            ])
            .then((answer) => {
              const managerChosen = results.find(
                (item) => item.first_name === answer.manager_id
              );
              connection.query(
                "INSERT INTO employee SET ?",
                {
                  first_name: employeeFirstName,
                  last_name: employeeLastName,
                  role_id: roleChosen.id,
                  manager_id: managerChosen.id,
                },
                function (err) {
                  if (err) throw err;
                  console.log(
                    "Added " +
                      employeeFirstName +
                      " " +
                      employeeLastName +
                      " to the team!"
                  );
                  mainMenu();
                }
              );
            });
        });
      });
  });
}

// //========== UPDATE AN EMPLOYEE ROLE ==========//

const updateAnEmployeeRole = () => {
  connection.query("SELECT * FROM employee", function (err, results) {
    if (err) throw err;
    inquirer
      .prompt([
        {
          name: "employeeUpdate",
          type: "list",
          message: "Choose the employee whose role you would like to update.",
          choices: results.map((employee) => employee.first_name),
        },
      ])
      .then((answer) => {
        const updateEmployee = answer.employeeUpdate;
        connection.query("SELECT * FROM role", function (err, results) {
          if (err) throw err;
          inquirer
            .prompt([
              {
                name: "role_id",
                type: "list",
                message: "Select the new role of the employee.",
                choices: results.map((employee_role) => employee_role.title),
              },
            ])
            .then((answer) => {
              const roleChosen = results.find(
                (employee_role) => employee_role.title === answer.role_id
              );
              connection.query(
                "UPDATE employee SET ? WHERE first_name = " +
                  "'" +
                  updateEmployee +
                  "'",
                {
                  role_id: "" + roleChosen.id + "",
                },
                function (err) {
                  if (err) throw err;
                  console.log(
                    "Successfully updated " +
                      updateEmployee +
                      "'s role to " +
                      answer.role_id +
                      "!"
                  );
                  mainMenu();
                }
              );
            });
        });
      });
  });
};

//========== UPDATE AN EMPLOYEE MANAGER ==========//

const updateAnEmployeeManager = () => {
  connection.query("SELECT * FROM employee", function (err, results) {
    if (err) throw err;
    inquirer
      .prompt([
        {
          name: "managerUpdate",
          type: "list",
          message:
            "Choose the employee whose manager you would like to update.",
          choices: results.map((employee) => employee.first_name),
        },
      ])
      .then((answer) => {
        const updateManager = answer.managerUpdate;
        connection.query("SELECT * FROM role", function (err, results) {
          if (err) throw err;
          inquirer
            .prompt([
              {
                name: "manager_id",
                type: "list",
                message: "Select the new manager of the employee.",
                choices: results.map((employee_role) => employee_role.title),
              },
            ])
            .then((answer) => {
              const roleChosen = results.find(
                (employee_role) => employee_role.title === answer.role_id
              );
              connection.query(
                "UPDATE employee SET ? WHERE first_name = " +
                  "'" +
                  updateEmployee +
                  "'",
                {
                  role_id: "" + roleChosen.id + "",
                },
                function (err) {
                  if (err) throw err;
                  console.log(
                    "Successfully updated " +
                      updateEmployee +
                      "'s role to " +
                      answer.role_id +
                      "!"
                  );
                  mainMenu();
                }
              );
            });
        });
      });
  });
};

//========== REMOVE DEPARTMENT ==========//

function removeDepartment() {
  connection.query("SELECT * FROM department", function (err, res) {
    if (err) throw err;
    inquirer
      .prompt([
        {
          type: "rawlist",
          name: "removeDept",
          message: "Select the department that will be removed",
          choices: res.map((dept) => {
            return {
              name: dept.name,
              value: dept.id,
            };
          }),
        },
      ])
      .then(function (answer) {
        const selectedDept = res.find((dept) => dept.id === answer.removeDept);
        connection.query(
          "DELETE FROM department WHERE ?",
          [
            {
              id: selectedDept.id,
            },
          ],
          function (err, res) {
            if (err) throw err;
            console.log("The department has been removed.\n");
            mainMenu();
          }
        );
      });
  });
}

//========== REMOVE ROLE ==========//

function removeRole() {
  connection.query("SELECT * FROM role", function (err, res) {
    if (err) throw err;
    inquirer
      .prompt([
        {
          type: "rawlist",
          name: "removeRole",
          message: "Select the role that will be removed",
          choices: res.map((role) => {
            return {
              name: role.title,
              value: role.id,
            };
          }),
        },
      ])
      .then(function (answer) {
        const selectedRole = res.find((role) => role.id === answer.removeRole);
        connection.query(
          "DELETE FROM role WHERE ?",
          [
            {
              id: selectedRole.id,
            },
          ],
          function (err, res) {
            if (err) throw err;
            console.log("The role has been removed.\n");
            mainMenu();
          }
        );
      });
  });
}

//========== REMOVE EMPLOYEE ==========//

function removeEmployee() {
  connection.query("SELECT * FROM employee", function (err, res) {
    if (err) throw err;
    inquirer
      .prompt([
        {
          type: "rawlist",
          name: "removeEmp",
          message: "Select the employee who will be removed",
          choices: res.map((emp) => emp.id && emp.first_name),
        },
      ])
      .then(function (answer) {
        const selectedEmp = res.find(
          (emp) => emp.id && emp.first_name === answer.removeEmp
        );
        connection.query(
          "DELETE FROM employee WHERE ?",
          [
            {
              id: selectedEmp.id,
            },
          ],
          function (err, res) {
            if (err) throw err;
            console.log("The employee has been removed.\n");
            mainMenu();
          }
        );
      });
  });
}

//========== VIEW THE TOTAL UTILIZED BUDGET OF A DEPARTMENT ========== //  // the combined salaries of all employees in that department
// SELECT SUM(salary)
// FROM Role
// WHERE condition;

function viewTheTotalUtilizedBudgetOfADepartment() {
  // all departments
  // query to get the total utilized budget of all departments
  sql = `
  SELECT 
      department.name AS department,
      SUM(role.salary) AS total_budget
  FROM
      department
  LEFT JOIN
      role ON role.department_id = department.id
  LEFT JOIN
      employee ON employee.role_id = role.id
  GROUP BY
      department.name
  ORDER BY
      department.name`;
  connection.query("SELECT * FROM department",  (err, res) => {   
    if (err) throw err;
    inquirer
      .prompt([
        {
          type: "rawlist",
          name: "viewTheTotalUtilizedBudgetOfADepartment",
          message:
            "Which department's total utilized budget would you like to view?",
          choices: res.map((emp) => emp.id && emp.dept_id),
        },
      ])
      .then(function (answer) {
        const selectedDept = res.find(
          (emp) =>
            dept.id &&
            dept.title === answer.viewTheTotalUtilizedBudgetOfADepartment
        );
        connection.query(
          [
            {
              id: dept_id.id,
            },
          ],
          function (err, res) {
            if (err) throw err;
            // console.log(".\n");
            mainMenu();
          }
        );
      });
  });
}

mainMenu();
