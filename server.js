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
                "View All Departments",
                "View All Roles", 
                "View All Employees",
                "View All Employees By Role",
                "View All Employees by Manager",
                "View All Employees by Department",
                "Add a Department",
                "Add a Role",
                "Add an Employee",
                "Update an Employee Role",
                "Update Employee Manager",
                "Delete Departments",
                "Delete Roles",
                "Delete Employees",
                "View the Total Utilized Budget of a Department",  // the combined salaries of all employees in that department
                "Exit",
            ]
        }
    )
    .then(({action}) => {
        if(action == "View All Departments") {
            viewAllDepartments()
        }
        if(action == "View All Roles") {
            viewAllRoles()
        }
        if(action == "View All Employees") {
            viewAllEmployeess()
        }
        if(action == "View All Employees by Role") {
          viewAllEmployeesByRole()
        }
        if(action == "View All Employees by Manager") {
          viewAllEmployeesByManager()
        }
        if(action == "View All Employees by Department") {
          viewAllEmployeesByDepartment()
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
        if(action == "Update an Employee Manager") {
            updateAnEmployeeManager()
        }
        if(action == "Delete Departments") {
          deleteDepartments()
      }
        if(action == "Delete Roles") {
          deleteRoles()
      }
        if(action == "Delete Employees") {
          deleteEmployees()
      }   
       if(action == "View the Total Utilized Budget of a Department") {
            viewTheTotalUtilizedBudgetOfADepartment()
      }
      if(action == "Exit") {
            exit()
    }   
    })
}

 //========== VIEW ALL DEPARTMENTS ==========//
  
function viewAllDepartments() {
    connection.query("SELECT * FROM department;", (err, res) => {
        console.table(res)
        mainMenu();
    })
}
 //========== VIEW ALL ROLES ==========//
  
function viewAllRoles() {
    connection.query("SELECT * FROM role;", (err, res) => {
        console.table(res)
        mainMenu();
    })
}

//========== VIEW ALL EMPLOYEES ==========//

function viewAllEmployeess() {
    connection.query("SELECT * FROM department;", (err, res) => {
        console.table(res)
        mainMenu();
    })
}

//========== VIEW ALL EMPLOYEES BY ROLE ==========//
  
  const viewAllRoles = () => {
    connection.query("SELECT title AS Title, salary AS Salary FROM employee_role", (err, res) => {
      if (err) throw err
      console.table(res);
      mainMenu();
    })
  }

//========== VIEW ALL EMPLOYEES BY MANAGER ==========//


  //========== VIEW ALL EMPLOYEES BY DEPARTMENT ==========//
  
  const viewAllEmployeesByDepartment = () => {
    connection.query("SELECT employee.first_name, employee.last_name, department.name AS Department FROM employee JOIN employee_role ON employee.role_id = employee_role.id JOIN department ON employee_role.department_id = department.id ORDER BY employee.id;", (err, res) => {
      if (err) throw err
      console.table(res);
      mainMenu();
    })
  }

// //============= ADD A DEPARTMENT ==========================//
  function addADepartment() { 
      inquirer.prompt([
          {
            name: "name",
            type: "input",
            message: "What department would you like to add?"
          }
      ]).then(function(res) {
          var query = connection.query(
              "INSERT INTO department SET ? ",
              {
                name: res.name
              
              },
              function(err) {
                  if (err) throw err
                  console.log("Successfully added a department!");
                  console.table(res);
                  mainMenu();
              }
          )
      })
    }


    //========== ADD A ROLE ==========//

