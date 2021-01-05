USE employeeTracker_db;

-- Inserting the customer service.
INSERT INTO department (name)
VALUES ("Customer Service");

INSERT INTO role (title, salary, department_id)
VALUES ("Manager", 90000, 1) ;

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Darth", "Vader", 1, NULL);

-- Inserting the sales.
INSERT INTO department (name)
VALUES ('Sales');

INSERT INTO role (title, salary, department_id)
VALUES ("Manager", 75000, 1) ;INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Jabba", "the Hutt", 1, NULL);

INSERT INTO department (name)
VALUES ('Sales');

INSERT INTO role (title, salary, department_id)
VALUES ("ISR", 30000, 2) ;

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Han", "Solo", 1, 1);

-- Inserting the IT.
INSERT INTO department (name)
VALUES ('IT');

INSERT INTO role (title, salary, department_id)
VALUES ("IT Manager", 90000, 1) ;

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("R2", "D2", 1, NULL);


-- Inserting the Accounting.
INSERT INTO department (name)
VALUES ('Accounting');

INSERT INTO role (title, salary, department_id)
VALUES ("Accounts Payable", 55000, 1) ;

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("C3", "PO", 1, NULL);