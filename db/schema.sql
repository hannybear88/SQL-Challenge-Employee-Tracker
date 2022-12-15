drop database if exists employee_tracker;

create database employee_tracker;
use employee_tracker;

create table department (
    id INT PRIMARY KEY AUTO_INCREMENT, 
    name VARCHAR(30) -- to hold department name 
);

create table role (
    id INT PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(30), -- to hold role title 
    salary DECIMAL, -- to hold role salary
    department_id INT,   -- to hold reference to department role belongs to
    FOREIGN KEY (department_id) REFERENCES department(id)
);

create table employee (
   id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(30), -- to hold employee first name
    last_name VARCHAR(30), -- to hold employee last name
    role_id INT, -- to hold reference to employee role
    manager_id INT,  -- To hold reference to another employee that is the manager of the current employee (null if the employee has no manager)
    FOREIGN KEY (role_id) REFERENCES role(id),
    FOREIGN KEY (manager_id) REFERENCES employee(id)
);