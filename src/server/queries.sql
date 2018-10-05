/*////////////////////////////////////////////////////////
//
// SQL QUERIES
//
////////////////////////////////////////////////////////*/
/*CREATING ORDERS TABLE*/
CREATE TABLE orders (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  description VARCHAR(255),
  od DATE,
  dd DATE,
  total INT,
  status INT
);

/*INSERTING ORDER INTO ORDERS TABLE*/
INSERT INTO orders (name, description, od, dd, total, status)
VALUES ("SQL Query", "Lorem ipsum...", "2018-10-05", "2018-10-09", 25.99, 0);

/*UPDATING ORDER STATUS IN ORDERS TABLE*/
UPDATE ORDERS
SET status = 2
WHERE id = 4;

/*////////////////////////////////////////////////////////
//
// MONGODB QUERIES
//
////////////////////////////////////////////////////////*/

db.orders.update({status: 2}, {$set{status: 3}})
