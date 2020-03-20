USE employees_DB;
CREATE TABLE department(
  id INT NOT NULL AUTO_INCREMENT,
  department_name VARCHAR(30),
  PRIMARY KEY (id)
);
INSERT INTO department (department_name)
VALUES ("Engineering"),("Finance"),("Legal"),("Sales");