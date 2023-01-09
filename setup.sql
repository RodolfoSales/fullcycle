-- create the databases
CREATE DATABASE IF NOT EXISTS nodedb;

-- create the users for each database
CREATE TABLE IF NOT EXISTS people (id int not null auto_increment, name varchar(255), primary key(id));

INSERT INTO people(name) values('Rodolfo');