
use employee_tracker;

-- Department Seeds --
insert into department(name) VALUES 
("HR"), -- 1
("Engineering"), -- 2
("Sales"), -- 3
("Finance"), -- 4
("Legal"), -- 5 
("IT"); -- 6

-- Role Seeds -- 
insert into role(title, salary, department_id) VALUES
("HR Manager", 200000, 1), -- HR -- role id 1 
("HR Information Specialist", 170000, 1),  -- HR -- role id 2 
("HR Coordinator", 150000, 1),  -- HR -- role id 3
("Senior Engineer", 180000, 2), -- Engineering -- role id 4 
("Engineer Manager", 200000, 2),  -- Engineering -- role id 5 
("Software Engineer", 120000, 2),  -- Engineering -- role id 6 
("Sales Manager", 150000, 3), -- Sales -- role id 7
("Sales Lead", 120000, 3), -- Sales -- role id 8 
("Salesperson", 90000, 3), -- Sales -- role id 9 
("Accounting Manager", 180000, 4),  -- Finance -- role id 10 
("Accountant", 140000,4), -- Finance -- role id 11 
("Accounting Clerk", 100000, 4),  -- Finance -- role id 12 
("Lawyer", 200000, 5), -- Legal -- role id 13
("Paralegal", 150000, 5), -- Legal -- role id 14
("Legal Team Manager", 270000,5), -- Legal -- role id 15 
("IT Support", 200000, 6), -- IT -- role id 16 
("IT Coordinator", 150000, 6), -- IT -- role id 17 
("IT Manager", 270000, 6); -- IT -- role id 18 


-- Employee Seeds -- 
insert into employee(first_name, last_name, role_id, manager_id) VALUES
("Kakashi", "Hatake", 2, NULL), -- employee id
("Asuma", "Sarutobi", 1, NULL), -- employee id 
("Jiraiya","Ogata", 3, NULL), -- employee id 
("Shikamaru", "Nara", 4, NULL), -- employee id 
("Sasuke", "Uchiha", 6, NULL), -- employee id 
("Gaara","Sunagakure", 5, NULL), -- employee id 
("Naruto", "Uzumaki", 2, 1), -- employee id
("Tenzo", "Yamato", 1, 6), -- employee id 
("Choji","Akimichi", 3, 5), -- employee id 
("Kiba", "Inuzuka", 2, 3), -- employee id
("Temari", "Sunagakure", 1, 2), -- employee id 
("Itachi","Uchiha", 3, 4), -- employee id 
("Tobi", "Zetsu", 2, 5), -- employee id
("Hannah", "Chung", 1, 6), -- employee id 
("Minato","Uzumaki", 3, 2), -- employee id 
("Ei", "Ning", 2, 3), -- employee id
("Asuma", "Sarutobi", 1, 4), -- employee id 
("Kankuro","Sunagakure", 3, 1); -- employee id 





