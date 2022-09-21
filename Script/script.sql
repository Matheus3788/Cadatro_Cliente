create database WEBII;

use WEBII;

Create table `usuario`(
`id` int(11) not null Auto_increment,
`nome`  Varchar(50) null default null, 
`senha`  Varchar(50) null default null,
Primary Key (`id`));
