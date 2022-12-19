
use employee_tracker;

-- Department Seeds --
insert into department(name) VALUES 
("HR"), -- 1
("Engineering"), -- 2
("Sales"), -- 3
("Finance"), -- 4
("Legal"); -- 5 
("IT"); -- 6

-- Role Seeds -- 
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
("IT Support", 200000, 6), -- IT
("IT Coordinator", 150000, 6), -- IT
("IT Manager", 270000, 6); -- IT


-- Employee Seeds -- 
insert into employee(first_name, last_name, role_id, manager_id) VALUES
("Kakashi", "Hatake", 2, NULL),
("Asuma", "Sarutobi", 1, NULL),
("Jiraiya","Ogata", 3, NULL);





