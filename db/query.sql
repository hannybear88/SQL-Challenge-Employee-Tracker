 -- query to get the list of roles
    SELECT role.id, role.title AS role, department.name AS department, role.salary
    FROM role
    LEFT JOIN department
    ON role.department_id = department.id
    ORDER BY role.id;


-- query to get the list of employees
    SELECT 
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
        employee.id;



-- SELECT *
-- FROM course_names
-- JOIN department ON course_names.department = department.id;



-- SELECT
-- 	employee.id,
--     employee.first_name,
--     employee.last_name,
--     role.title,
--     department.name AS department,
--     role.salary,
--     CONCAT(manager.first_name, ' ', manager.last_name) AS manager
-- FROM
-- 	employee
-- LEFT JOIN 
-- 	role ON employee.role_id = role.id 
-- LEFT JOIN 
-- 	department on role.department_id = department.id
-- LEFT JOIN
-- 	employee manager on manager.id = employee.manager_id;
