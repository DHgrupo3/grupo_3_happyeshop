-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 03-03-2023 a las 03:50:22
-- Versión del servidor: 10.4.27-MariaDB
-- Versión de PHP: 8.1.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `grupo_3_happyeshop`
--
CREATE DATABASE IF NOT EXISTS `grupo_3_happyeshop` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
USE `grupo_3_happyeshop`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `categorias`
--

CREATE TABLE `categorias` (
  `id` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `descripcion` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `categorias`
--

INSERT INTO `categorias` (`id`, `nombre`, `descripcion`) VALUES
(1, 'En oferta', 'En oferta'),
(2, 'Últimos agregados', 'Últimos agregados');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detalle_venta`
--

CREATE TABLE `detalle_venta` (
  `id` int(11) NOT NULL,
  `venta_id` int(11) DEFAULT NULL,
  `producto_id` int(11) DEFAULT NULL,
  `cantidad` int(11) NOT NULL,
  `precio_neto` decimal(11,2) NOT NULL,
  `descuento` decimal(11,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `detalle_venta`
--

INSERT INTO `detalle_venta` (`id`, `venta_id`, `producto_id`, `cantidad`, `precio_neto`, `descuento`) VALUES
(1, 1, 7, 4, '6500.00', '5.00'),
(2, 2, 7, 1, '6500.00', '15.00'),
(3, 2, 8, 1, '10000.00', '5.00'),
(4, 4, 9, 4, '1000.00', '20.00'),
(5, 4, 10, 4, '1000.00', '5.00'),
(6, 4, 11, 4, '500.00', '0.00'),
(7, 5, 10, 1, '1250.00', '5.00'),
(8, 5, 8, 1, '1250.00', '10.00'),
(9, 6, 9, 4, '1250.00', '0.00'),
(10, 6, 12, 4, '1250.00', '0.00'),
(11, 6, 11, 4, '4000.00', '5.00'),
(12, 7, 7, 4, '9500.00', '15.00'),
(13, 8, 9, 4, '1250.00', '0.00'),
(14, 8, 12, 4, '1250.00', '0.00'),
(15, 8, 11, 4, '500.00', '0.00'),
(16, 8, 8, 1, '500.00', '15.00'),
(17, 9, 10, 4, '1500.00', '5.00'),
(18, 9, 11, 4, '6000.00', '0.00'),
(19, 1, 12, 4, '4500.00', '10.00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estados`
--

CREATE TABLE `estados` (
  `id` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `descripcion` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `estados`
--

INSERT INTO `estados` (`id`, `nombre`, `descripcion`) VALUES
(1, 'Activo', 'Productos Activos en Happy e-Shop'),
(2, 'Discontinuo', 'Productos no Comercializados');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `estadousuario`
--

CREATE TABLE `estadousuario` (
  `id` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `descripcion` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `estadousuario`
--

INSERT INTO `estadousuario` (`id`, `nombre`, `descripcion`) VALUES
(1, 'Activo', 'Usuarios Activos en Happy e-Shop'),
(2, 'Baja', 'Usuaurios dados de Baja'),
(3, 'Admin', 'Usuario Administrador');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `pais`
--

CREATE TABLE `pais` (
  `id` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `descripcion` varchar(45) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `pais`
--

INSERT INTO `pais` (`id`, `nombre`, `descripcion`) VALUES
(1, 'Argentina', 'Argentina'),
(2, 'Chile', 'Chile'),
(3, 'Bolivia', 'Bolivia'),
(4, 'Paraguay', 'Paraguay'),
(5, 'Peru', 'Peru'),
(6, 'Paraguay', 'Paraguay'),
(7, 'Venezuela', 'Venezuela'),
(8, 'Uruguay', 'Uruguay'),
(9, 'Brasil', 'Brasil');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--

CREATE TABLE `productos` (
  `id` int(11) NOT NULL,
  `categoria_id` int(11) NOT NULL,
  `estado_id` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `descripcion` varchar(200) NOT NULL,
  `imagen` varchar(45) NOT NULL,
  `precio` decimal(11,2) NOT NULL,
  `stock` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `categoria_id`, `estado_id`, `nombre`, `descripcion`, `imagen`, `precio`, `stock`) VALUES
(7, 1, 2, 'Caja Espuma Fenolica', 'Green Up es un sustrato estéril hecho de espuma a base de resina fenólica, libre de hongos y bacterias y utilizado principalmente para la producción de plantas de alta calidad.', 'producto1677166773174.jpg', '10860.00', 10),
(8, 2, 1, 'Medidor de PH ACME', 'Medidor portátil digital de PH de alta precisión', 'producto1677202405575.jpg', '6700.00', 10),
(9, 2, 1, 'Reductor de PH', 'Reductor de PH para regular el grado de acidez', 'Reductor_PH.jpg', '2400.00', 10),
(10, 2, 1, 'Kit hidropónico', 'Kit Hidropónico N°9 – Sistema de cultivo NFT de 32 macetas.\r\n\r\nCaracterísticas:\r\nTamaño: 1.2 M x 1.2 M x 1 M (Alto x Ancho x Largo)\r\nTipo de plantas: Plantas bajas/medianas como lechuga, frutilla, tom', 'producto1677038049727.jpg', '35938.00', 10),
(11, 1, 1, 'Lechuga Mantecosa (Semillas)', 'Semillas de Primera', 'producto1673386596964.jpeg', '2400.00', 10),
(12, 1, 2, 'Lechuga eSPECIAL (Semillas)', 'Semillas de Primera', 'producto1673394608214.jpeg', '2400.00', 10),
(13, 1, 1, 'Maceta Hidroponia Dwc Cultivo Para Balde 10l ', 'Maceta Hidropónica N°8 Inyectada De diseño propio y fabricación nacional incluye filtro de Luz. ', 'producto1677039951384.jpg', '998.00', 10),
(14, 1, 1, 'Kit Manguera Riego Microaspersion Spray Mist ', 'Manguera microtubo para sistemas de riego por goteo y/o microaspersión.\r\nIdeal para el riego de plantas en macetas, camas de flores, huerta etc. Cuidá tus cultivos entregándoles un flujo de agua estab', 'producto1677039927762.jpg', '8990.00', 10),
(15, 2, 1, 'Grow Pot 20lit Tacho Balde Con Maceta', 'El Grow Pot es un sencillo y silencioso sistema apto para plantas madre y plantas en fase de floración. Este kit de cultivo te permitirá obtener resultados asombrosos. Para un uso correcto de este sis', 'producto1677039916357.jpg', '9432.00', 10),
(16, 2, 1, 'Sistema Hidropónico - 96 Macetas - Kit N°4', 'Sistema de armado fácil para cultivo hidropónico de 96 macetas. El kit de hidroponía trae todo lo esencial para instalar, de forma rápida e intuitiva, un sistema completo de cultivo hidropónico. Siste', 'producto1677039904953.jpg', '50071.00', 10),
(17, 1, 1, 'Aeroclonador Maquina 48 Esquejes Clonador Ind', 'El Aeroclonador Kraken tiene campana cobertora de acrilico Cristal 100% transparente, resistente al calor. Slots porta esquejes de goma negra Super Reforzada.\r\nMáxima cantidad de aspersores por cm2. B', 'producto1677039811324.jpg', '31400.00', 10),
(18, 2, 2, 'Kit Hidroponia Completo Balde 20l Indoor Duo ', 'La Deep Water Culture es un estilo de cultivo hidropónico que no utiliza un sustrato de cultivo. En un sistema DWC, las plantas están suspendidas en macetas, con sus raíces estirándose hacia abajo y s', 'producto1677202778512.jpg', '11500.00', 0),
(19, 2, 1, 'Kit Hidroponia Completo Balde 40l Indoor Duo ', 'La Deep Water Culture es un estilo de cultivo hidropónico que no utiliza un sustrato de cultivo. En un sistema DWC, las plantas están suspendidas en macetas, con sus raíces estirándose hacia abajo y s', 'producto1677768257737.jpg', '16000.00', 0),
(20, 2, 1, 'Sistema Hidropónico Con Bomba + Tacho + Acces', 'KIT N°2 - Sistema de armado fácil para cultivo hidropónico.\r\nEl kit de hidroponía trae todo lo esencial para instalar, de forma rápida e intuitiva, un sistema completo de cultivo hidropónico.\r\nSistema', 'producto1677768465789.jpg', '29434.00', 0),
(21, 2, 2, 'Hidroponia Dwc 20 litros Kit Inicial - La Fin', 'Maceta Hidropónica de 20 Litros.\r\n\r\nAnimate a explorar esta forma de cultivo, y sorprendete con los resultados.\r\n\r\nEl Kit Inicial económico, incluye:\r\n- Balde contenedor de 10lts\r\n- Maceta rejilla\r\n- ', 'producto1677805613784.jpg', '4700.00', 0),
(22, 1, 1, 'Hidro Final', 'Hidro Final descripción 20 caracteres', 'producto1677805699470.jpg', '12450.00', 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

CREATE TABLE `usuarios` (
  `id` int(11) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `apellido` varchar(45) NOT NULL,
  `email` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `pais_id` int(11) NOT NULL,
  `imagen` varchar(45) NOT NULL,
  `estado_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `apellido`, `email`, `password`, `pais_id`, `imagen`, `estado_id`) VALUES
(1, 'Carlos', 'Gimenez', 'Carlosg@gmail.com', '$10$RmBRSoj.fQ7UjJknrxhcw.jfK.BCGc8YrTda645rloIhX/ixNmj/6', 1, 'user1677090225885.jfif', 1),
(2, 'Lucia', 'Lima', 'LuciaL@yahoo.com.ar', '$10$RmBRSoj.fQ7UjJknrxhcw.jfK.BCGc8YrTda645rloIhX/ixNmj/6', 2, 'lisa.jpg', 1),
(3, 'Diego', 'Toledo', 'Diegot@outlook.com', '$10$RmBRSoj.fQ7UjJknrxhcw.jfK.BCGc8YrTda645rloIhX/ixNmj/6', 3, 'carpincho.jpg', 1),
(4, 'Nicolás', 'Acosta', 'NicolasA@outlook.com', '$10$RmBRSoj.fQ7UjJknrxhcw.jfK.BCGc8YrTda645rloIhX/ixNmj/6', 4, 'user1677090294047.jfif', 1),
(5, 'Matias', 'Lafuente', 'MatiasL@outlook.com', '$10$RmBRSoj.fQ7UjJknrxhcw.jfK.BCGc8YrTda645rloIhX/ixNmj/6', 5, 'user1677090322475.png', 1),
(6, 'Ernesto', 'Cadabeira', 'ECadabeira@outlook.com', '$10$RmBRSoj.fQ7UjJknrxhcw.jfK.BCGc8YrTda645rloIhX/ixNmj/6', 6, 'user1677090424462.jpg', 1),
(7, 'Mateo', 'Burger', 'MateoB@gmail.com', '$10$RmBRSoj.fQ7UjJknrxhcw.jfK.BCGc8YrTda645rloIhX/ixNmj/6', 7, 'user1677090538150.jpg', 1),
(8, 'Sofia', 'Chavez', 'SofiaC@gmail.com', '$10$RmBRSoj.fQ7UjJknrxhcw.jfK.BCGc8YrTda645rloIhX/ixNmj/6', 8, 'user1677090663048.jpg', 1),
(9, 'Roberto', 'Callegari', 'RobertoC@gmail.com', '$10$RmBRSoj.fQ7UjJknrxhcw.jfK.BCGc8YrTda645rloIhX/ixNmj/6', 9, 'user1677090720175.jfif', 1),
(13, 'Max', 'Verstappen', 'mv@mv.com', '$2a$10$RmBRSoj.fQ7UjJknrxhcw.jfK.BCGc8YrTda645rloIhX/ixNmj/6', 5, 'user1677206156121.jpg', 1),
(14, 'Armando', 'Villa', 'av@av.com', '$2a$10$RmBRSoj.fQ7UjJknrxhcw.jfK.BCGc8YrTda645rloIhX/ixNmj/6', 2, 'user1677094609358.jpg', 1),
(18, 'Regino', 'Cavia', 'rc@rc.com', '$2a$10$RmBRSoj.fQ7UjJknrxhcw.jfK.BCGc8YrTda645rloIhX/ixNmj/6', 1, 'user1677642909441.jpg', 3),
(19, 'Regio', 'Calabria', 'medusa@rc.com', '$2a$10$RmBRSoj.fQ7UjJknrxhcw.jfK.BCGc8YrTda645rloIhX/ixNmj/6', 1, 'user1677534110527.jpg', 1),
(20, 'Adrian', 'Cavia', 'ac@ac.com', '$2a$10$RmBRSoj.fQ7UjJknrxhcw.jfK.BCGc8YrTda645rloIhX/ixNmj/6', 2, 'user1677768584402.jpg', 2),
(21, 'Javier', 'Capusotto', 'jc@jc.com', '$2a$10$3zaz3yrXPqxYvPTMKXIMJ.s200FzkXdiAisO6FdcRmCcDTk5VtZzW', 6, 'user1677696792498.jpg', 1),
(22, 'Maxi ', 'Rojas', 'mr@mr.com', '$2a$10$A3JUhdc4xQLrAz7abmwy3uXzwmR496dm/CWHonKMaM0xiheXDaQwK', 1, 'user1677805781110.jpg', 3),
(24, 'María', 'White', 'mw@mw.com', '$2a$10$5y7EV4YQoDfnuw8JsVTs9euvEKwuHeHso8GtOoIVd8fGfts7Xl7Zm', 1, 'user1677772904241.jpg', 1),
(25, 'Julieta', 'Mcloo', 'jm@jm.com', '$2a$10$HEpWFG09rVMK4bisA97mnOi8vLlyE/Gk5S0yM1iL/s0VCQEfIJ512', 1, 'user1677773067851.jpg', 1),
(26, 'Rodri', 'Vela', 'rv@rv.com', '$2a$10$7LXWVKxVoWVK/9K/k8.UnOtfeLpeA7MnCqvJezk4DK/JTvtXIN8Le', 1, 'user1677805417205.jpg', 1);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `ventas`
--

CREATE TABLE `ventas` (
  `id` int(11) NOT NULL,
  `usuario_id` int(11) DEFAULT NULL,
  `cantidad_total` int(11) NOT NULL,
  `fecha_compra` date NOT NULL,
  `precio_total` decimal(11,2) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `ventas`
--

INSERT INTO `ventas` (`id`, `usuario_id`, `cantidad_total`, `fecha_compra`, `precio_total`) VALUES
(1, 1, 1, '2022-12-25', '6500.00'),
(2, 2, 2, '2022-12-25', '16500.00'),
(4, 4, 3, '2023-01-11', '2500.00'),
(5, 5, 2, '2023-01-15', '2500.00'),
(6, 6, 3, '2023-01-21', '6500.00'),
(7, 7, 1, '2023-02-02', '9500.00'),
(8, 8, 4, '2023-02-12', '3500.00'),
(9, 9, 2, '2023-02-14', '7500.00'),
(10, 3, 1, '2023-01-05', '4500.00');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `categorias`
--
ALTER TABLE `categorias`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `detalle_venta`
--
ALTER TABLE `detalle_venta`
  ADD PRIMARY KEY (`id`),
  ADD KEY `venta_id` (`venta_id`),
  ADD KEY `detalle_venta_ibfk_2` (`producto_id`);

--
-- Indices de la tabla `estados`
--
ALTER TABLE `estados`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `estadousuario`
--
ALTER TABLE `estadousuario`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `pais`
--
ALTER TABLE `pais`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `estado_fk` (`estado_id`),
  ADD KEY `categoria_fk` (`categoria_id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `pais_id` (`pais_id`),
  ADD KEY `estado` (`estado_id`);

--
-- Indices de la tabla `ventas`
--
ALTER TABLE `ventas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `usuario_id` (`usuario_id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `categorias`
--
ALTER TABLE `categorias`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `detalle_venta`
--
ALTER TABLE `detalle_venta`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=20;

--
-- AUTO_INCREMENT de la tabla `estados`
--
ALTER TABLE `estados`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT de la tabla `estadousuario`
--
ALTER TABLE `estadousuario`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `pais`
--
ALTER TABLE `pais`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;

--
-- AUTO_INCREMENT de la tabla `ventas`
--
ALTER TABLE `ventas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `detalle_venta`
--
ALTER TABLE `detalle_venta`
  ADD CONSTRAINT `detalle_venta_ibfk_1` FOREIGN KEY (`venta_id`) REFERENCES `ventas` (`id`),
  ADD CONSTRAINT `detalle_venta_ibfk_2` FOREIGN KEY (`producto_id`) REFERENCES `productos` (`id`);

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `categoria_fk` FOREIGN KEY (`categoria_id`) REFERENCES `categorias` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `estado_fk` FOREIGN KEY (`estado_id`) REFERENCES `estados` (`id`);

--
-- Filtros para la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD CONSTRAINT `estado` FOREIGN KEY (`estado_id`) REFERENCES `estadousuario` (`id`),
  ADD CONSTRAINT `usuarios_ibfk_1` FOREIGN KEY (`pais_id`) REFERENCES `pais` (`id`);

--
-- Filtros para la tabla `ventas`
--
ALTER TABLE `ventas`
  ADD CONSTRAINT `ventas_ibfk_1` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
