/*
SQLyog Ultimate v12.4.3 (64 bit)
MySQL - 5.7.21-log : Database - game365
*********************************************************************
*/

/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
CREATE DATABASE /*!32312 IF NOT EXISTS*/`game365` /*!40100 DEFAULT CHARACTER SET utf8 */;

USE `game365`;

/*Table structure for table `library` */

DROP TABLE IF EXISTS `library`;

CREATE TABLE `library` (
  `user_id` varchar(15) NOT NULL,
  `pro_id` int(11) NOT NULL,
  PRIMARY KEY (`user_id`,`pro_id`),
  KEY `pro_id` (`pro_id`),
  CONSTRAINT `library_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `library_ibfk_2` FOREIGN KEY (`pro_id`) REFERENCES `project` (`pro_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `library` */

insert  into `library`(`user_id`,`pro_id`) values 
('user1',1),
('user2',1),
('user1',2);

/*Table structure for table `pro_keyword` */

DROP TABLE IF EXISTS `pro_keyword`;

CREATE TABLE `pro_keyword` (
  `pro_id` int(11) NOT NULL,
  `keyword` varchar(15) NOT NULL,
  KEY `pro_id` (`pro_id`),
  CONSTRAINT `pro_keyword_ibfk_1` FOREIGN KEY (`pro_id`) REFERENCES `project` (`pro_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `pro_keyword` */

insert  into `pro_keyword`(`pro_id`,`keyword`) values 
(1,'액션'),
(1,'슈팅'),
(2,'1인칭');

/*Table structure for table `pro_member` */

DROP TABLE IF EXISTS `pro_member`;

CREATE TABLE `pro_member` (
  `user_id` varchar(15) NOT NULL,
  `pro_id` int(11) NOT NULL,
  `part` varchar(15) DEFAULT NULL,
  PRIMARY KEY (`user_id`,`pro_id`),
  KEY `pro_id` (`pro_id`),
  CONSTRAINT `pro_member_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`),
  CONSTRAINT `pro_member_ibfk_2` FOREIGN KEY (`pro_id`) REFERENCES `project` (`pro_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `pro_member` */

insert  into `pro_member`(`user_id`,`pro_id`,`part`) values 
('user1',1,'개발'),
('user2',1,'ost담당'),
('user3',2,'개발');

/*Table structure for table `project` */

DROP TABLE IF EXISTS `project`;

CREATE TABLE `project` (
  `pro_id` int(11) NOT NULL AUTO_INCREMENT,
  `pd_id` varchar(15) NOT NULL,
  `pro_name` varchar(20) NOT NULL,
  `progress` int(11) DEFAULT NULL,
  `likes` int(11) DEFAULT NULL,
  `sponsorship` int(11) DEFAULT NULL,
  `price` int(11) DEFAULT NULL,
  `intro` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`pro_id`),
  KEY `pd_id` (`pd_id`),
  CONSTRAINT `project_ibfk_1` FOREIGN KEY (`pd_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

/*Data for the table `project` */

insert  into `project`(`pro_id`,`pd_id`,`pro_name`,`progress`,`likes`,`sponsorship`,`price`,`intro`) values 
(1,'user1','enter the gungeon',1,150,0,8000,'로그라이크 게임입니다.'),
(2,'user1','test',0,50,10000000,16000,'개발 예정');

/*Table structure for table `test` */

DROP TABLE IF EXISTS `test`;

CREATE TABLE `test` (
  `id` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `test` */

insert  into `test`(`id`,`password`) values 
('test01','test1234'),
('test02','test1234');

/*Table structure for table `user` */

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `user_id` varchar(15) NOT NULL,
  `user_pass` varchar(15) NOT NULL,
  `nickname` varchar(10) NOT NULL,
  `email` varchar(25) NOT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `field` varchar(10) DEFAULT NULL,
  `git_id` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

/*Data for the table `user` */

insert  into `user`(`user_id`,`user_pass`,`nickname`,`email`,`phone`,`field`,`git_id`) values 
('user1','pass1','nick1','email1','010-2094-6310','개발','decidone'),
('user2','pass2','nick2','email2','010-2049-4423','ost','ostman'),
('user3','pass3','nick3','email3','010-4245-6236','개발','dtted');

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;
