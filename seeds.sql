-- departments data --
INSERT INTO department (name)
VALUES ("sales");

INSERT INTO department (name)
VALUES ("finance");

INSERT INTO department (name)
VALUES ("legal");

INSERT INTO department (name)
VALUES ("engineering");


-- roles data --
INSERT INTO roles (title, salary, department_id)
VALUES ("sales lead", 10000, 1);

INSERT INTO roles (title, salary, department_id)
VALUES ("salesperson", 80000, 2);

INSERT INTO roles (title, salary, department_id)
VALUES ("lead engineer", 150000, 3);

INSERT INTO roles (title, salary, department_id)
VALUES ("software engineer", 120000, 4);

INSERT INTO roles (title, salary, department_id)
VALUES ("account manager", 160000, 5);

INSERT INTO roles (title, salary, department_id)
VALUES ("lawyer", 190000, 6);


-- employee data --
INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("john", "doe", 1, 1);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("mike", "chan", 2, 2);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("ashley", "singh", 3, 3);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("tom", "allen", 4, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("malia", "brown", 5, 5);
