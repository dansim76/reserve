CREATE TABLE inventory (
  id INT NOT NULL AUTO_INCREMENT,
  item VARCHAR(50) NOT NULL,
  quantity INT NOT NULL,
  expiration DATE NOT NULL,
  storeId INT NOT NULL,
  PRIMARY KEY (id)
);


INSERT INTO inventory (item, quantity, expiration, storeId)
VALUES ("peanut butter", 500, "2018-01-15");

INSERT INTO inventory (item, quantity, expiration, storeId)
VALUES ("noodles", 500, "2018-02-15");

INSERT INTO inventory (item, quantity, expiration, storeId)
VALUES ("canned tuna", 500, "2018-03-15");

INSERT INTO inventory (item, quantity, expiration, storeId)
VALUES ("rice", 500, "2018-04-15");

INSERT INTO inventory (item, quantity, expiration, storeId)
VALUES ("canned vegetables", 500, "2018-05-15");

INSERT INTO inventory (item, quantity, expiration, storeId)
VALUES ("olive oil", 500, "2018-06-15");

INSERT INTO inventory (item, quantity, expiration, storeId)
VALUES ("cereal", 500, "2018-07-15");

INSERT INTO inventory (item, quantity, expiration, storeId)
VALUES ("granola bars", 500, "2018-08-15");

INSERT INTO inventory (item, quantity, expiration, storeId)
VALUES ("nuts", 500, "2018-09-15");

INSERT INTO inventory (item, quantity, expiration, storeId)
VALUES ("dried fruit", 500, "2018-10-15");


CREATE TABLE donor_stores (
  id INT NOT NULL AUTO_INCREMENT,
  storeName VARCHAR(100) NOT NULL,
  city VARCHAR(100) NOT NULL,
  username VARCHAR(100) NOT NULL,
  password VARCHAR(100) NOT NULL,
  PRIMARY KEY (position)
);

INSERT INTO donor_stores (storeName, city, username, password)
VALUES ("Jewel-Osco", "Skokie", "jewelOsco", "JOsko");

INSERT INTO donor_stores (storeName, city, username, password)
VALUES ("Marianos", "Chicago", "MariChicago", "mario");

INSERT INTO donor_stores (storeName, city, username, password)
VALUES ("Trader Joe's", "Evanston", "TraderJose", "abierto");


CREATE TABLE food_banks (
  id INT NOT NULL AUTO_INCREMENT,
  bankName VARCHAR(100) NOT NULL,
  city VARCHAR(100) NULL,
  username VARCHAR(100) NULL,
  password VARCHAR(100) NULL,
  PRIMARY KEY (position)
);

CREATE TABLE reServed (
  id INT NOT NULL AUTO_INCREMENT,
  item VARCHAR(50) NOT NULL,
  quantity INT NOT NULL,
  expiration DATE NOT NULL,
  storeId INT NOT NULL,
  bankID INT NOT NULL,
  PRIMARY KEY (id)
);
