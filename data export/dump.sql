-- MySQL dump 10.13  Distrib 8.0.40, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: next_step
-- ------------------------------------------------------
-- Server version	8.0.40

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
-- Table structure for table `companies`
--

DROP TABLE IF EXISTS `companies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `companies` (
  `company_id` bigint NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `description` text,
  `count_employees` varchar(255) DEFAULT NULL,
  `zip_code` varchar(20) DEFAULT NULL,
  `company_url` text,
  `logo_url` text,
  `is_deleted` tinyint(1) DEFAULT '0',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `founded` varchar(255) DEFAULT NULL,
  `state` varchar(100) DEFAULT NULL,
  `is_featured` tinyint(1) DEFAULT '0',
  `coordinates` varchar(45) DEFAULT NULL,
  `location_id` bigint DEFAULT NULL,
  PRIMARY KEY (`company_id`),
  KEY `companies_ibfk_1_idx` (`location_id`),
  CONSTRAINT `companies_ibfk_1` FOREIGN KEY (`location_id`) REFERENCES `location` (`location_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `companies`
--

LOCK TABLES `companies` WRITE;
/*!40000 ALTER TABLE `companies` DISABLE KEYS */;
INSERT INTO `companies` VALUES (1,'Google','Tech giant specializing in Internet services','1000-2000',NULL,'https://google.com','https://logo.clearbit.com/google.com',0,'2025-02-28 21:41:32','2025-03-13 03:10:28','2014',NULL,1,NULL,1),(2,'Microsoft','Leading software and cloud services company','200',NULL,'https://microsoft.com','https://logo.clearbit.com/microsoft.com',0,'2025-02-28 21:41:32','2025-03-13 03:10:28','2014',NULL,1,NULL,2),(3,'Samsung','Global electronics manufacturer','200',NULL,'https://samsung.com','https://logo.clearbit.com/samsung.com',0,'2025-02-28 21:41:32','2025-03-13 03:10:28','2014',NULL,1,NULL,3),(4,'Toyota','Automobile manufacturing corporation','200',NULL,'https://toyota.com','https://logo.clearbit.com/toyota.com',0,'2025-02-28 21:41:32','2025-03-13 03:10:28','2013',NULL,1,NULL,4),(5,'Novartis','Multinational pharmaceutical company','200',NULL,'https://novartis.com','https://logo.clearbit.com/novartis.com',0,'2025-02-28 21:41:32','2025-03-13 03:10:28','2014',NULL,1,NULL,5),(6,'Amazon','E-commerce and cloud computing company','200',NULL,'https://amazon.com','https://logo.clearbit.com/amazon.com',0,'2025-02-28 21:41:32','2025-03-13 03:10:28','2013',NULL,1,NULL,6),(7,'Siemens','Industrial manufacturing conglomerate','200',NULL,'https://siemens.com','https://logo.clearbit.com/siemens.com',0,'2025-02-28 21:41:32','2025-03-13 03:10:28','2013',NULL,1,NULL,1),(8,'Unilever','Consumer goods multinational','200',NULL,'https://unilever.com','https://logo.clearbit.com/unilever.com',0,'2025-02-28 21:41:32','2025-03-13 03:10:28','2013',NULL,1,NULL,1),(9,'Tesla','Electric vehicle and clean energy company','200',NULL,'https://tesla.com','https://logo.clearbit.com/tesla.com',0,'2025-02-28 21:41:32','2025-03-13 03:10:28','2013',NULL,1,NULL,2),(10,'Sony','Electronics and entertainment conglomerate','200',NULL,'https://sony.com','https://logo.clearbit.com/sony.com',0,'2025-02-28 21:41:32','2025-03-13 03:10:28','2013',NULL,1,NULL,2);
/*!40000 ALTER TABLE `companies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `company_industries`
--

DROP TABLE IF EXISTS `company_industries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `company_industries` (
  `company_id` bigint NOT NULL,
  `industry_id` bigint NOT NULL,
  PRIMARY KEY (`company_id`,`industry_id`),
  KEY `industry_id` (`industry_id`),
  CONSTRAINT `company_industries_ibfk_1` FOREIGN KEY (`company_id`) REFERENCES `companies` (`company_id`) ON DELETE CASCADE,
  CONSTRAINT `company_industries_ibfk_2` FOREIGN KEY (`industry_id`) REFERENCES `industries` (`industry_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company_industries`
--

LOCK TABLES `company_industries` WRITE;
/*!40000 ALTER TABLE `company_industries` DISABLE KEYS */;
INSERT INTO `company_industries` VALUES (1,1),(2,1),(3,1),(10,1),(5,3),(4,4),(7,4),(9,4),(6,6),(8,6);
/*!40000 ALTER TABLE `company_industries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `company_reviews`
--

DROP TABLE IF EXISTS `company_reviews`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `company_reviews` (
  `review_id` bigint NOT NULL AUTO_INCREMENT,
  `company_id` bigint NOT NULL,
  `user_id` bigint NOT NULL,
  `rating` float NOT NULL,
  `review_text` text,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`review_id`),
  KEY `company_id` (`company_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `company_reviews_ibfk_1` FOREIGN KEY (`company_id`) REFERENCES `companies` (`company_id`) ON DELETE CASCADE,
  CONSTRAINT `company_reviews_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company_reviews`
--

LOCK TABLES `company_reviews` WRITE;
/*!40000 ALTER TABLE `company_reviews` DISABLE KEYS */;
INSERT INTO `company_reviews` VALUES (1,1,6,4.5,'Innovative environment with great perks','2025-02-28 21:41:32'),(2,1,7,4.5,'Best workplace for tech enthusiasts','2025-02-28 21:41:32'),(3,1,8,4.5,'Challenging projects with global impact','2025-02-28 21:41:32'),(4,1,9,3,'Fast-paced but needs better work-life balance','2025-02-28 21:41:32'),(5,1,6,4,'Revolutionizing the automotive industry','2025-02-28 21:41:32'),(6,1,7,4.5,'Exciting cutting-edge technology work','2025-02-28 21:41:32'),(7,1,9,4,'Good benefits package and career growth','2025-02-28 21:41:32'),(8,1,6,3.5,'Bureaucratic processes slow things down','2025-02-28 21:41:32'),(9,1,8,3,'Amazing company culture and smart colleagues','2025-02-28 21:41:32'),(10,1,7,1,'The future of transportation is here','2025-02-28 21:41:32');
/*!40000 ALTER TABLE `company_reviews` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `company_specialities`
--

DROP TABLE IF EXISTS `company_specialities`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `company_specialities` (
  `company_id` bigint NOT NULL,
  `speciality_name` varchar(255) NOT NULL,
  PRIMARY KEY (`company_id`,`speciality_name`),
  CONSTRAINT `company_specialities_ibfk_1` FOREIGN KEY (`company_id`) REFERENCES `companies` (`company_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company_specialities`
--

LOCK TABLES `company_specialities` WRITE;
/*!40000 ALTER TABLE `company_specialities` DISABLE KEYS */;
INSERT INTO `company_specialities` VALUES (1,'Mobile OS'),(1,'Search Algorithms'),(2,'Cloud Computing'),(2,'Enterprise Software'),(3,'Consumer Electronics'),(3,'Semiconductors'),(4,'Automation'),(4,'Hybrid Vehicles'),(5,'Pharmaceuticals'),(5,'Vaccine Research'),(6,'AWS Cloud'),(6,'E-commerce'),(7,'Industrial Automation'),(7,'Smart Infrastructure'),(8,'Consumer Packaged Goods'),(8,'Sustainable Products'),(9,'Electric Vehicles'),(9,'Solar Energy'),(10,'Entertainment Systems'),(10,'Gaming Consoles');
/*!40000 ALTER TABLE `company_specialities` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `experience_levels`
--

DROP TABLE IF EXISTS `experience_levels`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `experience_levels` (
  `experience_id` bigint NOT NULL AUTO_INCREMENT,
  `experience_name` varchar(100) NOT NULL,
  PRIMARY KEY (`experience_id`),
  UNIQUE KEY `experience_name` (`experience_name`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `experience_levels`
--

LOCK TABLES `experience_levels` WRITE;
/*!40000 ALTER TABLE `experience_levels` DISABLE KEYS */;
INSERT INTO `experience_levels` VALUES (1,'Intern'),(2,'Junior'),(5,'Lead'),(3,'Mid-Level'),(6,'Principal'),(4,'Senior');
/*!40000 ALTER TABLE `experience_levels` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `industries`
--

DROP TABLE IF EXISTS `industries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `industries` (
  `industry_id` bigint NOT NULL AUTO_INCREMENT,
  `industry_name` varchar(255) NOT NULL,
  `icon` text,
  PRIMARY KEY (`industry_id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `industries`
--

LOCK TABLES `industries` WRITE;
/*!40000 ALTER TABLE `industries` DISABLE KEYS */;
INSERT INTO `industries` VALUES (1,'Technology','data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWNvZGUiPjxwb2x5bGluZSBwb2ludHM9IjE2IDE4IDIyIDEyIDE2IDYiLz48cG9seWxpbmUgcG9pbnRzPSI4IDYgMiAxMiA4IDE4Ii8+PC9zdmc+'),(2,'Business','data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWJyaWVmY2FzZSI+PHBhdGggZD0iTTE2IDIwVjRhMiAyIDAgMCAwLTItMmgtNGEyIDIgMCAwIDAtMiAydjE2Ii8+PHJlY3Qgd2lkdGg9IjIwIiBoZWlnaHQ9IjE0IiB4PSIyIiB5PSI2IiByeD0iMiIvPjwvc3ZnPg=='),(3,'Healthcare','data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXN0ZXRob3Njb3BlIj48cGF0aCBkPSJNMTEgMnYyIi8+PHBhdGggZD0iTTUgMnYyIi8+PHBhdGggZD0iTTUgM0g0YTIgMiAwIDAgMC0yIDJ2NGE2IDYgMCAwIDAgMTIgMFY1YTIgMiAwIDAgMC0yLTJoLTEiLz48cGF0aCBkPSJNOCAxNWE2IDYgMCAwIDAgMTIgMHYtMyIvPjxjaXJjbGUgY3g9IjIwIiBjeT0iMTAiIHI9IjIiLz48L3N2Zz4='),(4,'Education','data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWdyYWR1YXRpb24tY2FwIj48cGF0aCBkPSJNMjEuNDIgMTAuOTIyYTEgMSAwIDAgMC0uMDE5LTEuODM4TDEyLjgzIDUuMThhMiAyIDAgMCAwLTEuNjYgMEwyLjYgOS4wOGExIDEgMCAwIDAgMCAxLjgzMmw4LjU3IDMuOTA4YTIgMiAwIDAgMCAxLjY2IDB6Ii8+PHBhdGggZD0iTTIyIDEwdjYiLz48cGF0aCBkPSJNNiAxMi41VjE2YTYgMyAwIDAgMCAxMiAwdi0zLjUiLz48L3N2Zz4='),(5,'Finance','data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWxhbmRtYXJrIj48bGluZSB4MT0iMyIgeDI9IjIxIiB5MT0iMjIiIHkyPSIyMiIvPjxsaW5lIHgxPSI2IiB4Mj0iNiIgeTE9IjE4IiB5Mj0iMTEiLz48bGluZSB4MT0iMTAiIHgyPSIxMCIgeTE9IjE4IiB5Mj0iMTEiLz48bGluZSB4MT0iMTQiIHgyPSIxNCIgeTE9IjE4IiB5Mj0iMTEiLz48bGluZSB4MT0iMTgiIHgyPSIxOCIgeTE9IjE4IiB5Mj0iMTEiLz48cG9seWdvbiBwb2ludHM9IjEyIDIgMjAgNyA0IDciLz48L3N2Zz4='),(6,'Retail','data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXNob3BwaW5nLWJhZyI+PHBhdGggZD0iTTYgMiAzIDZ2MTRhMiAyIDAgMCAwIDIgMmgxNGEyIDIgMCAwIDAgMi0yVjZsLTMtNFoiLz48cGF0aCBkPSJNMyA2aDE4Ii8+PHBhdGggZD0iTTE2IDEwYTQgNCAwIDAgMS04IDAiLz48L3N2Zz4='),(7,'Logistics','data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXRydWNrIj48cGF0aCBkPSJNMTQgMThWNmEyIDIgMCAwIDAtMi0ySDRhMiAyIDAgMCAwLTIgMnYxMWExIDEgMCAwIDAgMSAxaDIiLz48cGF0aCBkPSJNMTUgMThIOSIvPjxwYXRoIGQ9Ik0xOSAxOGgyYTEgMSAwIDAgMCAxLTF2LTMuNjVhMSAxIDAgMCAwLS4yMi0uNjI0bC0zLjQ4LTQuMzVBMSAxIDAgMCAwIDE3LjUyIDhIMTQiLz48Y2lyY2xlIGN4PSIxNyIgY3k9IjE4IiByPSIyIi8+PGNpcmNsZSBjeD0iNyIgY3k9IjE4IiByPSIyIi8+PC9zdmc+'),(8,'Manufacturing','data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXdyZW5jaCI+PHBhdGggZD0iTTE0LjcgNi4zYTEgMSAwIDAgMCAwIDEuNGwxLjYgMS42YTEgMSAwIDAgMCAxLjQgMGwzLjc3LTMuNzdhNiA2IDAgMCAxLTcuOTQgNy45NGwtNi45MSA2LjkxYTIuMTIgMi4xMiAwIDAgMS0zLTNsNi45MS02LjkxYTYgNiAwIDAgMSA3Ljk0LTcuOTRsLTMuNzYgMy43NnoiLz48L3N2Zz4='),(9,'Design','data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLXBlbi10b29sIj48cGF0aCBkPSJNMTUuNzA3IDIxLjI5M2ExIDEgMCAwIDEtMS40MTQgMGwtMS41ODYtMS41ODZhMSAxIDAgMCAxIDAtMS40MTRsNS41ODYtNS41ODZhMSAxIDAgMCAxIDEuNDE0IDBsMS41ODYgMS41ODZhMSAxIDAgMCAxIDAgMS40MTR6Ii8+PHBhdGggZD0ibTE4IDEzLTEuMzc1LTYuODc0YTEgMSAwIDAgMC0uNzQ2LS43NzZMMy4yMzUgMi4wMjhhMSAxIDAgMCAwLTEuMjA3IDEuMjA3TDUuMzUgMTUuODc5YTEgMSAwIDAgMCAuNzc2Ljc0NkwxMyAxOCIvPjxwYXRoIGQ9Im0yLjMgMi4zIDcuMjg2IDcuMjg2Ii8+PGNpcmNsZSBjeD0iMTEiIGN5PSIxMSIgcj0iMiIvPjwvc3ZnPg=='),(10,'Hospitality','data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWhvc3BpdGFsIj48cGF0aCBkPSJNMTIgNnY0Ii8+PHBhdGggZD0iTTE0IDE0aC00Ii8+PHBhdGggZD0iTTE0IDE4aC00Ii8+PHBhdGggZD0iTTE0IDhoLTQiLz48cGF0aCBkPSJNMTggMTJoMmEyIDIgMCAwIDEgMiAydjZhMiAyIDAgMCAxLTIgMkg0YTIgMiAwIDAgMS0yLTJ2LTlhMiAyIDAgMCAxIDItMmgyIi8+PHBhdGggZD0iTTE4IDIyVjRhMiAyIDAgMCAwLTItMkg4YTIgMiAwIDAgMC0yIDJ2MTgiLz48L3N2Zz4='),(11,'Real Estate','data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWJ1aWxkaW5nIj48cmVjdCB3aWR0aD0iMTYiIGhlaWdodD0iMjAiIHg9IjQiIHk9IjIiIHJ4PSIyIiByeT0iMiIvPjxwYXRoIGQ9Ik05IDIydi00aDZ2NCIvPjxwYXRoIGQ9Ik04IDZoLjAxIi8+PHBhdGggZD0iTTE2IDZoLjAxIi8+PHBhdGggZD0iTTEyIDZoLjAxIi8+PHBhdGggZD0iTTEyIDEwaC4wMSIvPjxwYXRoIGQ9Ik0xMiAxNGguMDEiLz48cGF0aCBkPSJNMTYgMTBoLjAxIi8+PHBhdGggZD0iTTE2IDE0aC4wMSIvPjxwYXRoIGQ9Ik04IDEwaC4wMSIvPjxwYXRoIGQ9Ik04IDE0aC4wMSIvPjwvc3ZnPg=='),(12,'Medical','data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWhlYXJ0LXB1bHNlIj48cGF0aCBkPSJNMTkgMTRjMS40OS0xLjQ2IDMtMy4yMSAzLTUuNUE1LjUgNS41IDAgMCAwIDE2LjUgM2MtMS43NiAwLTMgLjUtNC41IDItMS41LTEuNS0yLjc0LTItNC41LTJBNS41IDUuNSAwIDAgMCAyIDguNWMwIDIuMyAxLjUgNC4wNSAzIDUuNWw3IDdaIi8+PHBhdGggZD0iTTMuMjIgMTJIOS41bC41LTEgMiA0LjUgMi03IDEuNSAzLjVoNS4yNyIvPjwvc3ZnPg==');
/*!40000 ALTER TABLE `industries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `job_applications`
--

DROP TABLE IF EXISTS `job_applications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `job_applications` (
  `application_id` bigint NOT NULL AUTO_INCREMENT,
  `job_id` bigint DEFAULT NULL,
  `user_id` bigint DEFAULT NULL,
  `resume_url` text,
  `cover_letter` text,
  `status` varchar(50) DEFAULT 'PENDING',
  `applied_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`application_id`),
  KEY `job_id` (`job_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `job_applications_ibfk_1` FOREIGN KEY (`job_id`) REFERENCES `jobs` (`job_id`) ON DELETE CASCADE,
  CONSTRAINT `job_applications_ibfk_2` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `job_applications`
--

LOCK TABLES `job_applications` WRITE;
/*!40000 ALTER TABLE `job_applications` DISABLE KEYS */;
INSERT INTO `job_applications` VALUES (1,1,6,'https://storage.example.com/john_doe_cv.pdf','Experienced Java developer with 8 years in backend systems...','PENDING','2025-02-28 21:41:32'),(2,1,7,'https://storage.example.com/jane_smith_cv.pdf','Spring Boot expert with cloud experience...','ACCEPTED','2025-02-28 21:41:32'),(3,2,6,'https://storage.example.com/john_doe_cv.pdf','Azure certified architect...','REJECTED','2025-02-28 21:41:32'),(4,3,7,'https://storage.example.com/jane_smith_cv.pdf','Machine learning specialist...','ACCEPTED','2025-02-28 21:41:32'),(5,4,8,'https://storage.example.com/robert_brown_cv.pdf','CAD design expert...','PENDING','2025-02-28 21:41:32'),(6,5,9,'https://storage.example.com/emily_wilson_cv.pdf','Recent CS graduate...','PENDING','2025-02-28 21:41:32'),(7,6,6,'https://storage.example.com/john_doe_cv.pdf','DevOps lead with 5+ years...','ACCEPTED','2025-02-28 21:41:32'),(8,7,7,'https://storage.example.com/jane_smith_cv.pdf','Embedded systems engineer...','REJECTED','2025-02-28 21:41:32'),(9,8,8,'https://storage.example.com/robert_brown_cv.pdf','Battery technology researcher...','PENDING','2025-02-28 21:41:32'),(10,9,9,'https://storage.example.com/emily_wilson_cv.pdf','Security certification holder...','ACCEPTED','2025-02-28 21:41:32');
/*!40000 ALTER TABLE `job_applications` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `job_experience_levels`
--

DROP TABLE IF EXISTS `job_experience_levels`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `job_experience_levels` (
  `job_id` bigint NOT NULL,
  `experience_id` bigint NOT NULL,
  PRIMARY KEY (`job_id`,`experience_id`),
  KEY `experience_id` (`experience_id`),
  CONSTRAINT `job_experience_levels_ibfk_1` FOREIGN KEY (`job_id`) REFERENCES `jobs` (`job_id`) ON DELETE CASCADE,
  CONSTRAINT `job_experience_levels_ibfk_2` FOREIGN KEY (`experience_id`) REFERENCES `experience_levels` (`experience_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `job_experience_levels`
--

LOCK TABLES `job_experience_levels` WRITE;
/*!40000 ALTER TABLE `job_experience_levels` DISABLE KEYS */;
INSERT INTO `job_experience_levels` VALUES (5,1),(10,2),(3,3),(7,3),(1,4),(2,4),(3,4),(4,4),(8,4),(9,4),(1,5),(6,5),(4,6),(8,6);
/*!40000 ALTER TABLE `job_experience_levels` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `job_salaries`
--

DROP TABLE IF EXISTS `job_salaries`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `job_salaries` (
  `salary_id` bigint NOT NULL AUTO_INCREMENT,
  `min_salary` double NOT NULL,
  `max_salary` double NOT NULL,
  `currency` varchar(10) NOT NULL DEFAULT 'USD',
  `pay_period` varchar(50) NOT NULL,
  PRIMARY KEY (`salary_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `job_salaries`
--

LOCK TABLES `job_salaries` WRITE;
/*!40000 ALTER TABLE `job_salaries` DISABLE KEYS */;
INSERT INTO `job_salaries` VALUES (1,80000,120000,'USD','Yearly'),(2,5000,7000,'USD','Monthly'),(3,40000,60000,'EUR','Yearly'),(4,3000,4500,'GBP','Monthly'),(5,95000,130000,'USD','Yearly'),(6,45,65,'USD','Hourly'),(7,7000,9000,'SGD','Monthly'),(8,100000,150000,'CAD','Yearly'),(9,600000,800000,'INR','Yearly'),(10,50000,75000,'AUD','Yearly');
/*!40000 ALTER TABLE `job_salaries` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `job_skills`
--

DROP TABLE IF EXISTS `job_skills`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `job_skills` (
  `job_id` bigint NOT NULL,
  `skill_id` bigint NOT NULL,
  PRIMARY KEY (`job_id`,`skill_id`),
  KEY `skill_id` (`skill_id`),
  CONSTRAINT `job_skills_ibfk_1` FOREIGN KEY (`job_id`) REFERENCES `jobs` (`job_id`) ON DELETE CASCADE,
  CONSTRAINT `job_skills_ibfk_2` FOREIGN KEY (`skill_id`) REFERENCES `skills` (`skill_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `job_skills`
--

LOCK TABLES `job_skills` WRITE;
/*!40000 ALTER TABLE `job_skills` DISABLE KEYS */;
INSERT INTO `job_skills` VALUES (1,1),(7,1),(3,2),(8,2),(1,3),(2,3),(7,3),(9,3),(5,4),(3,5),(8,5),(10,6),(4,7),(4,8),(6,8),(9,8),(4,9),(6,9),(2,10),(3,11),(5,13),(1,14),(2,15),(6,15),(9,15);
/*!40000 ALTER TABLE `job_skills` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `jobs`
--

DROP TABLE IF EXISTS `jobs`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `jobs` (
  `job_id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` bigint DEFAULT NULL,
  `company_id` bigint DEFAULT NULL,
  `salary_id` bigint DEFAULT NULL,
  `title` varchar(255) NOT NULL,
  `short_description` text,
  `detailed_description` longtext,
  `employment_type` varchar(50) DEFAULT NULL,
  `work_type` varchar(50) DEFAULT NULL,
  `job_url` text,
  `remote_allowed` tinyint(1) DEFAULT '0',
  `expiry_date` timestamp NULL DEFAULT NULL,
  `status` varchar(50) DEFAULT 'OPEN',
  `is_deleted` tinyint(1) DEFAULT '0',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `is_featured` tinyint(1) DEFAULT '0',
  `interview_process` int DEFAULT NULL,
  `location_id` bigint DEFAULT NULL,
  PRIMARY KEY (`job_id`),
  UNIQUE KEY `salary_id` (`salary_id`),
  KEY `user_id` (`user_id`),
  KEY `company_id` (`company_id`),
  KEY `jobs_ibfk_4_idx` (`location_id`),
  CONSTRAINT `jobs_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  CONSTRAINT `jobs_ibfk_2` FOREIGN KEY (`company_id`) REFERENCES `companies` (`company_id`) ON DELETE CASCADE,
  CONSTRAINT `jobs_ibfk_3` FOREIGN KEY (`salary_id`) REFERENCES `job_salaries` (`salary_id`) ON DELETE SET NULL,
  CONSTRAINT `jobs_ibfk_4` FOREIGN KEY (`location_id`) REFERENCES `location` (`location_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jobs`
--

LOCK TABLES `jobs` WRITE;
/*!40000 ALTER TABLE `jobs` DISABLE KEYS */;
INSERT INTO `jobs` VALUES (1,2,1,1,'Senior Java Developer','Develop high-performance backend systems','5+ years experience with Spring Boot and microservices. Must have AWS experience.','FULL_TIME','OTHER','https://careers.google.com/jobs/001',1,'2025-12-30 17:00:00','OPEN',0,'2025-02-28 21:41:32','2025-03-13 02:58:26',1,NULL,1),(2,3,2,2,'Cloud Architect','Design Azure cloud solutions','Certified Azure Architect with 3+ years cloud migration experience.','CONTRACT','CONTRACT','https://careers.microsoft.com/jobs/002',1,'2025-12-30 17:00:00','OPEN',0,'2025-02-28 21:41:32','2025-03-13 02:58:48',1,1,1),(3,4,3,3,'ML Engineer','Build AI-powered mobile features','Strong Python and TensorFlow skills required. Experience with edge computing preferred.','FULL_TIME','OTHER','https://careers.samsung.com/jobs/003',1,'2025-12-30 17:00:00','OPEN',0,'2025-02-28 21:41:32','2025-03-13 02:58:48',1,2,1),(4,5,9,4,'Automation Engineer','Develop manufacturing robots','Expertise in industrial automation and CAD design. 5+ years experience.','FULL_TIME','OTHER','https://www.tesla.com/careers/004',0,'2025-12-30 17:00:00','OPEN',0,'2025-02-28 21:41:32','2025-03-13 02:58:48',1,3,2),(5,2,1,5,'Frontend Intern','Learn React development','6-month internship program for recent graduates. Basic JavaScript knowledge required.','INTERNSHIP','INTERNSHIP','https://careers.google.com/jobs/005',1,'2025-12-30 17:00:00','OPEN',0,'2025-02-28 21:41:32','2025-03-13 02:58:48',1,1,3),(6,3,2,6,'DevOps Lead','Manage Kubernetes clusters','5+ years experience with Terraform and CI/CD pipelines. AWS/GCP certification required.','FULL_TIME','OTHER','https://careers.microsoft.com/jobs/006',1,'2025-12-30 17:00:00','OPEN',0,'2025-02-28 21:41:32','2025-03-13 02:58:48',1,1,4),(7,4,3,7,'Embedded Systems Engineer','Develop IoT devices','Expertise in C/C++ and RTOS. Experience with ARM processors.','CONTRACT','CONTRACT','https://careers.samsung.com/jobs/007',0,'2025-12-30 17:00:00','OPEN',0,'2025-02-28 21:41:32','2025-03-13 02:58:48',1,2,5),(8,5,9,8,'Battery Engineer','Improve EV battery technology','PhD in Materials Science with 3+ years battery research experience.','FULL_TIME','OTHER','https://www.tesla.com/careers/008',0,'2025-12-30 17:00:00','OPEN',0,'2025-02-28 21:41:32','2025-03-13 02:58:48',1,3,6),(9,2,1,9,'Security Engineer','Protect cloud infrastructure','CISSP certified with 5+ years security experience. Kubernetes security knowledge required.','FULL_TIME','OTHER','https://careers.google.com/jobs/009',1,'2025-12-30 17:00:00','OPEN',0,'2025-02-28 21:41:32','2025-03-13 02:58:48',1,3,7),(10,3,2,10,'Technical Writer','Create API documentation','Strong technical writing skills with OpenAPI/Swagger experience.','PART_TIME','PART_TIME','https://careers.microsoft.com/jobs/010',1,'2025-12-30 17:00:00','OPEN',0,'2025-02-28 21:41:32','2025-03-13 02:58:48',1,3,2);
/*!40000 ALTER TABLE `jobs` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `location`
--

DROP TABLE IF EXISTS `location`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `location` (
  `location_id` bigint NOT NULL AUTO_INCREMENT,
  `country_name` varchar(100) NOT NULL,
  `country_code` varchar(2) NOT NULL,
  `state` varchar(100) DEFAULT NULL,
  `city` varchar(100) NOT NULL,
  `county` varchar(100) DEFAULT NULL,
  `street` varchar(255) DEFAULT NULL,
  `house_number` varchar(20) DEFAULT NULL,
  `postal_code` varchar(20) DEFAULT NULL,
  `latitude` decimal(9,6) DEFAULT NULL,
  `longitude` decimal(9,6) DEFAULT NULL,
  `place_id` bigint DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`location_id`),
  UNIQUE KEY `location_id` (`location_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `location`
--

LOCK TABLES `location` WRITE;
/*!40000 ALTER TABLE `location` DISABLE KEYS */;
INSERT INTO `location` VALUES (1,'United States','US','California','Los Angeles','Los Angeles County','Hollywood Blvd','123','90028',34.052235,-118.243683,5368361,'2025-03-13 02:51:47','2025-03-13 02:51:47'),(2,'United States','US','New York','New York City','New York County','5th Avenue','789','10001',40.712776,-74.005974,5128581,'2025-03-13 02:51:47','2025-03-13 02:51:47'),(3,'United Kingdom','GB','England','London','Greater London','Baker Street','221B','NW1 6XE',51.523767,-0.158555,2643743,'2025-03-13 02:51:47','2025-03-13 02:51:47'),(4,'Canada','CA','Ontario','Toronto','Toronto Division','Queen Street','456','M5H 2N2',43.651070,-79.347015,6167865,'2025-03-13 02:51:47','2025-03-13 02:51:47'),(5,'Australia','AU','New South Wales','Sydney','Sydney County','George Street','678','2000',-33.868820,151.209290,2147714,'2025-03-13 02:51:47','2025-03-13 02:51:47'),(6,'Japan','JP',NULL,'Tokyo','Shibuya','Shibuya Dori','5-3','150-0001',35.689487,139.691711,1850147,'2025-03-13 02:51:47','2025-03-13 02:51:47'),(7,'Germany','DE','Bavaria','Munich','Upper Bavaria','Maximilianstraße','99','80539',48.135124,11.581981,2867714,'2025-03-13 02:51:47','2025-03-13 02:51:47'),(8,'France','FR','Île-de-France','Paris','Paris County','Champs-Élysées','250','75008',48.856613,2.352222,2988507,'2025-03-13 02:51:47','2025-03-13 02:51:47'),(9,'Italy','IT','Lazio','Rome','Rome County','Via del Corso','85','00186',41.902782,12.496366,3169070,'2025-03-13 02:51:47','2025-03-13 02:51:47'),(10,'Spain','ES','Community of Madrid','Madrid','Madrid County','Gran Vía','110','28013',40.416775,-3.703790,3117735,'2025-03-13 02:51:47','2025-03-13 02:51:47');
/*!40000 ALTER TABLE `location` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notifications`
--

DROP TABLE IF EXISTS `notifications`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `notifications` (
  `notification_id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` bigint NOT NULL,
  `job_id` bigint DEFAULT NULL,
  `message` text NOT NULL,
  `status` varchar(50) DEFAULT 'UNREAD',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `read_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`notification_id`),
  KEY `user_id` (`user_id`),
  KEY `job_id` (`job_id`),
  CONSTRAINT `notifications_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  CONSTRAINT `notifications_ibfk_2` FOREIGN KEY (`job_id`) REFERENCES `jobs` (`job_id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notifications`
--

LOCK TABLES `notifications` WRITE;
/*!40000 ALTER TABLE `notifications` DISABLE KEYS */;
INSERT INTO `notifications` VALUES (1,6,1,'Your application to Google has been received','UNREAD','2025-02-28 21:41:32',NULL),(2,7,NULL,'3 new jobs match your skills','UNREAD','2025-02-28 21:41:32',NULL),(3,8,4,'Interview scheduled for Friday 2pm','READ','2025-02-28 21:41:32',NULL),(4,9,7,'Application status updated to REJECTED','UNREAD','2025-02-28 21:41:32',NULL),(5,6,5,'Reminder: Technical assessment due tomorrow','READ','2025-02-28 21:41:32',NULL),(6,7,2,'Congratulations! Offer letter sent','UNREAD','2025-02-28 21:41:32',NULL),(7,8,NULL,'Complete your profile to get better matches','UNREAD','2025-02-28 21:41:32',NULL),(8,9,9,'Reference check completed','READ','2025-02-28 21:41:32',NULL),(9,6,10,'New message from recruiter','UNREAD','2025-02-28 21:41:32',NULL),(10,7,3,'Request for additional documents','READ','2025-02-28 21:41:32',NULL);
/*!40000 ALTER TABLE `notifications` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `oauth_logins`
--

DROP TABLE IF EXISTS `oauth_logins`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `oauth_logins` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `user_id` bigint DEFAULT NULL,
  `provider` varchar(255) NOT NULL,
  `provider_user_id` varchar(255) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `provider` (`provider`,`provider_user_id`),
  KEY `user_id` (`user_id`),
  CONSTRAINT `oauth_logins_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `oauth_logins`
--

LOCK TABLES `oauth_logins` WRITE;
/*!40000 ALTER TABLE `oauth_logins` DISABLE KEYS */;
INSERT INTO `oauth_logins` VALUES (1,6,'GOOGLE','google-oauth2|1234567890'),(2,7,'LINKEDIN','linkedin-oauth2|987654321'),(3,8,'GITHUB','github-oauth2|192837465'),(4,9,'MICROSOFT','microsoft-oauth2|564738291'),(5,10,'FACEBOOK','facebook-oauth2|1122334455');
/*!40000 ALTER TABLE `oauth_logins` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `permissions`
--

DROP TABLE IF EXISTS `permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `permissions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `permission_name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `permission_name` (`permission_name`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `permissions`
--

LOCK TABLES `permissions` WRITE;
/*!40000 ALTER TABLE `permissions` DISABLE KEYS */;
INSERT INTO `permissions` VALUES (1,'manage_users','Manage user accounts'),(2,'post_jobs','Create job postings'),(3,'apply_jobs','Apply to jobs');
/*!40000 ALTER TABLE `permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role_permissions`
--

DROP TABLE IF EXISTS `role_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `role_permissions` (
  `role_id` bigint NOT NULL,
  `permission_id` bigint NOT NULL,
  PRIMARY KEY (`role_id`,`permission_id`),
  KEY `permission_id` (`permission_id`),
  CONSTRAINT `role_permissions_ibfk_1` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE,
  CONSTRAINT `role_permissions_ibfk_2` FOREIGN KEY (`permission_id`) REFERENCES `permissions` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role_permissions`
--

LOCK TABLES `role_permissions` WRITE;
/*!40000 ALTER TABLE `role_permissions` DISABLE KEYS */;
INSERT INTO `role_permissions` VALUES (1,1),(1,2),(2,2),(1,3),(3,3);
/*!40000 ALTER TABLE `role_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `role_name` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `role_name` (`role_name`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'ADMIN','System Administrator'),(2,'EMPLOYER','Company Representative'),(3,'CANDIDATE','Job Seeker');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `skills`
--

DROP TABLE IF EXISTS `skills`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `skills` (
  `skill_id` bigint NOT NULL AUTO_INCREMENT,
  `skill_name` varchar(255) NOT NULL,
  PRIMARY KEY (`skill_id`),
  UNIQUE KEY `skill_name` (`skill_name`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `skills`
--

LOCK TABLES `skills` WRITE;
/*!40000 ALTER TABLE `skills` DISABLE KEYS */;
INSERT INTO `skills` VALUES (3,'AWS'),(10,'Azure'),(7,'CAD Design'),(16,'CI/CD'),(9,'Docker'),(1,'Java'),(8,'Kubernetes'),(5,'Machine Learning'),(15,'Microservices'),(13,'Node.js'),(6,'Project Management'),(2,'Python'),(12,'PyTorch'),(4,'React'),(14,'Spring Boot'),(11,'TensorFlow');
/*!40000 ALTER TABLE `skills` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_experience_leves`
--

DROP TABLE IF EXISTS `user_experience_leves`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_experience_leves` (
  `user_id` bigint NOT NULL,
  `experience_id` bigint NOT NULL,
  PRIMARY KEY (`user_id`,`experience_id`),
  KEY `FKqjr3wdyc00jb996ejgdqrhcbj` (`experience_id`),
  CONSTRAINT `FKa3covw26x8e8sncofapgstfu3` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`),
  CONSTRAINT `FKqjr3wdyc00jb996ejgdqrhcbj` FOREIGN KEY (`experience_id`) REFERENCES `experience_levels` (`experience_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_experience_leves`
--

LOCK TABLES `user_experience_leves` WRITE;
/*!40000 ALTER TABLE `user_experience_leves` DISABLE KEYS */;
/*!40000 ALTER TABLE `user_experience_leves` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_job_favorites`
--

DROP TABLE IF EXISTS `user_job_favorites`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_job_favorites` (
  `user_id` bigint NOT NULL,
  `job_id` bigint NOT NULL,
  PRIMARY KEY (`user_id`,`job_id`),
  KEY `job_id` (`job_id`),
  CONSTRAINT `user_job_favorites_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  CONSTRAINT `user_job_favorites_ibfk_2` FOREIGN KEY (`job_id`) REFERENCES `jobs` (`job_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_job_favorites`
--

LOCK TABLES `user_job_favorites` WRITE;
/*!40000 ALTER TABLE `user_job_favorites` DISABLE KEYS */;
INSERT INTO `user_job_favorites` VALUES (6,1),(7,2),(6,3),(7,4),(6,5),(8,6),(9,7),(6,8),(8,9),(9,10);
/*!40000 ALTER TABLE `user_job_favorites` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_roles`
--

DROP TABLE IF EXISTS `user_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_roles` (
  `user_id` bigint NOT NULL,
  `role_id` bigint NOT NULL,
  PRIMARY KEY (`user_id`,`role_id`),
  KEY `role_id` (`role_id`),
  CONSTRAINT `user_roles_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  CONSTRAINT `user_roles_ibfk_2` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_roles`
--

LOCK TABLES `user_roles` WRITE;
/*!40000 ALTER TABLE `user_roles` DISABLE KEYS */;
INSERT INTO `user_roles` VALUES (1,1),(2,2),(3,2),(4,2),(5,2),(6,3),(7,3),(8,3),(9,3),(10,3);
/*!40000 ALTER TABLE `user_roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_skills`
--

DROP TABLE IF EXISTS `user_skills`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_skills` (
  `user_id` bigint NOT NULL,
  `skill_id` bigint NOT NULL,
  PRIMARY KEY (`user_id`,`skill_id`),
  KEY `skill_id` (`skill_id`),
  CONSTRAINT `user_skills_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE,
  CONSTRAINT `user_skills_ibfk_2` FOREIGN KEY (`skill_id`) REFERENCES `skills` (`skill_id`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_skills`
--

LOCK TABLES `user_skills` WRITE;
/*!40000 ALTER TABLE `user_skills` DISABLE KEYS */;
INSERT INTO `user_skills` VALUES (6,1),(7,1),(6,2),(6,3),(6,4);
/*!40000 ALTER TABLE `user_skills` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password_hash` varchar(255) NOT NULL,
  `full_name` varchar(255) DEFAULT NULL,
  `avatar_url` varchar(255) DEFAULT NULL,
  `resume_url` varchar(255) DEFAULT NULL,
  `status` varchar(50) DEFAULT 'ACTIVE',
  `company_id` bigint DEFAULT NULL,
  `is_deleted` tinyint(1) DEFAULT '0',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `experience_id` bigint DEFAULT NULL,
  `location_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`),
  UNIQUE KEY `email` (`email`),
  KEY `company_id` (`company_id`),
  KEY `users_ibfk_2_idx` (`experience_id`),
  KEY `users_ibfk_3_idx` (`location_id`),
  CONSTRAINT `users_ibfk_1` FOREIGN KEY (`company_id`) REFERENCES `companies` (`company_id`) ON DELETE SET NULL,
  CONSTRAINT `users_ibfk_2` FOREIGN KEY (`experience_id`) REFERENCES `experience_levels` (`experience_id`) ON DELETE SET NULL ON UPDATE RESTRICT,
  CONSTRAINT `users_ibfk_3` FOREIGN KEY (`location_id`) REFERENCES `location` (`location_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'admin1','admin@nextstep.com','$2a$12$DfUWeUarVHtUs/LdTPJWyuBPL6ZjNRymFYOx/VZAapa0DFPV2H1GC','Michael Johnson',NULL,NULL,'ACTIVE',NULL,0,'2025-02-28 21:41:32','2025-03-13 03:06:58',1,1),(2,'employer1','hr@google.com','$2a$12$DfUWeUarVHtUs/LdTPJWyuBPL6ZjNRymFYOx/VZAapa0DFPV2H1GC','Sarah Wilson',NULL,NULL,'ACTIVE',1,0,'2025-02-28 21:41:32','2025-03-13 03:06:58',1,1),(3,'employer2','careers@microsoft.com','$2a$12$DfUWeUarVHtUs/LdTPJWyuBPL6ZjNRymFYOx/VZAapa0DFPV2H1GC','James Smith',NULL,NULL,'ACTIVE',2,0,'2025-02-28 21:41:32','2025-03-13 03:06:58',1,2),(4,'employer3','recruiting@samsung.com','$2a$12$DfUWeUarVHtUs/LdTPJWyuBPL6ZjNRymFYOx/VZAapa0DFPV2H1GC','Ji-hoon Kim',NULL,NULL,'ACTIVE',3,0,'2025-02-28 21:41:32','2025-03-13 03:06:58',1,2),(5,'employer4','hiring@tesla.com','$2a$12$DfUWeUarVHtUs/LdTPJWyuBPL6ZjNRymFYOx/VZAapa0DFPV2H1GC','Elon Musk',NULL,NULL,'ACTIVE',9,0,'2025-02-28 21:41:32','2025-03-13 03:06:58',1,2),(6,'candidate1','john.doe@email.com','$2a$12$DfUWeUarVHtUs/LdTPJWyuBPL6ZjNRymFYOx/VZAapa0DFPV2H1GC','John Doe',NULL,NULL,'ACTIVE',NULL,0,'2025-02-28 21:41:32','2025-03-13 03:06:58',1,3),(7,'candidate2','jane.smith@email.com','$2a$12$DfUWeUarVHtUs/LdTPJWyuBPL6ZjNRymFYOx/VZAapa0DFPV2H1GC','Jane Smith',NULL,NULL,'ACTIVE',NULL,0,'2025-02-28 21:41:32','2025-03-13 03:06:58',1,4),(8,'candidate3','robert.brown@email.com','$2a$12$DfUWeUarVHtUs/LdTPJWyuBPL6ZjNRymFYOx/VZAapa0DFPV2H1GC','Robert Brown',NULL,NULL,'ACTIVE',NULL,0,'2025-02-28 21:41:32','2025-03-13 03:06:58',1,5),(9,'candidate4','emily.wilson@email.com','$2a$12$DfUWeUarVHtUs/LdTPJWyuBPL6ZjNRymFYOx/VZAapa0DFPV2H1GC','Emily Wilson',NULL,NULL,'ACTIVE',NULL,0,'2025-02-28 21:41:32','2025-03-13 03:06:58',1,1),(10,'banned1','banned@test.com','$2a$12$DfUWeUarVHtUs/LdTPJWyuBPL6ZjNRymFYOx/VZAapa0DFPV2H1GC','Banned User',NULL,NULL,'BANNED',NULL,0,'2025-02-28 21:41:32','2025-03-13 03:06:58',1,2);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-03-13 10:18:07
