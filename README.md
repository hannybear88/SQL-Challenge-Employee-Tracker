# SQL-Challenge-Employee-Tracker
HW Challenge #12

## Description
<!-- For this challenge we had to create an application called Note Taker that can be used to write and save notes. This application will use an Express.js back end and will save and retrieve note data from a JSON file.

The application’s front end has already been created and provided by UCSD Coding Bootcamp. It's our job to build the back end, connect the two, and then deploy the entire application to Heroku.

It was challenging to build the back-end and connect it to the front-end. Even though it was challenging, it was quite enjoyable. I like making notes to myself because it helps me with reminding myself what I have coming up, what I need to do for the day, week, any events that are coming up, and etc. Another challenge I ran into was figuring out how to deploy it onto Heroku. It had failed which was frustrating because it was working fine everywhere else. I finally was able to figure it out.

 I had successfully deployed the app on Heroku, the app has no errors in the console, and there are no errors in the app itself.  -->

## Table of Contents
* [Installation](#installation)
* [Getting Started and Bonus](#Getting-Started-and-Bonus)
* [User Story](#User-Story)
* [How to Use This Project and Acceptance Criteria](#How-to-Use-This-Project-and-Acceptance-Criteria)
* [Usage](#Usage)
* [Demo](#Demo)
<!-- * [Technologies Used](#Technologies-Used) -->
* [Support](#Support)
* [Credits](#Credits)
* [Contributors](#Contributors)


## Installation
1. Clone the repo
2. Install all dependencies
    - console.table
    - inquirer 8.2.4
    -  mysql2
`````
npm install
`````
3. Create Database Schema
`````
mysql -u root -p
`````
`````
mysql> source ./db/schema.sql
`````
`````
mysql> source db/seeds.sql
`````
4. Run the application 
`````
node server.js
`````

## Getting Started and Bonus

**Getting Started**
You'll need to use the [MySQL2package](https://www.npmjs.com/package/mysql2) to connect to your MySQL database and perform queries, the [Inquirer Package](https://www.npmjs.com/package/mysql2) to interact with the user via the command line, and the [console.package table](https://www.npmjs.com/package/console.table)to print MySQL rows to the console. 

**IMPORTANT**
You will be committing a file that contains your database credentials. Make sure that your MySQL password is not used for any other personal accounts, because it will be visible on GitHub. In upcoming lessons, you will learn how to better secure this password, or you can start researching npm packages now that could help you.


You might also want to make your queries asynchronous. MySQL2 exposes a ```.promise()```function on Connections to upgrade an existing non-Promise connection to use Promises. To learn more and make your queries asynchronous, refer to the [npm documentation on MySQL2](https://www.npmjs.com/package/mysql2)



As the image illustrates, your schema should contain the following three tables:

- ```department```

    * ```id: INT PRIMARY KEY```

    * ```name: VARCHAR(30)``` to hold department name

- ```role```

    * ```id: INT PRIMARY KEY```

    * ```title: VARCHAR(30)``` to hold role title

    * ```salary: DECIMAL``` to hold role salary

    * ```department_id: INT``` to hold reference to department role belongs to

- ```employe```e

    * ```id: INT PRIMARY KEY```

    * ```first_name: VARCHAR(30)``` to hold employee first name

    * ```last_name: VARCHAR(30)``` to hold employee last name

    * ```role_id: INT``` to hold reference to employee role

    * ```manager_id: INT``` to hold reference to another employee that is the manager of the current employee (null if the employee has no manager)


    You might want to use a separate file that contains functions for performing specific SQL queries you'll need to use. A constructor function or class could be helpful for organizing these. You might also want to include a ```seeds.sql file``` to pre-populate your database, making the development of individual features much easier.

**Bonus**

- Try to add some additional functionality to your application, such as the ability to do the following:

    * Update employee managers.
    * View employees by manager.
    * View employees by department.
    * Remove Department 
    * Remove Role 
    * Remove Employee 
    * View the total utilized budget of a department <!-- in other words the combined salaries of all employees in that department. -->


## User Story
- AS A business owner
- I WANT to be able to view and manage the departments, roles, and employees in my company
- SO THAT I can organize and plan my business


## How to Use This Project and Acceptance Criteria

[![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white)](https://github.com/hannybear88/SQL-Challenge-Employee-Tracker)
<!-- Click on the button below to be directed straight to the Heroku deployed application -->

<!-- [![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://expressjs-challenge-note-taker.herokuapp.com/) -->


- GIVEN a command-line application that accepts user input
- WHEN I start the application
- THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role
- WHEN I choose to view all departments
- THEN I am presented with a formatted table showing department names and department ids
- WHEN I choose to view all roles
- THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
- WHEN I choose to view all employees
- THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
- WHEN I choose to add a department
- THEN I am prompted to enter the name of the department and that department is added to the database
- WHEN I choose to add a role
- THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
- WHEN I choose to add an employee
- THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
- WHEN I choose to update an employee role
- THEN I am prompted to select an employee to update and their new role and this information is updated in the database
 
 ## Usage
 - When the application starts, then the user is presented with the following options listed below: 

    * View All Departments 
    * View All Roles
    * View All Employees 
    * View All Employees by Manager 
    * View All Employees by Department 
    * Add a Department 
    * Add a Role 
    * Add an Employee 
    * Update an Employee Role 
    * Update an Employee Manager 
    * Remove Department 
    * Remove Role 
    * Remove Employee 
    * View the Total Utilized Budget of a Department 
    * Exit
- Then when the user chooses of the options they are presented, the corresponding data will be retrieved and be displayed in a formatted table. 



<!-- ## Demo 
Screenshots

**Landing Page Screenshot**
![Landing Page Screenshot](/public/assets/images/landing_page_screenshot.png)

**Note Taker Screenshots**

![Note Taker Screenshot 1](/public/assets/images/Note_Taker_Screenshot_1.png)

![Note Taker Screenshot 2](/public/assets/images/Note_Taker_Screenshot_2.png)

![Note Taker Screenshot 3](/public/assets/images/Note_Taker_Screenshot_3.png) -->

<!-- ## Technologies Used

![Technologies](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Technologies](https://img.shields.io/badge/-OOP-red)
![Technologies](https://img.shields.io/badge/-JSON-blue)
![Technologies](https://img.shields.io/badge/-Node.js-339933?logo=Node.js&logoColor=white)
![Technologies](https://img.shields.io/badge/-npm-CB3837?logo=npm&logoColor=white)
![Technologies](https://img.shields.io/badge/-Express-blueviolet)
![Technologies](https://img.shields.io/badge/UUID-orange)
![Technologies](https://img.shields.io/badge/-Heroku-grey) -->


## Support 
If you need support or have any questions about the repo, please [open an issue](https://github.com/hannybear88/Node.js-Challenge-Professional-README-Generator/issues) or contact me via email at hannahkchung88@gmail.com. You can find more of my work on my GitHub, [hannybear88](https://github.com/hannybear88/).

## Credits
- Code by Hannah Chung 

## Contributors
- Code by Hannah Chung