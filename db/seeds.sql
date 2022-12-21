
use employee_tracker;

-- Department Seeds --
INSERT INTO department(name) VALUES 
("HR"), -- 1
("Engineering"), -- 2
("Sales"), -- 3
("Finance"), -- 4
("Legal"), -- 5 
("IT"), -- 6
("Fashion"), -- 7
("Corporate"); -- 8

-- Role Seeds -- 
INSERT INTO role(title, salary, department_id) VALUES
("HR Manager", 200000, 1), -- HR 
("HR Information Specialist", 170000, 1),  -- HR 
("HR Coordinator", 150000, 1),  -- HR -- 
("Senior Engineer", 180000, 2), -- Engineering 
("Engineer Manager", 200000, 2),  -- Engineering 
("Software Engineer", 120000, 2),  -- Engineering 
("Sales Manager", 150000, 3), -- Sales 
("Sales Lead", 120000, 3), -- Sales 
("Salesperson", 90000, 3), -- Sales 
("Accounting Manager", 180000, 4),  -- Finance 
("Accountant", 140000,4), -- Finance 
("Accounting Clerk", 100000, 4),  -- Finance 
("Lawyer", 200000, 5), -- Legal 
("Paralegal", 150000, 5), -- Legal 
("Legal Team Manager", 270000,5), -- Legal 
("IT Support", 200000, 6), -- IT 
("IT Coordinator", 150000, 6), -- IT 
("IT Manager", 270000, 6), -- IT 
("Fashion Manager", 280000, 7), -- Fashion
("Fashion Designer", 250000, 7), -- Fashion
("Fashion Assistant", 200000, 7), -- Fashion
("Corporate CEO", 300500, 8), -- Corporate
("Corporate CFO", 300200, 8), -- Corporate
("Corporate COO", 300000, 8); -- Corporate


-- Employee Seeds -- 
INSERT INTO employee(first_name, last_name, role_id, manager_id) VALUES
("Kakashi", "Hatake", 1, NULL), 
("Asuma", "Sarutobi", 5, NULL), 
("Jiraiya","Ogata", 7, NULL), 
("Shikamaru", "Nara", 10, NULL), 
("Sasuke", "Uchiha", 15, NULL), 
("Gaara","Sunagakure", 18, NULL), 
("Jamie", "Chung", 19, NULL),
("Hannah", "Chung", 22, NULL), 
("Naruto", "Uzumaki", 2, 1), 
("Tenzo", "Yamato", 3, 1), 
("Choji","Akimichi", 4, 2), 
("Kiba", "Inuzuka", 6, 2), 
("Temari", "Sunagakure", 8, 3), 
("Itachi","Uchiha", 9, 3), 
("Tobi", "Zetsu", 11, 4), 
("Mirio", "Toogata", 12, 4), 
("Minato","Uzumaki", 14, 5), 
("Shoto", "Todoroki", 13, 5), 
("Toshinori", "Yagi", 17, 6), 
("Kankuro","Sunagakure", 16, 6),
("Ei", "Ning", 20, 7), 
("Stina", "Stevenson", 21, 7),
("Joseph","Brambila", 23, 8),
("Catherine", "Chen", 24, 8)






