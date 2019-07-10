SET NAMES UTF8;
DROP DATABASE IF EXISTS wy;
CREATE DATABASE wy CHARSET=UTF8;
USE wy;

#用户
CREATE TABLE wy_user(
	uid	INT PRIMARY KEY AUTO_INCREMENT,
	phone VARCHAR(11) NOT NULL UNIQUE,
	upwd VARCHAR(32),
	uname VARCHAR(32),
	uimg VARCHAR(32)
);
INSERT INTO wy_user VALUES(null,'12345678910',md5(md5('123456')),'Tom','user1.jpg');
INSERT INTO wy_user VALUES(null,'00000000000',md5(md5('123456')),'Acc','user2.jpg');


#歌曲详情music
CREATE TABLE wy_music(
	id INT PRIMARY KEY AUTO_INCREMENT,
	img VARCHAR(255),
	name VARCHAR(32),		#歌名
	Arter VARCHAR(32),		#歌手
	special VARCHAR(32),	#专辑
	path VARCHAR(255) 		#歌曲路径 托管
);
INSERT INTO wy_music VALUES(null,'mv_2.jpg','name1','Arter1',"special1",'m_bfsdla.mp3');
INSERT INTO wy_music VALUES(null,'303.jpg','name2','Arter2',"special2",'m_baga.mp3');

#推荐歌单tjsheet
CREATE TABLE wy_tjsheet(
 tid INT PRIMARY KEY AUTO_INCREMENT,
 simg VARCHAR(255),
 uimg VARCHAR(255),
 sname VARCHAR(64),
 suname VARCHAR(64),
 detail VARCHAR(255),
 ids VARCHAR(255)
);
INSERT INTO wy_tjsheet VALUES(null,'sheet1.jpg','user1.jpg','夏至已至：准备好躁动的心','Tataaaaaaa_','夏至是二十四节气之一，夏至这天，太阳几乎直射北回归线，夏至到来后，夜空星象也逐渐变成夏季星空，真好','1,2');

#我的歌单sheet
CREATE TABLE wy_sheet(
 lid INT PRIMARY KEY AUTO_INCREMENT,
 uid INT,
 img VARCHAR(255),
 lname VARCHAR(64),
 count INT,
 ids VARCHAR(255)
);
INSERT INTO wy_sheet VALUES(null,1,'mv_2.jpg','小循环',1,'1');
INSERT INTO wy_sheet VALUES(null,1,'dj.jpg','小节奏',2,'1,2');
INSERT INTO wy_sheet VALUES(null,1,'303.jpg','小心情',1,'2');

#朋友
CREATE TABLE wy_friend(
 fid INT PRIMARY KEY AUTO_INCREMENT,
 name VARCHAR(32),
 number VARCHAR(32),
 text VARCHAR(255),
 img VARCHAR(255)
);
INSERT INTO wy_friend VALUES(null,'情思天鹅','19.1万','恋爱中两个最好的状态是什么？最真实的自己，恰好相互吸引的两颗心。','301.jpg');
INSERT INTO wy_friend VALUES(null,'情思天鹅','19.1万','恋爱中两个最好的状态是什么？最真实的自己，恰好相互吸引的两颗心。','303.jpg');
INSERT INTO wy_friend VALUES(null,'情思天鹅','19.1万','恋爱中两个最好的状态是什么？最真实的自己，恰好相互吸引的两颗心。','mv_2.jpg');




# FOREIGN KEY(id) REFERENCES wy_music(id)