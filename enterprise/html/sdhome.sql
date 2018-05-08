/*
 Navicat MySQL Data Transfer

 Source Server         : Xampp
 Source Server Version : 50626
 Source Host           : localhost
 Source Database       : sdhome

 Target Server Version : 50626
 File Encoding         : utf-8

 Date: 10/26/2016 17:27:25 PM
*/

SET NAMES utf8;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
--  Table structure for `company`
-- ----------------------------
DROP TABLE IF EXISTS `company`;
CREATE TABLE `company` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `address` varchar(255) DEFAULT NULL,
  `badBehaviorScore` float NOT NULL,
  `brandImageScore` float NOT NULL,
  `companycategoryId` int(11) DEFAULT NULL,
  `fireHazardScore` float NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `parkId` int(11) DEFAULT NULL,
  `pollutionIndexScore` float NOT NULL,
  `riskCharacteristicsScore` float NOT NULL,
  `safeTypeId` int(11) DEFAULT NULL,
  `warningPrompt` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `company`
-- ----------------------------
BEGIN;
INSERT INTO `company` VALUES ('1', '海科路99号', '0', '0', '1', '0', '智慧城市中心', '1', '0', '0', '0', null), ('2', null, '0', '0', null, '0', 'mysql假数据', '1', '0', '0', null, null), ('3', null, '0', '0', null, '0', 'mysql假数据', '1', '0', '0', null, null), ('4', null, '0', '0', null, '0', 'mysql假数据', '1', '0', '0', null, null), ('5', null, '0', '0', null, '0', 'mysql假数据', '1', '0', '0', null, null), ('6', null, '0', '0', null, '0', 'mysql假数据', '1', '0', '0', null, null), ('7', null, '0', '0', null, '0', 'mysql假数据', '1', '0', '0', null, null);
COMMIT;

-- ----------------------------
--  Table structure for `companycategory`
-- ----------------------------
DROP TABLE IF EXISTS `companycategory`;
CREATE TABLE `companycategory` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `type` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
--  Table structure for `enterprisesafetyrecord`
-- ----------------------------
DROP TABLE IF EXISTS `enterprisesafetyrecord`;
CREATE TABLE `enterprisesafetyrecord` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `companyId` int(11) DEFAULT NULL,
  `create_date` datetime DEFAULT NULL,
  `feedback` varchar(255) DEFAULT NULL,
  `feedback_date` datetime DEFAULT NULL,
  `safetyDetails` varchar(255) DEFAULT NULL,
  `status` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `enterprisesafetyrecord`
-- ----------------------------
BEGIN;
INSERT INTO `enterprisesafetyrecord` VALUES ('1', '1', '2016-10-26 16:13:14', '企业反馈测试数据', '2016-10-26 16:13:41', '安监详情测试数据', '0'), ('2', '1', '2016-10-26 16:13:19', '企业反馈测试数据', '2016-10-26 16:13:44', '安监详情测试数据', '1'), ('3', '1', '2016-10-26 16:13:24', '企业反馈测试数据', '2016-10-26 16:13:46', '安监详情测试数据', '2'), ('4', null, null, null, null, null, null);
COMMIT;

-- ----------------------------
--  Table structure for `member`
-- ----------------------------
DROP TABLE IF EXISTS `member`;
CREATE TABLE `member` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `create_date` date DEFAULT NULL,
  `mobile` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `update_date` date DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
--  Table structure for `member_role`
-- ----------------------------
DROP TABLE IF EXISTS `member_role`;
CREATE TABLE `member_role` (
  `member_id` int(11) NOT NULL,
  `role_id` int(11) NOT NULL,
  PRIMARY KEY (`member_id`,`role_id`),
  KEY `FK_e8uutj5lhfcp6yjolosc8hee2` (`role_id`),
  KEY `FK_povku01iegi1ssbrexkmnk1bd` (`member_id`),
  CONSTRAINT `FK_e8uutj5lhfcp6yjolosc8hee2` FOREIGN KEY (`role_id`) REFERENCES `role` (`id`),
  CONSTRAINT `FK_povku01iegi1ssbrexkmnk1bd` FOREIGN KEY (`member_id`) REFERENCES `member` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
--  Table structure for `park`
-- ----------------------------
DROP TABLE IF EXISTS `park`;
CREATE TABLE `park` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `address` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `safeTypeId` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `park`
-- ----------------------------
BEGIN;
INSERT INTO `park` VALUES ('1', '海科路', '上海高研院A', '0'), ('2', null, '上海高研院A', '0'), ('3', null, '上海高研院A', '0'), ('4', null, '上海高研院A', '0'), ('5', null, '上海高研院A', '0'), ('6', null, '上海高研院A', '0'), ('7', null, '上海高研院A', '0'), ('8', null, '上海高研院A', '0'), ('9', null, null, null);
COMMIT;

-- ----------------------------
--  Table structure for `parksecuritytrend`
-- ----------------------------
DROP TABLE IF EXISTS `parksecuritytrend`;
CREATE TABLE `parksecuritytrend` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `create_date` datetime DEFAULT NULL,
  `parkId` int(11) DEFAULT NULL,
  `score` float NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `parksecuritytrend`
-- ----------------------------
BEGIN;
INSERT INTO `parksecuritytrend` VALUES ('1', null, '1', '0'), ('2', null, '1', '0'), ('3', null, '1', '0'), ('4', null, '1', '0'), ('5', null, '1', '0'), ('6', null, '1', '0'), ('7', null, '1', '0'), ('8', null, '1', '0'), ('9', null, '1', '0'), ('10', null, '1', '0'), ('11', null, '1', '0'), ('12', null, '1', '0');
COMMIT;

-- ----------------------------
--  Table structure for `role`
-- ----------------------------
DROP TABLE IF EXISTS `role`;
CREATE TABLE `role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `code` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
--  Table structure for `safetype`
-- ----------------------------
DROP TABLE IF EXISTS `safetype`;
CREATE TABLE `safetype` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `type` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;

-- ----------------------------
--  Records of `safetype`
-- ----------------------------
BEGIN;
INSERT INTO `safetype` VALUES ('1', '高危', '0');
COMMIT;

SET FOREIGN_KEY_CHECKS = 1;
