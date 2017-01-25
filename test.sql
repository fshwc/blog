/*
Navicat MySQL Data Transfer

Source Server         : hwc
Source Server Version : 50539
Source Host           : 127.0.0.1:3306
Source Database       : test

Target Server Type    : MYSQL
Target Server Version : 50539
File Encoding         : 65001

Date: 2017-01-25 16:15:03
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for article
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `content` text,
  `readNumber` int(11) DEFAULT '0',
  `time` bigint(11) DEFAULT NULL,
  `author` int(20) DEFAULT NULL,
  `commentNumber` int(11) DEFAULT '0',
  `type` smallint(6) DEFAULT '0',
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `autid` (`author`),
  CONSTRAINT `autid` FOREIGN KEY (`author`) REFERENCES `_user` (`Uid`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of article
-- ----------------------------
INSERT INTO `article` VALUES ('12', '房价', '<p>打开房价受到官方数据恢复的过劳死ufdhgsldfigjh是领导反馈给机会酸辣粉的甘苦就会司法独立就很舒服的过了四级的回复你生理结构符合施工方会</p>\n', '1', '1482399950609', '10', '0', '1', '工会经费今天要jet有恶童要和我让他午夜');
INSERT INTO `article` VALUES ('13', '一辈子，总要拼一次命', '<p>我公众号之前的名字一直叫做，努力到无能为力，像是在提醒我自己，不能有一丝一毫的懈怠。</p><p>“你干嘛叫这个名字？”有人在后台问。</p><p>“因为我要提醒自己，时刻都要努力啊”我慢悠悠地回复着。</p><p>他回复：“<b>真正的努力是不需要提醒的，你只需要心里知道，定下一个目标，然后默默无闻地拼尽全力，时间会记录一切，每一滴汗水，每一次挥拳，都是岁月长河里永不消逝的风景</b>”</p><p>我想了想，觉得他说得很有道理。</p><p>有时候我们把努力高声喊出来，其实就是害怕自己会放弃，因为没有那么坚定，所以才要宣誓出来。</p><p>我最后还是把名字改回了安梳颜。</p><p>此时此刻的你，在哪里，多大了，做着什么？</p><p>你想过十年后的自己吗？或者是五年后的自己？</p>', '101', '1482418510426', '10', '0', '0', '收到了fig就色哦两个额头和碰头会额头我剖后剖让他陪我提去【鹅肉iqeroigu其二破iqepgo前额和股票确认后抛却和钦佩红旗谱');
INSERT INTO `article` VALUES ('15', '一', '<p>前些时候，开了一个凌晨五点的早起打卡学习群，入群交99块报名费，早上五点起床，打卡学习，21天依然坚持下来的人我就发个一百块的红包做奖励。</p><p>凌晨五点，大冬天，冻成狗的样子吧。</p><p>朋友圈很多人都说我神经病，不好好睡觉，就知道整些幺蛾子。</p><p>发起这个群的原因，首先是因为我想攒新书稿子，还有就是一个小学妹跟我抱怨，她在深圳工作，刚毕业什么都不会，也没有突出的技能，后悔在学校里虚度时光，以至于现在这么窘迫，住在偏僻得不能偏僻的城中村，交了房租后就青菜煮面，不好意思张口找父母要钱。</p><p>她说，想要把大学里没学好的编程重新捡起来，好好学。</p><p>我说，那就从现在开始啊，抱着互相监督的愿望，在我读者群里发了招募。</p><p>有太多人和我们一样，想要读一本书，想要学编程，学做饭，学手绘........却总是以没时间没空做借口。</p><p><b>二十出头的年轻人，什么都缺，就是不应该缺拼命努力的勇气。</b><b></b></p><p>21天很快就过去，除开极个别的人，大家想要去学的东西，都顺利走上了正轨。当你真正全身心投入地去做某件事情的时候，那它就真的会成功。</p>', '4001', '1472342400000', '7', '0', '0', null);
INSERT INTO `article` VALUES ('16', '提高你设计审美的那些网站', '<p>表达的流畅与否，很大程度是取决于你脑海中积存的语言板块有多少。语言板块多，你表达自然流利；板块少，自然有话说不出来。所谓“搜索枯肠”的苦，说的就是这种无力感。</p><p>所以为了让你脑海中的语言板块丰厚起来，朗读就是其中一种手段。<b>当你大声朗读的时候，文章里的语言就会逐渐输入到大脑里面；文中的表达方式，随着你不断的重复朗读，也会慢慢变成你自己的表达方式。学习英文也是同样理由。</b></p><p>这个过程，不但是“语言输入”的积累，更是口头发声能力的“输出”。因为当你坚持大声朗读，你的口腔肌肉肯定会得到锻炼。<b>一旦你把一篇磕磕碰碰的文章读得顺畅流利，你以前“谨小慎微”的说话，就会变成“字正腔圆”的大方表达</b>。别人听起来你的话，也会觉得悦耳舒服。很多主持人要念绕口令来锻炼口腔，要的就是这种效果。</p><p><b>没有人喜欢阴气沉沉，含糊不清的说话方式的，大声朗读就是让自己说话时候的“精气神”得到展现，说话充满热情，而不是闪闪缩缩，毫无底气的感觉。</b></p><p>只要坚持这样做，你的表达能力一定会大有长进，你的自信心也会随之提高很多。</p><blockquote><p><b>应变能力的培养</b></p></blockquote><p>不会应变能力的人，再会说话也少了一些聪慧的感觉。</p><p>你能想象出来，当你说话期间，突然遇到别人的诘难和挑衅时，你哑口无言，不知所措，进退两难的样子有多尴尬吗？你能想象出来，当你跟喜欢的人聊天聊着聊着，突然陷入冷场，而找不到话题时的样子有多无助吗？</p><p>这就是缺乏应变能力的表现。</p><p>所谓<b>应变能力，就是因应客观的情况而选出一个最适合的方式去应对问题的能力</b>。</p><p>你遇到冷场这个情况，当然就要做出一些事来打破这个冷场。这个“做出一些事”，指的就是适合的方式。不一定是找话题，也可以是看到月光很美，你跟谈话者抒发出自己的情感也没问题，只要用事情去填补冷场的空隙，让气氛不那么尴尬，就是适合的方式。</p><p>同理，你说话时遇到挑衅的人，破口大骂当然不是最适合的方式，你因时因地因人而说出一些话来回应，起到的效果也很好。例如建国初期有美国记者特意刁难周恩来总理，问中国有没有妓女？要怎么回答呢？</p><p>说有，又不符合中国的国情；说没有，说显得太假。这些都不是适合的方式。所以最后周总理就说：“有，在中国台湾省！”出乎意料，看上去又“合情合理”。</p>', '1', '1356652800000', '6', '0', '0', null);
INSERT INTO `article` VALUES ('17', '提高你设计审美的那些网站', '<p>lalalalalala</p>', '0', '1356652804444', '8', '0', '0', null);

-- ----------------------------
-- Table structure for articlecomment
-- ----------------------------
DROP TABLE IF EXISTS `articlecomment`;
CREATE TABLE `articlecomment` (
  `commentId` int(11) NOT NULL AUTO_INCREMENT,
  `Articleid` int(12) NOT NULL,
  `comerid` int(11) NOT NULL,
  `content` text,
  `time` bigint(20) DEFAULT NULL,
  `parentId` int(11) DEFAULT NULL,
  PRIMARY KEY (`commentId`),
  KEY `Aid` (`Articleid`),
  KEY `comerid` (`comerid`),
  KEY `parentid` (`parentId`),
  CONSTRAINT `Aid` FOREIGN KEY (`Articleid`) REFERENCES `article` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `comerid` FOREIGN KEY (`comerid`) REFERENCES `_user` (`Uid`) ON DELETE CASCADE ON UPDATE CASCADE,
  CONSTRAINT `parentid` FOREIGN KEY (`parentId`) REFERENCES `articlecomment` (`commentId`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of articlecomment
-- ----------------------------
INSERT INTO `articlecomment` VALUES ('1', '12', '11', '搞活动官方活动覆盖会', null, null);
INSERT INTO `articlecomment` VALUES ('8', '12', '1', '很好', '1483454538925', null);
INSERT INTO `articlecomment` VALUES ('10', '12', '1', 'adgadfgdafg', '1483522096659', '1');
INSERT INTO `articlecomment` VALUES ('11', '13', '1', '登录状态', '1483544770465', null);
INSERT INTO `articlecomment` VALUES ('12', '13', '10', '二级回复', '1483545254103', '11');

-- ----------------------------
-- Table structure for buygood
-- ----------------------------
DROP TABLE IF EXISTS `buygood`;
CREATE TABLE `buygood` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `buyid` int(11) DEFAULT NULL,
  `goodid` int(11) DEFAULT NULL,
  `time` datetime DEFAULT NULL,
  `number` int(11) DEFAULT '1',
  PRIMARY KEY (`id`),
  KEY `buyid` (`buyid`),
  KEY `goodid` (`goodid`),
  CONSTRAINT `buyid` FOREIGN KEY (`buyid`) REFERENCES `_user` (`Uid`),
  CONSTRAINT `goodid` FOREIGN KEY (`goodid`) REFERENCES `goods` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of buygood
-- ----------------------------
INSERT INTO `buygood` VALUES ('13', '10', '3', null, '20');
INSERT INTO `buygood` VALUES ('16', '10', '1', null, '15');
INSERT INTO `buygood` VALUES ('23', '1', '2', null, '6');
INSERT INTO `buygood` VALUES ('24', '1', '3', null, '2');
INSERT INTO `buygood` VALUES ('25', '1', '1', null, '1');

-- ----------------------------
-- Table structure for goods
-- ----------------------------
DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of goods
-- ----------------------------
INSERT INTO `goods` VALUES ('1', '《飞鸟集》', '25.00', '../images/img1.jpg', '《飞鸟集》中很多诗歌是用孟加拉文创作的，这部诗集最早由郑振铎先生译介到中国。');
INSERT INTO `goods` VALUES ('2', '《web》', '56.00', '../images/img2.jpg', '本书主要介绍了如何使用现有的Web 相关技术构建Android 应用程序。');
INSERT INTO `goods` VALUES ('3', 'dfgdfg', '37.00', '../images/img3.jpg', '用文字打败时间。冯唐最畅销作品，杂文才是其销量最好、最受欢迎的作品。');
INSERT INTO `goods` VALUES ('4', 'fghjfghj 覆盖发', '74.00', '../images/img4.jpg', '本书主要介绍了如何使用现有的Web 相关技术构建Android 应用程序。');
INSERT INTO `goods` VALUES ('5', 'cdfgdfg', '83.00', '../images/img5.jpg', '用文字打败时间。冯唐最畅销作品,杂文才是其销量最好、最受欢迎的作品。');
INSERT INTO `goods` VALUES ('6', 'dfgdfg fdghfg', '16.00', '../images/img1.jpg', '《飞鸟集》中很多诗歌是用孟加拉文创作的，这部诗集最早由郑振铎先生译介到中国。');

-- ----------------------------
-- Table structure for ipstatistics
-- ----------------------------
DROP TABLE IF EXISTS `ipstatistics`;
CREATE TABLE `ipstatistics` (
  `ip` varchar(255) NOT NULL,
  `AIpid` int(11) NOT NULL,
  KEY `Aipid` (`AIpid`),
  CONSTRAINT `Aipid` FOREIGN KEY (`AIpid`) REFERENCES `article` (`id`) ON DELETE CASCADE ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of ipstatistics
-- ----------------------------
INSERT INTO `ipstatistics` VALUES ('1', '12');
INSERT INTO `ipstatistics` VALUES ('1', '13');
INSERT INTO `ipstatistics` VALUES ('1', '15');
INSERT INTO `ipstatistics` VALUES ('1', '16');

-- ----------------------------
-- Table structure for _user
-- ----------------------------
DROP TABLE IF EXISTS `_user`;
CREATE TABLE `_user` (
  `Uid` int(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(20) CHARACTER SET utf8 NOT NULL,
  `password` varchar(20) CHARACTER SET utf8 NOT NULL,
  PRIMARY KEY (`Uid`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=latin1;

-- ----------------------------
-- Records of _user
-- ----------------------------
INSERT INTO `_user` VALUES ('1', 'grace', '123456');
INSERT INTO `_user` VALUES ('6', 'dfdf', '4564');
INSERT INTO `_user` VALUES ('7', 'dfdfsdgsf', '4564');
INSERT INTO `_user` VALUES ('8', '傲娇的黄同学', '123456');
INSERT INTO `_user` VALUES ('9', 'dfdfsdgsf风格化', '4564');
INSERT INTO `_user` VALUES ('10', '傲娇', '123456');
INSERT INTO `_user` VALUES ('11', '123456', '123456');
