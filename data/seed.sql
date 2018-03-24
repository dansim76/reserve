CREATE TABLE stores (
  id INT NOT NULL AUTO_INCREMENT,
  storeName VARCHAR(100) NOT NULL,
  addressNumber VARCHAR (25) NULL,
  addressStreet VARCHAR (100) NOT NULL,
  city VARCHAR(25) NOT NULL,
  state VARCHAR(25) NOT NULL,
  zip VARCHAR(5) NOT NULL,
  username VARCHAR(100) NOT NULL,
  password VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
);
-- more columns to be added

-- instead of writing insert statements, maintain an excel table with data (csv) and loaded the file
load data local infile 
'C:/Users/jli1/class/classActivities/reserve/data/stores.txt'
into table stores
FIELDS TERMINATED BY ','
lines terminated by '\n';
--IGNORE 1 LINES

CREATE TABLE foodbanks (
  id INT NOT NULL AUTO_INCREMENT,
  bankName VARCHAR(100) NOT NULL,
  addressNumber VARCHAR (25) NULL,
  addressStreet VARCHAR (100) NOT NULL,
  city VARCHAR(25) NOT NULL,
  state VARCHAR(25) NOT NULL,
  zip VARCHAR(5) NOT NULL,
  username VARCHAR(100) NOT NULL,
  password VARCHAR(100) NOT NULL,
  PRIMARY KEY (id)
);
-- more columns to be added

-- instead of writing insert statements, maintain an excel table with data (csv) and loaded the file
load data local infile 
'C:/Users/jli1/class/classActivities/reserve/data/foodbanks.txt' 
into table foodbanks
FIELDS TERMINATED BY ','
lines terminated by '\n';
--IGNORE 1 LINES


CREATE TABLE inventory (
  id INT NOT NULL AUTO_INCREMENT,
  item VARCHAR(50) NOT NULL,
  quantity INT NOT NULL,
  expiration DATE NOT NULL,
  PRIMARY KEY (id)
);


CREATE TABLE reserved (
  id INT NOT NULL AUTO_INCREMENT,
  item VARCHAR(50) NOT NULL,
  quantity INT NOT NULL,
  expiration DATE NOT NULL,
  PRIMARY KEY (id)
);