//========== ADD AN EMPLOYEE ==========//
  
  function addAnEmployee() {
    connection.query("SELECT * FROM employee_role", function (err, results) {
      if (err) throw err;
      inquirer
        .prompt([
          {
            name: 'employeeAdd',
            type: 'input',
            message: 'Enter the first name of the employee you would like to add.',
          },
          {
            name: 'last_name',
            type: 'input',
            message: 'Enter the last name of the employee you would like to add.',
          },
          {
            name: 'role_id',
            type: 'list',
            message: 'Select the role of this employee.',
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
                  name: 'manager_id',
                  type: 'list',
                  message: 'Select the manager for this employee.',
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
    connection.query('SELECT * FROM employee', function (err, results){
      if (err) throw err;
      inquirer
      .prompt([{
          name: 'employeeUpdate',
          type: 'list',
          message: "Choose the employee whose role you would like to update.",
          choices: results.map(employee => employee.first_name)
          },
      ])
      .then((answer) => {
          const updateEmployee = (answer.employeeUpdate)
          connection.query('SELECT * FROM employee_role', function (err, results){
              if (err) throw err;
              inquirer
              .prompt([
          {
          name: 'role_id',
          type: 'list',
          message: "Select the new role of the employee.",
          choices: results.map(employee_role => employee_role.title)
          },
      ])
          .then((answer) => {
              const roleChosen = results.find(employee_role => employee_role.title === answer.role_id)
              connection.query(
                "UPDATE employee SET ? WHERE first_name = " + "'" + updateEmployee + "'", {
                  role_id: "" + roleChosen.id + "",
                },
                function (err) {
                  if (err) throw err;
                  console.log("Successfully updated " + updateEmployee + "'s role to " + answer.role_id + "!");
                  mainMenu();
                }
              )
          })
        })
      })
    })
  }

  

  
  
  
  
  
  
  
  // //========== REMOVE EMPLOYEE ==========//
  
//   function removeEmployee() {
//     connection.query("SELECT * FROM employee", function (err, res) {
//       if (err) throw err;
//       inquirer.prompt([
//         {
//           type: "rawlist",
//           name: "removeEmp",
//           message: "Select the employee who will be removed",
//           choices: res.map(emp => emp.id && emp.first_name)
//         }
//       ]).then(function (answer) {
//         const selectedEmp = res.find(emp => emp.id && emp.first_name === answer.removeEmp);
//         connection.query("DELETE FROM employee WHERE ?",
//           [{
//             id: selectedEmp.id
//           }],
//           function (err, res) {
//             if (err) throw err;
//             console.log("The employee has been removed.\n");
//             mainMenu();
//           }
//         );
//       });
//     })
//   };
  
  // //========== UPDATE EMPLOYEE ROLE ==========//
//   const updateEmployeeRole = () => {
//     connection.query('SELECT * FROM employee', function (err, results){
//       if (err) throw err;
//       inquirer
//       .prompt([{
//           name: 'employeeUpdate',
//           type: 'list',
//           message: "Choose the employee whose role you would like to update.",
//           choices: results.map(employee => employee.first_name)
//           },
//       ])
//       .then((answer) => {
//           const updateEmployee = (answer.employeeUpdate)
//           connection.query('SELECT * FROM employee_role', function (err, results){
//               if (err) throw err;
//               inquirer
//               .prompt([
//           {
//           name: 'role_id',
//           type: 'list',
//           message: "Select the new role of the employee.",
//           choices: results.map(employee_role => employee_role.title)
//           },
//       ])
//           .then((answer) => {
//               const roleChosen = results.find(employee_role => employee_role.title === answer.role_id)
//               connection.query(
//                 "UPDATE employee SET ? WHERE first_name = " + "'" + updateEmployee + "'", {
//                   role_id: "" + roleChosen.id + "",
//                 },
//                 function (err) {
//                   if (err) throw err;
//                   console.log("Successfully updated " + updateEmployee + "'s role to " + answer.role_id + "!");
//                   mainMenu();
//                 }
//               )
//           })
//         })
//       })
//     })
//   }
  
  
  
  //========== UPDATE EMPLOYEE MANAGER ==========//
  // const updateEmployeeManager = () => {
      
  // }
  
  
  // //============= ADD EMPLOYEE ROLE ==========================//
//   function addEmployeeRole() {
//     connection.query(
//       "SELECT employee_role.title AS Title, employee_role.salary AS Salary FROM employee_role",
//       function (err, res) {
//         inquirer
//           .prompt([
//             {
//               name: "Title",
//               type: "input",
//               message: "What is the title of the role?",
//             },
//             {
//               name: "Salary",
//               type: "input",
//               message: "What is the salary of the role?",
//             },
//           ])
//           .then(function (res) {
//             connection.query(
//               "INSERT INTO employee_role SET ?",
//               {
//                 title: res.Title,
//                 salary: res.Salary,
//               },
//               function (err) {
//                 if (err) throw err;
//                 console.log("Successfully added an employee role!")
//                 console.table(res);
//                 mainMenu();
//               }
//             );
//           });
//       }
//     );
//   }
  


mainMenu()