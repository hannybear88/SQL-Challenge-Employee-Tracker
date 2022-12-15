
use employee_tracker;

-- insert into department name 
insert into department(name) VALUES 
("HR"), -- 1
("Engineering"), -- 2
("Sales"), -- 3
("Finance"), -- 4
("Legal"); -- 5 

-- insert into role, title, salary, and department_id 
insert into role(title, salary, department_id) VALUES
("HR Manager", 200000, 1), -- HR
("HR Information Specialist", 170000, 1),  -- HR
("HR Coordinator", 150000, 1),  -- HR
("Senior Engineer", 180000, 2), -- Engineering
("Lead Engineer", 150000, 2),  -- Engineering
("Software Engineer", 120000, 2),  -- Engineering
("Sales Manager", 150000, 3), -- Sales
("Sales Lead", 120000, 3), -- Sales
("Salesperson", 90000, 3), -- Sales
("Accounting Manager", 180000, 4),  -- Finance
("Accountant", 140000,4), -- Finance
("Accounting Clerk", 100000, 4),  -- Finance
("Lawyer", 200000, 5), -- Legal
("Paralegal", 150000, 5), -- Legal
("Legal Team Lead", 270000,5); -- Legal


-- insert into employee
insert into employee(first_name, last_name, role_id, manager_id) VALUES
("Joey", "Brambila", 2, NULL),
("Ei", "Ning", 1, NULL),
("Stina","Stevenson", 3, NULL);
