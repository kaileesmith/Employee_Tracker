DROP DATABASE IF EXISTS employeeTracker_db;

CREATE DATABASE employeeTracker_db;
USE employeeTracker_db;
-- Create the table department.
CREATE TABLE department (
  id INT AUTO_INCREMENT NOT NULL,
  name varchar(30) NOT NULL,
  PRIMARY KEY(id)
);