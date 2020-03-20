DROP DATABASE IF EXISTS employees_DB;
CREATE DATABASE employees_DB;
USE employees_DB;
CREATE TABLE employees(
  id INT NOT NULL AUTO_INCREMENT,
  first_name VARCHAR(45) NULL,
  last_name VARCHAR(45) NULL,
  role_id INT NOT NULL,
  manager_id INT NULL,
  PRIMARY KEY (id)
);
INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES ("John", "Doe", 7, 1),
("Mike", "Chan", 6, 2),
("Ashely", "Rodriguez", 2, NULL),
("Kevin", "Tupik", 1, 1),
("Malia", "Brown", 3, NULL),
("Sarah", "Lourd", 5, NULL),
("Tom", "Allen", 4, 4),
("Christian", "Eckenrode", 2, 3);