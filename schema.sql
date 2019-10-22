DROP DATABASE IF EXISTS employeeTracker_db;

CREATE DATABASE employeeTracker_db;

USE employeeTracker_db;

CREATE TABLE department (
	id INT,
    name VARCHAR(30),
    PRIMARY KEY (id)
);

CREATE TABLE roles (
	id INT,
    title VARCHAR(30),
    salary DECIMAL,
    department_id int,
    PRIMARY KEY (id)
);

CREATE TABLE employee (
	id INT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id int,
    PRIMARY KEY (id)
);
	