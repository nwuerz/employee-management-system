DROP DATABASE IF EXISTS employees_DB;
CREATE DATABASE employees_DB;
USE employees_DB;
CREATE TABLE employees(
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(45) NULL,
  last_name VARCHAR(45) NULL,
  title VARCHAR(20) NULL,
  department VARCHAR(20) NULL,
  salary INT NULL,
  manager VARCHAR(45),
  PRIMARY KEY (id)
);
INSERT INTO employees (first_name, last_name, title, department, salary, manager)
VALUES ("John", "Doe", "Sales Lead", "Sales", 100000, "Ashley Rodriguez"),
("Mike", "Chan", "Salesperson", "Sales", 80000, "John Doe"),
("Ashely", "Rodriguez", "Lead Engineer", "Engineering", 150000, "null"),
("Kevin", "Tupik", "Software Engineer", "Engineering", 120000, "Ashley Rodriquez"),
("Malia", "Brown", "Accountant", "Finance", 125000, "null"),
("Sarah", "Lourd", "Legal Team Lead", "Legal", 250000, "null"),
("Tom", "Allen", "Lawyer", "Legal", 190000, "Sarah Lourd"),
("Christian", "Eckenrode", "Lead Engineer", "Engineering", 150000, "Mike Chan");