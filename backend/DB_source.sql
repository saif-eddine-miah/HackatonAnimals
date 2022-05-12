CREATE DATABASE  IF NOT EXISTS `breeder_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `breeder_db`;
-- MySQL dump 10.13  Distrib 8.0.29, for Linux (x86_64)
--
-- Host: localhost    Database: breeder_db
-- ------------------------------------------------------
-- Server version	8.0.29-0ubuntu0.20.04.3

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
-- Table structure for table `animal`
--

DROP TABLE IF EXISTS `animal`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `animal` (
  `animalId` int NOT NULL AUTO_INCREMENT,
  `animalName` varchar(255) NOT NULL DEFAULT 'default_user',
  `animalBio` varchar(255) DEFAULT NULL,
  `animalProfession` varchar(255) DEFAULT NULL,
  `animalAge` int NOT NULL DEFAULT '0',
  `animalIsreal` tinyint NOT NULL DEFAULT '1',
  `animalMatch` tinyint NOT NULL DEFAULT '0',
  `animalType` varchar(255) NOT NULL DEFAULT 'dog',
  PRIMARY KEY (`animalId`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `animal`
--

LOCK TABLES `animal` WRITE;
/*!40000 ALTER TABLE `animal` DISABLE KEYS */;
INSERT INTO `animal` VALUES (1,'Tom','Je suis doux comme du miel','coursier',5,0,0,'chat'),(2,'Rex','J’ai transformé mes rêves en vision et ma vision en réalité','Archéologue',3,0,0,'chien'),(3,'Petit Tonerre','Entrepreneur. Globetrotter. Orateur motivant','Agriculteur bio',8,0,0,'cheval'),(4,'Tom','Ne me faites pas perdre mon sang froid','Pecheur',2,0,0,'requin'),(5,'Titi','Je m’engage auprès de la NASA parce que je suis une étoile','Nettoyeur de réverbères',5,0,0,'oiseau'),(6,'Tom','Voyageur. Amoureux de livres. Obsédé par les tacos ','Couveur d\'oeuf',5,0,0,'pingouin'),(7,'Chantale','Mes exigences sont élevées… tout comme mes talons','Escort-girl',4,0,0,'lapin'),(8,'Edwige','Si l’amour est dans l’air, pourquoi l’air est-il si pollué ?','Veilleur de nuit',1,0,0,'hibou');
/*!40000 ALTER TABLE `animal` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-05-12 17:40:12
