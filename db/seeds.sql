
use employee_tracker;

-- Department Seeds --
INSERT INTO department(name) VALUES 
("HR"), -- 1
("Engineering"), -- 2
("Sales"), -- 3
("Finance"), -- 4
("Legal"), -- 5 
("IT"); -- 6

-- Role Seeds -- 
INSERT INTO role(title, salary, department_id) VALUES
("HR Manager", 200000, 1), -- HR -- role id 
("HR Information Specialist", 170000, 1),  -- HR -- role id 
("HR Coordinator", 150000, 1),  -- HR -- role id
("Senior Engineer", 180000, 2), -- Engineering -- role id 
("Engineer Manager", 200000, 2),  -- Engineering -- role id 
("Software Engineer", 120000, 2),  -- Engineering -- role id 
("Sales Manager", 150000, 3), -- Sales -- role id
("Sales Lead", 120000, 3), -- Sales -- role id 
("Salesperson", 90000, 3), -- Sales -- role id 
("Accounting Manager", 180000, 4),  -- Finance -- role id 
("Accountant", 140000,4), -- Finance -- role id 
("Accounting Clerk", 100000, 4),  -- Finance -- role id 
("Lawyer", 200000, 5), -- Legal -- role id 
("Paralegal", 150000, 5), -- Legal -- role id 
("Legal Team Manager", 270000,5), -- Legal -- role id 
("IT Support", 200000, 6), -- IT -- role id 
("IT Coordinator", 150000, 6), -- IT -- role id 
("IT Manager", 270000, 6); -- IT -- role id 


-- Employee Seeds -- 
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES
("Kakashi", "Hatake", 1, NULL), -- employee id
("Asuma", "Sarutobi", 4, NULL), -- employee id 
("Jiraiya","Ogata", 7, NULL), -- employee id 
("Shikamaru", "Nara", 10, NULL), -- employee id 
("Sasuke", "Uchiha", 13, NULL), -- employee id 
("Gaara","Sunagakure", 16, NULL), -- employee id 
("Naruto", "Uzumaki", 2, 1), -- employee id
("Tenzo", "Yamato", 3, 6), -- employee id 
("Choji","Akimichi", 5, 5), -- employee id 
("Kiba", "Inuzuka", 6, 3), -- employee id
("Temari", "Sunagakure", 8, 2), -- employee id 
("Itachi","Uchiha", 9, 4), -- employee id 
("Tobi", "Zetsu", 11, 5), -- employee id
("Hannah", "Chung", 12, 6), -- employee id 
("Minato","Uzumaki", 14, 2), -- employee id 
("Ei", "Ning", 15, 3), -- employee id
("Asuma", "Sarutobi", 17, 4), -- employee id 
("Kankuro","Sunagakure", 18, 1); -- employee id 





