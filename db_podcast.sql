/*
 Navicat Premium Data Transfer

 Source Server         : Mysql
 Source Server Type    : MySQL
 Source Server Version : 80016
 Source Host           : localhost:3306
 Source Schema         : db_podcast

 Target Server Type    : MySQL
 Target Server Version : 80016
 File Encoding         : 65001

 Date: 28/02/2022 14:22:42
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for p_album
-- ----------------------------
DROP TABLE IF EXISTS `p_album`;
CREATE TABLE `p_album`  (
  `a_id` int(11) NOT NULL AUTO_INCREMENT,
  `u_id` int(11) NOT NULL,
  `d_id` int(11) NOT NULL,
  `a_name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `a_introduce` varchar(200) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `a_picture` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `a_brief` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `a_classify` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `a_label1` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `a_label2` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `a_author` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `a_state` tinyint(1) NULL DEFAULT NULL,
  `a_time` datetime(0) NULL DEFAULT NULL,
  `a_sum` int(11) NULL DEFAULT NULL,
  `a_sort` tinyint(1) NULL DEFAULT NULL,
  `a_song` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `a_songname` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `a_starting` tinyint(1) NULL DEFAULT NULL,
  `a_poster` tinyint(1) NULL DEFAULT NULL,
  `a_manage` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`a_id`) USING BTREE,
  INDEX `FK_user_ablum`(`u_id`) USING BTREE,
  CONSTRAINT `FK_user_ablum` FOREIGN KEY (`u_id`) REFERENCES `p_user` (`u_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of p_album
-- ----------------------------
INSERT INTO `p_album` VALUES (6, 1, 1, '1', '1', NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '1');
INSERT INTO `p_album` VALUES (7, 1, 1, '爱之名', '1', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '1');
INSERT INTO `p_album` VALUES (8, 1, 1, '风之谷', '欢快的', NULL, NULL, NULL, NULL, NULL, NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '1');
INSERT INTO `p_album` VALUES (9, 1, 2, '悬崖上的金鱼姬', '故事', NULL, NULL, NULL, NULL, NULL, NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '1');
INSERT INTO `p_album` VALUES (49, 1, 1, '额外的群无', '单位', NULL, NULL, NULL, '玄幻奇幻', '热血', 'AFC', 0, NULL, 12, 0, NULL, NULL, 0, 0, '2');
INSERT INTO `p_album` VALUES (53, 1, 1, '的企鹅王', '123', NULL, NULL, NULL, '玄幻奇幻', '热血', '2万', 0, NULL, 11, 0, NULL, NULL, 0, 0, '3');
INSERT INTO `p_album` VALUES (54, 1, 1, '三生三世', '十里桃花', NULL, NULL, NULL, '畅销小说', '影视', '南宫', 0, NULL, 11, 0, NULL, NULL, 0, 0, '4');
INSERT INTO `p_album` VALUES (55, 1, 1, '去去去', '我问问', NULL, '是是是', NULL, '玄幻奇幻', '热血', '微信', 0, NULL, 11, 0, NULL, NULL, 0, 0, '2');
INSERT INTO `p_album` VALUES (56, 1, 1, '盗墓笔记', '惊险之旅', NULL, NULL, NULL, '畅销小说', '悬疑', '南派三叔', 0, NULL, 30, 0, NULL, NULL, 0, 0, '3');
INSERT INTO `p_album` VALUES (77, 1, 1, '海绵宝宝', '海底的故事', NULL, '住在海底的小人儿', '儿童', '卡通动画', '中文', '海绵宝宝', 0, NULL, 30, 0, '3', '哈哈哈', 0, 0, '2');
INSERT INTO `p_album` VALUES (78, 1, 1, '昂飒飒', '是西安撒 ', NULL, '咋潇洒', '儿童', '国学经典', '英文', '按需', 0, '2021-12-11 07:10:31', 12, 0, '2', '啥', 0, 0, '2');

-- ----------------------------
-- Table structure for p_data
-- ----------------------------
DROP TABLE IF EXISTS `p_data`;
CREATE TABLE `p_data`  (
  `d_id` int(11) NOT NULL AUTO_INCREMENT,
  `a_id` int(11) NOT NULL,
  `s_id` int(11) NOT NULL,
  `u_id` int(11) NOT NULL,
  `d_amount` int(11) NULL DEFAULT NULL,
  `d_subscribe` int(11) NULL DEFAULT NULL,
  `d_time` int(11) NULL DEFAULT NULL,
  `d_rate` double(5, 2) NULL DEFAULT NULL,
  `d_profit` decimal(10, 2) NULL DEFAULT NULL,
  `d_withdrawed` decimal(10, 2) NULL DEFAULT NULL,
  `d_willwithidraw` decimal(10, 2) NULL DEFAULT NULL,
  `d_day` date NULL DEFAULT NULL,
  `d_type` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `d_bz` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`d_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for p_invite
-- ----------------------------
DROP TABLE IF EXISTS `p_invite`;
CREATE TABLE `p_invite`  (
  `i_id` int(11) NOT NULL AUTO_INCREMENT,
  `u_id` int(11) NOT NULL,
  `i_user` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `i_state` tinyint(1) NULL DEFAULT NULL,
  `i_prepare` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `i_time` datetime(0) NULL DEFAULT NULL,
  `i_realtime` datetime(0) NULL DEFAULT NULL,
  `i_firsttime` datetime(0) NULL DEFAULT NULL,
  `i_invitetime` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`i_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for p_platform
-- ----------------------------
DROP TABLE IF EXISTS `p_platform`;
CREATE TABLE `p_platform`  (
  `p_id` int(11) NOT NULL AUTO_INCREMENT,
  `u_id` int(11) NOT NULL,
  `p_name` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `p_username` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `p_fans` int(11) NULL DEFAULT NULL,
  `p_amount` int(11) NULL DEFAULT NULL,
  `p_link` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `p_picture` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`p_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for p_program
-- ----------------------------
DROP TABLE IF EXISTS `p_program`;
CREATE TABLE `p_program`  (
  `pro_id` int(11) NOT NULL AUTO_INCREMENT,
  `a_id` int(11) NULL DEFAULT NULL,
  `a_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `pro_name` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `program` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`pro_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 6 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of p_program
-- ----------------------------
INSERT INTO `p_program` VALUES (1, 1, '爱之名', '1111', 'C:\\fakepath\\大野克夫 (おおの かつお) - 「名探偵コナン」~メインテーマ.wav');
INSERT INTO `p_program` VALUES (2, 6, '三生三世', '22', 'C:\\fakepath\\Nate Connelly - Ghost Bride Resurrected.wav');
INSERT INTO `p_program` VALUES (4, 9, '悬崖上的金鱼姬', '小金鱼游啊游', 'C:\\fakepath\\Lawrence - 月半小夜曲.wav');
INSERT INTO `p_program` VALUES (5, 9, '悬崖上的金鱼姬', '小鱼鱼', 'C:\\fakepath\\Lawrence - 月半小夜曲.wav');

-- ----------------------------
-- Table structure for p_realname
-- ----------------------------
DROP TABLE IF EXISTS `p_realname`;
CREATE TABLE `p_realname`  (
  `r_id` int(11) NOT NULL AUTO_INCREMENT,
  `u_id` int(11) NOT NULL,
  `r_name` varchar(10) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `r_cardtype` tinyint(1) NULL DEFAULT NULL,
  `r_identity` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `r_fphoto` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `r_bphoto` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `r_hphoto` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `r_timetype` tinyint(1) NOT NULL,
  `r_endtime` date NULL DEFAULT NULL,
  PRIMARY KEY (`r_id`) USING BTREE,
  INDEX `FK_user_realname2`(`u_id`) USING BTREE,
  CONSTRAINT `FK_user_realname2` FOREIGN KEY (`u_id`) REFERENCES `p_user` (`u_id`) ON DELETE RESTRICT ON UPDATE RESTRICT
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for p_settlement
-- ----------------------------
DROP TABLE IF EXISTS `p_settlement`;
CREATE TABLE `p_settlement`  (
  `s_id` int(11) NOT NULL AUTO_INCREMENT,
  `u_id` int(11) NOT NULL,
  `d_id` int(11) NOT NULL,
  `s_bank` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `s_bnumber` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `s_bankname` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `s_phone` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `s_address` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `s_fpicture` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `s_bpicture` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`s_id`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for p_user
-- ----------------------------
DROP TABLE IF EXISTS `p_user`;
CREATE TABLE `p_user`  (
  `u_id` int(11) NOT NULL AUTO_INCREMENT,
  `p_id` int(11) NULL DEFAULT NULL COMMENT '平台id',
  `i_id` int(11) NULL DEFAULT NULL COMMENT '邀请id',
  `r_id` int(11) NULL DEFAULT NULL COMMENT '实名id',
  `s_id` int(11) NULL DEFAULT NULL COMMENT '结算id',
  `d_id` int(11) NULL DEFAULT NULL COMMENT '数据id',
  `u_username` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `u_password` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NOT NULL,
  `u_picture` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `u_phone` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `u_qq` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `u_wechat` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `u_email` varchar(30) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  `u_introduce` varchar(150) CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci NULL DEFAULT NULL,
  PRIMARY KEY (`u_id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_0900_ai_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of p_user
-- ----------------------------
INSERT INTO `p_user` VALUES (1, NULL, NULL, NULL, NULL, NULL, 'abc', '123', 'picture', '123456', '123', '123', '123456', '无');

SET FOREIGN_KEY_CHECKS = 1;
