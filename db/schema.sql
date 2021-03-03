CREATE DATABASE burger_db;

USE burger_db;

CREATE TABLE burgers 
(
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(70) NOT NULL,
    devoured BOOLEAN DEFAULT false
);