-- set database 
USE burgers_db;

-- insert into table
INSERT INTO burgers  (burger_name, devoured, dt) 
VALUES ('Bacon Cheeseburger', false, CURRENT_TIMESTAMP)
, ('Smash Burger', false, CURRENT_TIMESTAMP)
, ('Avacado Burger', false, CURRENT_TIMESTAMP);