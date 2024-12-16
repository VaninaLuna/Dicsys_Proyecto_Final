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
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

/*Data for the table `categorias` */

insert  into `categorias`(`id`,`nombre`,`url_img`,`is_activo`) values (1,'Bebidas','https://www.coca-cola.com/content/dam/onexp/es/es/sustainability/in-our-products/acciones-para-contribuir-a-entornos-alimentarios-mas-saludables/our-way-forward.jpg',1),(2,'Pizzas','https://www.lavanguardia.com/files/og_thumbnail/files/fp/uploads/2021/03/30/6063031b90a87.r_d.1083-871-0.jpeg',1),(3,'Hamburguesas','https://cloudfront-us-east-1.images.arcpublishing.com/infobae/24P2OKC3RVEHRD3F2VKQ76XX7M.jpg',1),(4,'Tacos','https://media.istockphoto.com/id/1430849921/es/foto/orden-de-tacos-closeup.jpg?s=612x612&w=0&k=20&c=OUrSGX2P6UlyrD13G8QJ_mRQ_d5luWEm2JJRx8q1D4M=',1),(7,'Postres','https://www.unileverfoodsolutions.es/dam/global-ufs/mcos/SPAIN/calcmenu/recipes/ES-recipes/general/variedad-de-mini-postres-para-compartir/main-header.jpg',1);

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
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8 COLLATE=utf8_spanish_ci;

/*Data for the table `productos` */

insert  into `productos`(`id`,`nombre`,`fecha_vencimiento`,`id_categoria`,`stock`,`precio`,`url_img`,`is_activo`) values (1,'Coca Cola','2024-10-05',1,120,1500,'https://f2h.shop/media/catalog/product/cache/ab45d104292f1bb63d093e6be8310c97/i/m/imageedit_3_4516158279.png',1),(2,'Fanta','2025-02-04',1,120,1350,'https://acdn.mitiendanube.com/stores/001/144/141/products/whatsapp-image-2021-08-27-at-17-12-16-4ad73445aa7845684216301110875568-640-0.jpeg',1),(3,'Margarita','2024-06-16',2,50,875,'https://hoycocino.com.ar/wp-content/uploads/2023/08/pizza-margarita.jpg',1),(4,'Cuatro Quesos','2024-12-27',2,100,1200,'https://www.hola.com/horizon/landscape/e8bb41b65869-pizzacuatroquesos-adob-t.jpg',1),(5,'Hamburguesa Clásica','2024-12-21',3,230,450,'https://bambuleburger.com/wp-content/uploads/2024/04/HAMBURGUESA-5.5.jpg',1),(6,'Hamburguesa con Bacon y Queso','2024-12-31',3,68,420,'https://images.mrcook.app/recipe-image/019150ae-aeb0-7f69-b4f0-8a87dae14972',1),(7,'Taco de Carne Asada','2024-12-31',4,100,890,'https://images.mrcook.app/recipe-image/0191822b-9e2f-7516-bccc-6323a12eda51',1),(8,'Taco de Pollo','2024-12-28',4,23,1450,'https://assets.unileversolutions.com/recipes-v2/234572.jpg',1),(22,'Brownie con Helado','2025-01-04',7,10,15000,'https://images.mrcook.app/recipe-image/01903da4-f86c-7c27-bd05-22b2b88e8d38',NULL),(24,'Cheesecake','2024-12-21',7,12,2000,'https://www.infobae.com/new-resizer/QOvWExSdTGV_-rreEP3F9U_hRpw=/arc-anglerfish-arc2-prod-infobae/public/4CJP46SGXVGXLGGMTOY4K6YPNQ.jpg',NULL);

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
