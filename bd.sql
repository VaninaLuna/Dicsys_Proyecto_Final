/*
SQLyog Ultimate v9.02 
MySQL - 5.5.5-10.4.28-MariaDB : Database - dicsys
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`dicsys` /*!40100 DEFAULT CHARACTER SET utf8 COLLATE utf8_spanish_ci */;

USE `dicsys`;

/*Table structure for table `categorias` */

DROP TABLE IF EXISTS `categorias`;

CREATE TABLE `categorias` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(150) NOT NULL,
  `url_img` varchar(250) DEFAULT NULL,
  `is_activo` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

/*Data for the table `categorias` */

insert  into `categorias`(`id`,`nombre`,`url_img`,`is_activo`) values (1,'Bebidas','https://www.coca-cola.com/content/dam/onexp/es/es/sustainability/in-our-products/acciones-para-contribuir-a-entornos-alimentarios-mas-saludables/our-way-forward.jpg',1),(2,'Lacteos','https://images.ecestaticos.com/5R1YUlQPhHlncdmKDsmSByzzAD4=/42x19:661x483/1200x899/filters:fill(white):format(jpg)/f.elconfidencial.com%2Foriginal%2F773%2F094%2F19d%2F77309419d4585c2d4a3590623d2e9170.jpg',1),(3,'Snacks','https://s1.ppllstatics.com/diariosur/www/multimedia/202302/01/media/cortadas/snacks-salados-k0cC-U190480569220eU-1248x770@Diario%20Sur.jpg',1),(4,'Higiene Personal','https://lexcargo.com/ve/wp-content/uploads/2017/05/Lexcargo_combo_higiene_pareja.jpg',1);

/*Table structure for table `productos` */

DROP TABLE IF EXISTS `productos`;

CREATE TABLE `productos` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `nombre` varchar(150) DEFAULT NULL,
  `fecha_vencimiento` date DEFAULT NULL,
  `id_categoria` int(11) DEFAULT NULL,
  `stock` int(11) DEFAULT NULL,
  `precio` double DEFAULT NULL,
  `url_img` varchar(250) DEFAULT NULL,
  `is_activo` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_productos` (`id_categoria`),
  CONSTRAINT `FK_productos` FOREIGN KEY (`id_categoria`) REFERENCES `categorias` (`id`) ON DELETE CASCADE,
  CONSTRAINT `categorias` FOREIGN KEY (`id_categoria`) REFERENCES `categorias` (`id`) ON DELETE CASCADE,
  CONSTRAINT `fk_categoria` FOREIGN KEY (`id_categoria`) REFERENCES `categorias` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=22 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

/*Data for the table `productos` */

insert  into `productos`(`id`,`nombre`,`fecha_vencimiento`,`id_categoria`,`stock`,`precio`,`url_img`,`is_activo`) values (1,'Coca Cola','2024-10-05',1,120,1500,'https://f2h.shop/media/catalog/product/cache/ab45d104292f1bb63d093e6be8310c97/i/m/imageedit_3_4516158279.png',1),(2,'Fanta','2025-02-04',1,120,1350,'https://acdn.mitiendanube.com/stores/001/144/141/products/whatsapp-image-2021-08-27-at-17-12-16-4ad73445aa7845684216301110875568-640-0.jpeg',1),(3,'Leche Descremada','2024-06-16',2,50,875,'https://f2h.shop/media/catalog/product/cache/ab45d104292f1bb63d093e6be8310c97/i/m/imageedit_1_8002395635.png',1),(4,'Yogurt de Frutilla',NULL,2,100,1200,'https://laprovedeampip.com.ar/wp-content/uploads/2023/11/Yogur-LS-frutilla.png',1),(5,'Papas Fritas',NULL,3,230,450,'https://tn.com.ar/resizer/v2/venden-el-paquete-de-400-gramos-de-papas-fritas-a-1-cuando-y-donde-comprar-foto-adobestock-OB7423HH5RA2LIF4FCH774RTYA.png?auth=9a1a823c0fa67c44981b5462df812522123834693b5d57a864dcbde69af2aa40&width=1440',1),(6,'Conitos 3D',NULL,3,68,420,'https://almacenfamily.com/productos/megatube-3d-Queso.png',1),(7,'Antitraspirante Dove',NULL,4,100,890,'https://farmacityar.vtexassets.com/arquivos/ids/239270/161165_antitranspirante-femenino-aerosol-original-x-150ml__imagen-1.jpg?v=638150009167370000',1),(8,'Pasta de Dientes Colgate',NULL,4,23,1450,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSwNeudQHsSwCfB24uJkt4O7BUhD7c3WXfCDg&s',1),(21,'prueba mostrar ','2024-12-27',2,7850,520,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHDOksrwN7pDuGkNIgqdqVU4okmutHU4P9DA&s',1);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
