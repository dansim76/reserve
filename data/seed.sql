CREATE TABLE stores (
  id INT NOT NULL AUTO_INCREMENT,
  storeName VARCHAR(100) NOT NULL,
  city VARCHAR(100) NOT NULL,
  username VARCHAR(100) NOT NULL,
  password VARCHAR(100) NOT NULL,
  PRIMARY KEY (position) 
);
-- more columns to be added

-- instead of writing insert statements, maintain an excel table with data (csv) and loaded the file
load data local infile 
'C:/Users/jli1/class/classActivities/reserve/data/stores.txt'
into table products
FIELDS TERMINATED BY ','
lines terminated by '\n';
--IGNORE 1 LINES

CREATE TABLE foodbanks (
  id INT NOT NULL AUTO_INCREMENT,
  bankName VARCHAR(100) NOT NULL,
  city VARCHAR(100) NULL,
  username VARCHAR(100) NULL,
  password VARCHAR(100) NULL,
  PRIMARY KEY (position)
);
-- more columns to be added

-- instead of writing insert statements, maintain an excel table with data (csv) and loaded the file
load data local infile 
'C:/Users/jli1/class/classActivities/reserve/data/foodbanks.txt' 
into table products
FIELDS TERMINATED BY ','
lines terminated by '\n';
--IGNORE 1 LINES


CREATE TABLE inventory (
  id INT NOT NULL AUTO_INCREMENT,
  item VARCHAR(50) NOT NULL,
  quantity INT NOT NULL,
  expiration DATE NOT NULL,
  storeId INT NOT NULL,
  PRIMARY KEY (id)
);
-- more columns to be added

-- instead of writing insert statements, maintain an excel table with data (csv) and loaded the file
load data local infile 
'C:/Users/jli1/class/classActivities/reserve/data/inventory.txt' 
into table products
FIELDS TERMINATED BY ','
lines terminated by '\n';
--IGNORE 1 LINES


CREATE TABLE reserved (
  id INT NOT NULL AUTO_INCREMENT,
  item VARCHAR(50) NOT NULL,
  quantity INT NOT NULL,
  expiration DATE NOT NULL,
  storeId INT NOT NULL,
  bankID INT NOT NULL,
  PRIMARY KEY (id)
);
-- more columns to be added

-- instead of writing insert statements, maintain an excel table with data (csv) and loaded the file
load data local infile 
'C:/Users/jli1/class/classActivities/reserve/data/reserved.txt' 
into table products
FIELDS TERMINATED BY ','
lines terminated by '\n';
--IGNORE 1 LINES
