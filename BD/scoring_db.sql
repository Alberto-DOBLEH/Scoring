CREATE DATABASE  IF NOT EXISTS `scoring_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `scoring_db`;
-- MySQL dump 10.13  Distrib 8.0.43, for Win64 (x86_64)
--
-- Host: localhost    Database: scoring_db
-- ------------------------------------------------------
-- Server version	9.4.0

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `alternativa`
--

DROP TABLE IF EXISTS `alternativa`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `alternativa` (
  `id_alternativa` int NOT NULL,
  `id_proyecto` int NOT NULL,
  `nombre` varchar(45) NOT NULL,
  PRIMARY KEY (`id_alternativa`),
  KEY `fk_alternativa_proyecto_idx` (`id_proyecto`),
  CONSTRAINT `fk_alternativa_proyecto` FOREIGN KEY (`id_proyecto`) REFERENCES `proyecto` (`id_proyecto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `criterio`
--

DROP TABLE IF EXISTS `criterio`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `criterio` (
  `id_criterio` int NOT NULL,
  `id_proyecto` int NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `ponderacion` varchar(45) NOT NULL,
  PRIMARY KEY (`id_criterio`),
  KEY `fk_criterio_proyecto_idx` (`id_proyecto`),
  CONSTRAINT `fk_criterio_proyecto` FOREIGN KEY (`id_proyecto`) REFERENCES `proyecto` (`id_proyecto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `proyecto`
--

DROP TABLE IF EXISTS `proyecto`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `proyecto` (
  `id_proyecto` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(100) NOT NULL,
  `descripcion` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`id_proyecto`),
  UNIQUE KEY `nombre_UNIQUE` (`nombre`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Table structure for table `tabla_satisfaccion`
--

DROP TABLE IF EXISTS `tabla_satisfaccion`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `tabla_satisfaccion` (
  `id_proyecto` int NOT NULL,
  `id_criterio` int NOT NULL,
  `id_alternativa` int NOT NULL,
  `satisfaccion` int NOT NULL,
  PRIMARY KEY (`id_proyecto`,`id_criterio`,`id_alternativa`),
  KEY `fk_satisfaccion_criterio_idx` (`id_criterio`),
  KEY `fk_satisfaccion_alternitva_idx` (`id_alternativa`),
  CONSTRAINT `fk_satisfaccion_alternitva` FOREIGN KEY (`id_alternativa`) REFERENCES `alternativa` (`id_alternativa`),
  CONSTRAINT `fk_satisfaccion_criterio` FOREIGN KEY (`id_criterio`) REFERENCES `criterio` (`id_criterio`),
  CONSTRAINT `fk_satisfaccion_proyecto` FOREIGN KEY (`id_proyecto`) REFERENCES `proyecto` (`id_proyecto`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping events for database 'scoring_db'
--

--
-- Dumping routines for database 'scoring_db'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-09-09 22:08:38
