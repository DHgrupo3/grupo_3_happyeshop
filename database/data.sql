-- Script de Carga de Datos Grupo 3 Happy eShop

INSERT INTO categorias (nombre, descripcion)
VALUES 
('En oferta', 'En oferta'),
('Últimos agregados', 'Últimos agregados');

select * from categorias;

INSERT INTO productos (categoria_id, codigo, nombre, descripcion, imagen, precio, stock)
VALUES 
(1, 'ABC1', 'Espuma Fenolica', 'Espuma fenólica para multisemillas o semillas pelletizadas, con perforación',  'Fenolica.jpg', 1500, 10),
(1, 'ABC2', 'Medidor de PH ACME', 'Medidor portátil digital de PH de alta precisión',  'Medidor_PH.jpg', 6700, 10),
(2, 'ABC3', 'Reductor de PH', 'Reductor de PH para regular el grado de acidez',  'Reductor_PH.jpg', 2400, 10),
(2, 'ABC4', 'Kit hidropónico', 'N°2 Sistema de cultivo NFT de 15 macetas, ideal para balcones',  'Sales_Minerales.jpg', 7200, 10),
(1, 'ABC5', 'Lechuga Mantecosa (Semillas)', 'Semillas de Primera',  'producto1673386596964.jpeg', 2400, 10),
(1, 'ABC6', 'Lechuga eSPECIAL (Semillas)', 'Semillas de Primera',  'producto1673394608214.jpeg', 2400, 10);

select * from productos;

INSERT INTO pais (nombre, descripcion)
VALUES 
('Argentina', 'Argentina'),
('Chile', 'Chile'),
('Bolivia', 'Bolivia'),
('Paraguay', 'Paraguay'),
('Peru', 'Peru'),
('Paraguay', 'Paraguay'),
('Venezuela', 'Venezuela'),
('Uruguay', 'Uruguay'),
('Brasil', 'Brasil');

Select * from pais;

INSERT INTO usuarios (nombre, apellido, email, password, pais_id, imagen)
VALUES 
("Carlos","Gimenez","Carlosg@gmail.com","Callefalsa123",1,"avatar.png"),
("Lucia","Lima","LuciaL@yahoo.com.ar","9999",2,"lisa.jpg"),
("Diego","Toledo","Diegot@outlook.com","Diego10",3,"carpincho.jpg"),
("Nicolás","Acosta","NicolasA@outlook.com","1234",4,"Iguana.jpg"),
("Matias","Lafuente","MatiasL@outlook.com","1234",5,"Iguana.jpg"),
("Ernesto","Cadabeira","ECadabeira@outlook.com","1234",6,"Iguana.jpg"),
("Mateo","Burger","MateoB@gmail.com","1234",7,"user1675633865925.jpg"),
("Sofia","Chavez","SofiaC@gmail.com","1234",8,"user1675715191461.JPG"),
("Roberto","Callegari","RobertoC@gmail.com","1234",9,"user1675989176259.jpg");

Select * from usuarios;

INSERT INTO ventas (usuario_id, cantidad_total, fecha_compra, precio_total)
VALUES 
(1,1,'2022-12-25',6500),
(2,2,'2022-12-25',16500),
(3,1,'2023-01-05',4500),
(4,3,'2023-01-11',2500),
(5,2,'2023-01-15',2500),
(6,3,'2023-01-21',6500),
(7,1,'2023-02-02',9500),
(8,4,'2023-02-12',3500),
(9,2,'2023-02-14',7500);

Select * from ventas;

INSERT INTO detalle_venta (venta_id, producto_id, cantidad, precio_neto, descuento)
VALUES 
(1,7,4,6500,5),
(2,7,1,6500,15),
(2,8,1,10000,5),
(4,9,4,1000,20),
(4,10,4,1000,5),
(4,11,4,500,0),
(5,10,1,1250,5),
(5,8,1,1250,10),
(6,9,4,1250,0),
(6,12,4,1250,0),
(6,11,4,4000,5),
(7,7,4,9500,15),
(8,9,4,1250,0),
(8,12,4,1250,0),
(8,11,4,500,0),
(8,8,1,500,15),
(9,10,4,1500,5),
(9,11,4,6000,0),
(1,12,4,4500,10);

select * from detalle_venta

