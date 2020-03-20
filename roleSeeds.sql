USE employees_DB;
CREATE TABLE roles(
  id INT NOT NULL AUTO_INCREMENT,
  title VARCHAR(30) NULL,
  salary DECIMAL NULL,
  deparment_id INT NULL,
  PRIMARY KEY (id)
);
INSERT INTO roles (title, salary, deparment_id)
VALUES ("Software Engineer", 120000, 1),
("Lead Engineer", 150000, 1),
("Accountant", 125000, 2),
("Lawyer", 190000, 3),
("Legal Team Lead", 250000, 3),
("Salesperson", 80000, 4),
("Sales Lead", 100000, 4);