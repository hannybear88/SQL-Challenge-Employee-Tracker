use employee_tracker;

insert into department(name) VALUES 
("HR"), 
("Engineering"),
("Sales");

insert into role(title, salary, department_id) VALUES
("Sales Manager", 120000, 3),
("Senior Engineer", 150000, 2),
("HR Manager", 100000, 1);

insert into employee(first_name, last_name, role_id, manager_id) VALUES
("Joey", "Brambila", 2, NULL),
("Ei", "Ning", 1, NULL),
("Stina","Stevenson", 3, NULL);
