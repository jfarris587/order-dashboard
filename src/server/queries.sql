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

db.orders.insertMany([{name:'Ciara Ball',description:'Sed molestie. Sed id risus quis diam luctus lobortis. Class aptent taciti sociosqu',od:'24-08-19',dd:'17-04-18',total:'106.18',status:1},{name:'Zachary Gamble',description:'orci tincidunt adipiscing. Mauris molestie pharetra nibh. Aliquam ornare, libero at auctor ullamcorper, nisl arcu iaculis enim, sit amet ornare lectus justo',od:'17-05-19',dd:'05-07-19',total:'72.64',status:0},{name:'Jamalia Mendoza',description:'iaculis quis, pede. Praesent eu dui. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Aenean eget magna. Suspendisse',od:'02-08-19',dd:'19-07-18',total:'124.00',status:0},{name:'Remedios Russo',description:'egstas. liquam fringilla cursus purus. Nullam scelerisque neque sed sem egstas bandit. Nam nulla magna, malesuada vel, convallis in,',od:'16-04-18',dd:'08-02-18',total:'43.72',status:0},{name:'Galvin Ortega',description:'lectus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec dignissim magna a tortor. Nunc commodo auctor velit.',od:'11-05-19',dd:'01-06-19',total:'116.79',status:0},{name:'Yoshi Page',description:'lorem, luctus ut, pellentesque eget, dictum placerat, augue. Sed molestie. Sed id risus quis',od:'31-03-19',dd:'06-04-18',total:'105.10',status:0},{name:'Caesar Ryan',description:'Phasellus at augue id ante dictum cursus. Nunc mauris elit, dictum eu, eleifend nec, malesuada ut,',od:'14-05-18',dd:'24-08-19',total:'60.23',status:1},{name:'Oliver Noel',description:'risus. Donec egstas. uis ac arcu. Nunc mauris. Morbi non sapien molestie orci tincidunt adipiscing. Mauris',od:'12-09-19',dd:'02-06-19',total:'88.96',status:2},{name:'Nasim Oneil',description:'Duis volutpat nunc sit amet metus. Aliquam erat volutpat. Nulla facilisis. Suspendisse commodo tincidunt nibh.',od:'12-08-19',dd:'24-01-19',total:'99.37',status:0},{name:'Ryder Camacho',description:'mi. Duis risus odio, auctor vitae, aliquet nec, imperdiet nec, leo. Morbi neque tellus, imperdiet non, vestibulum nec,',od:'01-12-17',dd:'10-03-19',total:'55.53',status:0},{name:'Vivien Burt',description:'sem. Nulla interdum. Curabitur dictum. Phasellus in felis. Nulla tempor augue ac ipsum. Phasellus vitae mauris sit amet lorem',od:'11-09-18',dd:'21-09-19',total:'87.78',status:2},{name:'Lynn Rodriguez',description:'ut, molestie in, tempus eu, ligula. Aenean euismod mauris eu elit. Nulla facilisi. Sed neque. Sed eget',od:'22-10-17',dd:'29-11-18',total:'126.70',status:0}])
