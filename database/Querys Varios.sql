CREATE DATABASE `grupo_3_happyeshop` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci */;

CREATE TABLE `grupo_3_happyeshop`.`productos` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `descripcion` VARCHAR(45) NOT NULL,
  `imagen` VARCHAR(45) NOT NULL,
  `precio` DECIMAL(2) NOT NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `grupo_3_happyeshop`.`ventas` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `cantidad_total` INT NOT NULL,
  `fecha_compra` DATE NOT NULL,
  `precio_total` DECIMAL(11,2) NOT NULL,
  PRIMARY KEY (`id`));
   
CREATE TABLE `grupo_3_happyeshop`.`categorias` (
  `id` INT(11) NOT NULL AUTO_INCREMENT ,
  `nombre` VARCHAR(45) NOT NULL,
  `descripcion` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));
  
  CREATE TABLE `grupo_3_happyeshop`.`pais` (
  `id` INT(11) NOT NULL AUTO_INCREMENT ,
  `nombre` VARCHAR(45) NOT NULL,
  `descripcion` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));
  
  CREATE TABLE `grupo_3_happyeshop`.`usuarios` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `apellido` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `pais` VARCHAR(45) NOT NULL,
  `imagen` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));
  
  CREATE TABLE `grupo_3_happyeshop`.`detalle_venta` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `cantidad` INT NOT NULL,
  `precio_neto` DECIMAL(11,2) NOT NULL,
  `descuento` DECIMAL(11,2) NOT NULL,
  PRIMARY KEY (`id`));
  
ALTER TABLE `grupo_3_happyeshop`.`productos` 
ADD COLUMN `categoria_id` INT NULL AFTER `id`;

ALTER TABLE `grupo_3_happyeshop`.`ventas` 
ADD COLUMN `usuario_id` INT NULL AFTER `id`;

ALTER TABLE `grupo_3_happyeshop`.`detalle_venta` 
ADD COLUMN `venta_id` INT NULL AFTER `id`;

ALTER TABLE `grupo_3_happyeshop`.`detalle_venta` 
ADD COLUMN `producto_id` INT NULL AFTER `venta_id`;

-- Creación de las FKs

ALTER TABLE `grupo_3_happyeshop`.`productos`  
ADD FOREIGN KEY (categoria_id) REFERENCES categorias(id);

ALTER TABLE `grupo_3_happyeshop`.`ventas`  
ADD FOREIGN KEY (usuario_id) REFERENCES usuarios(id);

ALTER TABLE `grupo_3_happyeshop`.`detalle_venta`  
ADD FOREIGN KEY (venta_id) REFERENCES ventas(id);

ALTER TABLE `grupo_3_happyeshop`.`ventas`  
ADD FOREIGN KEY (usuario_id) REFERENCES usuarios(id);

ALTER TABLE `grupo_3_happyeshop`.`usuarios`  
ADD FOREIGN KEY (pais_id) REFERENCES pais(id);

-- Borrado de las FKs

ALTER TABLE `grupo_3_happyeshop`.`productos` DROP FOREIGN KEY productos_ibfk_1;
ALTER TABLE `grupo_3_happyeshop`.`ventas` DROP FOREIGN KEY ventas_ibfk_1;
ALTER TABLE `grupo_3_happyeshop`.`detalle_venta` DROP FOREIGN KEY detalle_venta_ibfk_1;
ALTER TABLE `grupo_3_happyeshop`.`detalle_venta` DROP FOREIGN KEY detalle_venta_ibfk_2;


-- Modificación sobre los ids de las tablas para que sean autoincrementales

ALTER TABLE `grupo_3_happyeshop`.`categorias` 
CHANGE COLUMN `id` `id` INT(11) NOT NULL AUTO_INCREMENT ;

ALTER TABLE `grupo_3_happyeshop`.`detalle_venta` 
CHANGE COLUMN `id` `id` INT(11) NOT NULL AUTO_INCREMENT ;

ALTER TABLE `grupo_3_happyeshop`.`productos` 
CHANGE COLUMN `id` `id` INT(11) NOT NULL AUTO_INCREMENT ;

ALTER TABLE `grupo_3_happyeshop`.`usuarios` 
CHANGE COLUMN `id` `id` INT(11) NOT NULL AUTO_INCREMENT ;

ALTER TABLE `grupo_3_happyeshop`.`ventas` 
CHANGE COLUMN `id` `id` INT(11) NOT NULL AUTO_INCREMENT ;


-- Descripción de producto pasa a 200 caracteres

ALTER TABLE `grupo_3_happyeshop`.`productos` 
CHANGE COLUMN `descripcion` `descripcion` VARCHAR(200) NOT NULL ;

-- Tabla Usuario pais pasa a ser FK

ALTER TABLE `grupo_3_happyeshop`.`usuarios` 
CHANGE COLUMN `pais` `pais_id` INT NOT NULL ;







  

  

