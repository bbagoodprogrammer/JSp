/*
Navicat MySQL Data Transfer

Source Server         : localhost_3306
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : szore

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2018-02-09 16:44:26
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for car
-- ----------------------------
DROP TABLE IF EXISTS `car`;
CREATE TABLE `car` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) CHARACTER SET utf8 NOT NULL,
  `price` int(20) NOT NULL,
  `caregory` varchar(255) DEFAULT NULL,
  `add_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `imgs` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `color` varchar(255) CHARACTER SET utf8 NOT NULL,
  `size` varchar(255) CHARACTER SET utf8 NOT NULL,
  `qty` int(11) NOT NULL,
  `xiaoji` int(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=20 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of car
-- ----------------------------
INSERT INTO `car` VALUES ('15', '影驰内存8G DDR4 2400MHz 高性能台式机内存条 电脑内存条超\n\n2133 ', '699', null, '2018-02-09 15:18:06', '../img/img15.jpg', null, '绿色', '终极豪华版', '1', '699');
INSERT INTO `car` VALUES ('3', '影驰（Galaxy）GTX 1080 GAMER 游戏显卡8G台式电脑独立显卡\n\n非吃鸡显卡', '4999', null, '2018-02-09 15:28:50', '../img/img3.jpg', null, '黄色', '豪华版', '1', '4999');

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(2550) CHARACTER SET utf8 NOT NULL COMMENT '商品名',
  `price` int(20) NOT NULL,
  `caregory` varchar(255) CHARACTER SET utf8 DEFAULT NULL,
  `add_date` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `imgs` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=59 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('1', '影驰 GeForce GTX 1050Ti大将1354(1468)MHz/7GHz 4G/128Bit \r\r\n游戏显卡', '1699', 'llist', '2018-02-07 11:47:39', '../img/img1.jpg', null);
INSERT INTO `goods` VALUES ('2', '影驰GT1030虎将2G台式电脑独立显卡LOL游戏办公卡追GTX750ti\r\r\n超650', '429', 'llist', '2018-02-07 11:47:42', '../img/img2.jpg', null);
INSERT INTO `goods` VALUES ('3', '影驰（Galaxy）GTX 1080 GAMER 游戏显卡8G台式电脑独立显卡\r\r\n非吃鸡显卡', '4999', 'llist', '2018-02-07 11:47:42', '../img/img3.jpg', null);
INSERT INTO `goods` VALUES ('4', '美商海盗船复仇者RGB灯条16GB(8Gx2条) DDR4 3200 台式机内存 \r\r\nRGB光', '1599', 'llist', '2018-02-07 11:47:43', '../img/img4.jpg', null);
INSERT INTO `goods` VALUES ('5', '美商海盗船(USCORSAIR) 复仇者LPX DDR4 2400 16GB(8Gx2条)台\r\r\n式机内存', '1499', 'llist', '2018-02-07 11:47:44', '../img/img5.jpg', null);
INSERT INTO `goods` VALUES ('6', '金泰克 S300 120G/ 240G固态硬盘SSD笔记本电脑台式机硬盘', '219', 'llist', '2018-02-07 11:47:44', '../img/img6.jpg', null);
INSERT INTO `goods` VALUES ('7', '影驰 GeForce GTX 1070骨灰大将导光呼吸灯 炫酷散热器 8G大\r\r\n显存包邮', '4899', 'llist', '2018-02-07 11:47:45', '../img/img7.jpg', null);
INSERT INTO `goods` VALUES ('8', '影驰 铁甲战将（120GB）SSD固态盘台式机笔记本固态硬盘', '269', 'llist', '2018-02-07 11:47:46', '../img/img8.jpg', null);
INSERT INTO `goods` VALUES ('9', '影驰 GeForce GTX 1070大将VR游戏独立显卡24W撸分 信仰灯包\r\r\n邮', '4399', 'llist', '2018-02-07 11:47:47', '../img/img9.jpg', null);
INSERT INTO `goods` VALUES ('10', '影驰 GTX 1070Ti 大将台式机电脑吃鸡游戏独立显卡非1060 \r\r\n1080', '5299', 'llist', '2018-02-07 11:47:48', '../img/img10.jpg', null);
INSERT INTO `goods` VALUES ('11', '影驰 GeForce GTX 1060名人堂 6G 独立游戏显卡 非GTX1050显\r\r\n卡', '3299', 'llist', '2018-02-07 11:47:49', '../img/img11.jpg', null);
INSERT INTO `goods` VALUES ('12', '影驰 GeForce GTX 1070名人堂 8G VR 独立游戏显卡非1060显卡', '4599', 'llist', '2018-02-08 14:11:28', '../img/img12.jpg', 'mitu');
INSERT INTO `goods` VALUES ('13', '西部数据(WD)蓝盘 1TB SATA6Gb/s 7200转64M 台式机硬盘', '300', 'llist', '2018-02-08 14:11:22', '../img/img13.jpg', '');
INSERT INTO `goods` VALUES ('14', '包邮金邦(GEIL) DDR4 2400 8G单条 台式机电脑内存条终身质保\r\r\n以换代保', '699', 'llist', '2018-02-08 14:10:53', '../img/img14.jpg', '');
INSERT INTO `goods` VALUES ('15', '影驰内存8G DDR4 2400MHz 高性能台式机内存条 电脑内存条超\r\r\n2133 ', '699', 'llist', '2018-02-08 13:35:34', '../img/img15.jpg', 'mitu');
INSERT INTO `goods` VALUES ('16', '美商海盗船(USCORSAIR)复仇者LED灯条8G DDR4 3000HZ台式机内\r\r\n存 灯条', '899', 'llist', '2018-02-08 13:35:24', '../img/img16.jpg', 'mitu');
INSERT INTO `goods` VALUES ('17', '影驰（Galaxy）GTX1050黑将 2G 128Bit独立台式机游戏显卡', '899', 'llist', '2018-02-08 13:35:23', '../img/img17.jpg', 'mitu');
INSERT INTO `goods` VALUES ('18', '美商海盗船 复仇者 8G 单条 2400 DDR4 电脑内存条 玩家高性\r\r\n能超频', '799', 'llist', '2018-02-08 13:35:23', '../img/img18.jpg', 'mitu');
INSERT INTO `goods` VALUES ('19', '金士顿8g内存条 DDR4 2400 8G 台式机内存条 四代内存条 兼容\r\r\n2133', '599', 'llist', '2018-02-07 20:47:25', '../img/img19.jpg', 'rexiao');
INSERT INTO `goods` VALUES ('20', '芝奇(G.SKILL) AEGIS系列 DDR4 2400频率 8G 台式机内存', '699', 'llist', '2018-02-07 20:46:36', '../img/img20.jpg', 'rexiao');
INSERT INTO `goods` VALUES ('21', '影驰 GeForce GTX 1080骨灰大将炫彩信仰灯 加宽PCB', '7999', 'llist', '2018-02-07 20:46:23', '../img/img21.jpg', 'rexiao');
INSERT INTO `goods` VALUES ('22', '影驰 铁甲战将（240GB）台式机固态硬盘高速笔记本电脑SSD非\r\r\n256G', '539', 'llist', '2018-02-07 20:46:24', '../img/img22.jpg', 'rexiao');
INSERT INTO `goods` VALUES ('23', '影驰 GeForce GTX 1060骨灰黑将 3G 192B 独立显卡', '3999', 'llist', '2018-02-07 20:46:25', '../img/img23.jpg', 'rexiao');
INSERT INTO `goods` VALUES ('24', '影驰 GeForce GTX 1060骨灰大将6GD5 6GB游戏显卡', '350', 'llist', '2018-02-07 20:46:25', '../img/img24.jpg', 'rexiao');
INSERT INTO `goods` VALUES ('25', '西部数据(WD)蓝盘 2TB SATA6Gb/s 64M 台式机硬盘', '419', 'llist', '2018-02-07 20:46:26', '../img/img25.jpg', 'rexiao');
INSERT INTO `goods` VALUES ('26', '威刚（ADATA）DDR4 2133 4GB 台式机内存', '449', 'llist', '2018-02-07 20:46:27', '../img/img26.jpg', 'rexiao');
INSERT INTO `goods` VALUES ('27', 'Eaget/忆捷 S606 120G固态硬盘ssd非128G高速笔记本电脑固态硬盘', '779', 'llist', '2018-02-07 20:46:27', '../img/img27.jpg', 'rexiao');
INSERT INTO `goods` VALUES ('28', 'intel 酷睿 I5  4590 四核 主频 3.2/ 威刚8GDDR3 / 技嘉GTX970 4G OC 支持显卡 BOOST加速 /影驰 240GgSSD 11秒开机', '4699', 'llist', '2018-02-07 20:46:28', '../img/img28.jpg', 'rexiao');
INSERT INTO `goods` VALUES ('29', '', '0', '', '2018-02-07 20:46:35', 'img/s1.jpg', 'rexiao');
INSERT INTO `goods` VALUES ('30', '影驰GTX1050显卡', '899', 'sy', '2018-02-07 19:51:52', 'img/s2.jpg', 'pinpai');
INSERT INTO `goods` VALUES ('31', '影驰 GTX1070显卡', '4899', 'sy', '2018-02-07 19:51:55', 'img/s3.jpg', 'pinpai');
INSERT INTO `goods` VALUES ('32', '影驰10系显卡', '429', 'sy', '2018-02-07 19:51:57', 'img/s4.jpg', 'pinpai');
INSERT INTO `goods` VALUES ('33', '影驰 120GB 固态硬盘', '399', 'sy', '2018-02-07 19:51:59', 'img/s5.jpg', 'pinpai');
INSERT INTO `goods` VALUES ('34', 'AOC Q3208VWG 32英寸', '14399', 'sy', '2018-02-07 19:53:34', 'img/d1.jpg', 'dianjing');
INSERT INTO `goods` VALUES ('35', '影驰120G固态硬盘', '269', 'sy', '2018-02-07 19:53:35', 'img/d2.jpg', 'dianjing');
INSERT INTO `goods` VALUES ('36', 'i7 7700K中文盒装CPU', '2599', 'sy', '2018-02-07 19:53:36', 'img/d3.jpg', 'dianjing');
INSERT INTO `goods` VALUES ('37', '七彩虹 战斧主板', '399', 'sy', '2018-02-07 19:53:36', 'img/d4.jpg', 'dianjing');
INSERT INTO `goods` VALUES ('38', 'i5办公主机低至2288元', '111', 'sy', '2018-02-07 20:02:50', 'img/d5.jpg', 'dianjing');
INSERT INTO `goods` VALUES ('39', 'JBL耳机限时抢', '333', 'sy', '2018-02-07 20:04:31', 'img/d6.jpg', 'dianjing');
INSERT INTO `goods` VALUES ('40', '先锋奔腾G3900/120G', '888', 'sy', '2018-02-07 20:18:41', 'img/r1.jpg', 'remen');
INSERT INTO `goods` VALUES ('41', '七代i5 DIY游戏主机', '666', 'sy', '2018-02-07 20:11:28', 'img/r2.jpg', 'remen');
INSERT INTO `goods` VALUES ('42', '7代i7骨灰级游戏装备', '2222', 'sy', '2018-02-07 20:11:59', 'img/r3.jpg', 'remen');
INSERT INTO `goods` VALUES ('43', '佳能 EOS M6套机(15-45mm IS STM) 黑色', '1666', 'sy', '2018-02-07 20:21:10', 'img/sy1.jpg', 'sheying');
INSERT INTO `goods` VALUES ('44', 'Sony 索尼 ILCE-5100套机（16-50mm）微单', '211', 'sy', '2018-02-07 20:22:15', 'img/sy2.jpg', 'sheying');
INSERT INTO `goods` VALUES ('45', 'Sony/索尼 ILCE-6500 APS-C画幅旗舰微单 索尼微单，单机身', '8888', 'sy', '2018-02-07 20:22:58', 'img/sy3.jpg', 'sheying');
INSERT INTO `goods` VALUES ('46', 'mercrt-fd.zol-img.com.cn/g5/M00/0B/09/ChMkJ1pFp5CIcMUdAACOQfj3GFcAAjpAwN3beoAAI5Z132.jpg', '5555', 'sy', '2018-02-07 20:25:11', 'img/sy4.jpg', 'sheying');
INSERT INTO `goods` VALUES ('47', 'Canon佳能 6D套机 24-70mm/F4L全画幅单反', '222', 'sy', '2018-02-07 20:25:07', 'img/sy6.jpg', 'sheying');
INSERT INTO `goods` VALUES ('48', '佳能750D', '3234', 'sy', '2018-02-07 20:29:08', 'img/sx5.jpg', 'sheying');
INSERT INTO `goods` VALUES ('49', '佳能750D', '3234', 'sy', '2018-02-07 20:49:42', 'img/sx5.jpg', 'rexiao');
INSERT INTO `goods` VALUES ('50', 'mercrt-fd.zol-img.com.cn/g5/M00/0B/09/ChMkJ1pFp5CIcMUdAACOQfj3GFcAAjpAwN3beoAAI5Z132.jpg', '5555', 'sy', '2018-02-07 20:49:46', 'img/sy4.jpg', 'rexiao');
INSERT INTO `goods` VALUES ('51', 'Sony 索尼 ILCE-5100套机（16-50mm）微单', '211', 'sy', '2018-02-07 20:50:01', 'img/sy2.jpg', 'rexiao');
INSERT INTO `goods` VALUES ('52', 'intel 酷睿 I5  4590 四核 主频 3.2/ 威刚8GDDR3 / 技嘉GTX970 4G OC 支持显卡 BOOST加速 /影驰 240GgSSD 11秒开机', '4699', 'sy', '2018-02-07 20:56:11', 'img/sy1.jpg', 'rexiao');
INSERT INTO `goods` VALUES ('53', '影驰 120GB 固态硬盘', '399', 'sy', '2018-02-07 20:50:45', 'img/s5.jpg', 'rexiao');
INSERT INTO `goods` VALUES ('54', '七彩虹 战斧主板', '399', 'sy', '2018-02-07 20:51:37', 'img/d4.jpg', 'rexiao');
INSERT INTO `goods` VALUES ('55', 'i7 7700K中文盒装CPU', '2599', 'sy', '2018-02-07 20:51:38', 'img/d3.jpg', 'rexiao');
INSERT INTO `goods` VALUES ('56', '佳能 EOS M6套机(15-45mm IS STM) 黑色', '1666', 'sy', '2018-02-07 20:51:39', 'img/sy1.jpg', 'rexiao');
INSERT INTO `goods` VALUES ('57', 'Sony/索尼 ILCE-6500 APS-C画幅旗舰微单 索尼微单，单机身', '8888', 'sy', '2018-02-07 20:51:44', 'img/sy3.jpg', 'rexiao');
INSERT INTO `goods` VALUES ('58', 'mercrt-fd.zol-img.com.cn/g5/M00/0B/09/ChMkJ1pFp5CIcMUdAACOQfj3GFcAAjpAwN3beoAAI5Z132.jpg', '5555', 'sy', '2018-02-07 20:52:04', 'img/sy4.jpg', 'rexiao');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `username` varchar(255) NOT NULL DEFAULT '',
  `password` varchar(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('laoxie', '123');
INSERT INTO `user` VALUES ('', 'd41d8cd98f00b204e9800998ecf8427e');
INSERT INTO `user` VALUES ('111', '698d51a19d8a121ce581499d7b701668');
INSERT INTO `user` VALUES ('1111', 'd41d8cd98f00b204e9800998ecf8427e');
INSERT INTO `user` VALUES ('1111111', '698d51a19d8a121ce581499d7b701668');
INSERT INTO `user` VALUES ('1111111111', '698d51a19d8a121ce581499d7b701668');
INSERT INTO `user` VALUES ('11111', 'b59c67bf196a4758191e42f76670ceba');
INSERT INTO `user` VALUES ('11111111', '1bbd886460827015e5d605ed44252251');
INSERT INTO `user` VALUES ('2222', 'b59c67bf196a4758191e42f76670ceba');
INSERT INTO `user` VALUES ('11111112', '698d51a19d8a121ce581499d7b701668');
INSERT INTO `user` VALUES ('111111122', '698d51a19d8a121ce581499d7b701668');
SET FOREIGN_KEY_CHECKS=1;
