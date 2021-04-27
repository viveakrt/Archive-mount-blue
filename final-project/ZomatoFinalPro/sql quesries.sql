drop database zomatoTest;
create database zomatoTest;
use zomatoTest;
drop table review;

select * from placeOrder;
select* from inOrder;
select*from customer;
select * from restaurant; 
select * from foodItem;
select * from locationHasRestaurant;
select * from location;
select * from category;

show tables;



-- category
insert into category ( id_category, category_name) values ('','');
insert into category ( id_category, category_name) values ('1','Salads');
insert into category ( id_category, category_name) values ('2','Beverages');
insert into category ( id_category, category_name) values ('3','Startid_location_locationsers');
insert into category ( id_category, category_name) values ('4','Main Course');
insert into category ( id_category, category_name) values ('5','Dessert');
insert into category ( id_category, category_name) values ('6','Pizzas');

-- restaurant
insert into restaurant (id_restaurant, restaurant_name, email, phone_number, description, restaurant_image, city_name) values ( '', '', '', '', '' , '');
insert into restaurant (id_restaurant, restaurant_name, email, phone_number, description, restaurant_image,city_name) values ( '1','Hungry Bird', 'hungry@gmail.com', '9584525145', ' Biryani, North Indian, Chinese, Rolls, Fast Food', 'https://b.zmtcdn.com/data/pictures/8/18747258/62d037355289460eb5e1ab70bcb16309.jpg' ,'Bengaluru');
insert into restaurant (id_restaurant, restaurant_name, email, phone_number, description, restaurant_image,city_name) values( '2','Dominos Pizza', 'dominos@email.com', '818782584',' Pizza, Fast Food, Italian','https://b.zmtcdn.com/data/dish_photos/643/32ef0972970366efec1fd0838705a643.png' , 'Bengaluru');
insert into restaurant (id_restaurant, restaurant_name, email, phone_number, description, restaurant_image,city_name) values('3', 'Donne Biryani Junction', 'donbriyani@gmail.com','9874859576','Biryani, North Indian, Chinese, Rolls, Fast Food','https://b.zmtcdn.com/data/pictures/5/19411975/e75137fbe36792bb8242cb04ee27cad3_o2_featured_v2.jpg' ,  'Bengaluru');
insert into restaurant (id_restaurant, restaurant_name, email, phone_number, description, restaurant_image,city_name) values('4', 'KFC', 'kfc@gmail.com', '9845155544','Chiken leg, Burger, Fast Food, Beverages', 'https://b.zmtcdn.com/data/pictures/chains/4/19031264/9410759d611db9c62c3acc23c1f27e06_o2_featured_v2.jpg' ,'Bengaluru');
insert into restaurant (id_restaurant, restaurant_name, email, phone_number, description, restaurant_image,city_name) values('5', 'Chaatimes', 'chattime@gmail.com', '987654321','Street food','https://b.zmtcdn.com/data/pictures/3/56883/bbfe340b59d7245d58c700f8c23ec931.jpg' , 'Bengaluru');
insert into restaurant (id_restaurant, restaurant_name, email, phone_number, description, restaurant_image,city_name) values('6', 'Delhi Grills', 'deliburger@gamil.com', '7984658988', 'Biryani, North Indian, Chinese, Rolls, Fast Food','https://b.zmtcdn.com/data/pictures/chains/1/60551/dd3d9d72aa9eae7563ca449fb1e87c6f_o2_featured_v2.jpg' , 'Delhi');
insert into restaurant (id_restaurant, restaurant_name, email, phone_number, description, restaurant_image,city_name) values('7','McDonalds','mcdanals@gmail.com','8484878945','Burger, fast food, beverages , Heathly, Chicken','https://b.zmtcdn.com/data/pictures/9/56579/98f61bae7f08ccd13f1522c72700c536.jpg','Delhi');
insert into restaurant (id_restaurant, restaurant_name, email, phone_number, description, restaurant_image, city_name) values ( '8', 'FreshMenu', 'fresh@mail.com', '213458778', 'Chinese, Continental, Italian, Healthy Food, North Indian, Desserts' , 'https://b.zmtcdn.com/data/pictures/9/59179/11a09cd0b3d5c01ea5d5208f0d9fe41c.jpg','Delhi');
insert into restaurant (id_restaurant, restaurant_name, email, phone_number, description, restaurant_image, city_name) values ( '9', 'Chicken Kabab Magic', 'cken@gmail.com', '123512350', 'Heathy chicken, North Indian, Kebab, Hyderabadi, Chines' , 'https://b.zmtcdn.com/data/pictures/0/52530/fe3ce0de1cfea180f45db13a85134796.jpg','Delhi');
insert into restaurant (id_restaurant, restaurant_name, email, phone_number, description, restaurant_image, city_name) values ( '10', 'Pizza Hut', 'chickenhut@gmail.com', '1232546545', 'Healthy, Pizza, Italian, Beverages, chicken pizzas' , 'https://b.zmtcdn.com/data/pictures/8/51418/ba50a5176f9b3abf84a4b734543474a2.jpg','Delhi');


-- Food item
insert into  foodItem (item_id, item_name, description, id_category, price, is_veg, id_restaurant, item_image) values ('1','Special Boneless Chicken Biryani','Boneless best in Town','4','259','1','1','https://b.zmtcdn.com/data/dish_photos/a40/7c4fc78428da8889425e415fb4860a40.jpg');
insert into  foodItem (item_id, item_name, description, id_category, price, is_veg, id_restaurant, item_image) values ('2','Tandoori Chicken','Fresh and spicy','4','240','1','1','https://b.zmtcdn.com/data/dish_photos/f09/ec263dbd6dbb02338d1f8a923b41df09.jpg');
insert into  foodItem (item_id, item_name, description, id_category, price, is_veg, id_restaurant, item_image) values ('3','Chicken Dum Biryani','Fresh and spicy','4','249','1','1','https://b.zmtcdn.com/data/dish_photos/012/b98f47e6521e4f6539c865fb0f5f6012.jpg');
insert into  foodItem (item_id, item_name, description, id_category, price, is_veg, id_restaurant, item_image) values ('4','Gulab Jamun','Indian best dessert','5','50','0','1','https://b.zmtcdn.com/data/dish_photos/344/d92c216f570d1250ff7bcec34b40f344.jpg');

-- pizza
insert into  foodItem (item_id, item_name, description, id_category, price, is_veg, id_restaurant, item_image) values ('5','Farmhouse','Delightful combination of onion, capsicum, tomato & grilled mushroom','6','215','0','2','https://b.zmtcdn.com/data/dish_photos/a3d/7ca006ec8907c2ae13fd006cf0853a3d.png');
insert into  foodItem (item_id, item_name, description, id_category, price, is_veg, id_restaurant, item_image) values ('6','Indi Tandoori Paneer','It is hot. It is spicy. It is oh-so-Indian. Tandoori paneer with capsicum, red paprika & mint mayo','6','235','0','2','https://b.zmtcdn.com/data/dish_photos/665/febfde767bd3543e6b8d9094f2531665.jpg');
insert into  foodItem (item_id, item_name, description, id_category, price, is_veg, id_restaurant, item_image) values ('7','Veggie Paradise','The awesome foursome! Golden corn, black olives, capsicum, red paprika','6','215','0','2','https://b.zmtcdn.com/data/dish_photos/08f/fe512af3ec693c508e8f10e3080d908f.jpg');
insert into  foodItem (item_id, item_name, description, id_category, price, is_veg, id_restaurant, item_image) values ('8','Chicken Golden Delight','Double pepper barbecue chicken, golden corn and extra cheese, true delight','6','235','1','2','https://b.zmtcdn.com/data/dish_photos/21e/78a70ba0b889eddef398ebc530e1721e.jpg');
insert into  foodItem (item_id, item_name, description, id_category, price, is_veg, id_restaurant, item_image) values ('9','Chicken Dominator','Loaded with double pepper barbecue chicken, peri-peri chicken, chicken tikka & grilled chicken rashers','6','305','1','2','https://b.zmtcdn.com/data/dish_photos/587/e49cb122543d7895346050a0c7528587.jpg');
-- baverages
insert into  foodItem (item_id, item_name, description, id_category, price, is_veg, id_restaurant, item_image) values ('10','Pepsi (500ml)','Sparkling and Refreshing Beverage','2','60','0','2','https://b.zmtcdn.com/data/dish_photos/39c/5c664f31bc3cf58a9e9f745ca384639c.png');
insert into  foodItem (item_id, item_name, description, id_category, price, is_veg, id_restaurant, item_image) values ('11','Slice (350ml)','Great Mango Taste','2','50','0','2','https://b.zmtcdn.com/data/dish_photos/5f3/30f93fa8057f90e70ca41aa61ddd35f3.jpg');
insert into  foodItem (item_id, item_name, description, id_category, price, is_veg, id_restaurant, item_image) values ('12','7UP (500ml)','Refreshing clear drink with a natural lemon flavor','2','60','0','2','https://b.zmtcdn.com/data/dish_photos/69d/c5098fecc4908d0406591fd6bad5d69d.jpg');
insert into  foodItem (item_id, item_name, description, id_category, price, is_veg, id_restaurant, item_image) values ('13','Mirinda (500ml)','Delicious Orange Flavoured beverage','2','60','0','60','https://b.zmtcdn.com/data/dish_photos/1be/e14c758cec8df918d5e628dfaa3aa1be.jpg');

insert into  foodItem (item_id, item_name, description, id_category, price, is_veg, id_restaurant, item_image) values  ('13','McSaver McSpicy Chicken Meal','Teasty and healthy','4','253.34','1','7','https://b.zmtcdn.com/data/dish_photos/e4e/b9dbfea0872ff09004adb12f65ac5e4e.png');
insert into  foodItem (item_id, item_name, description, id_category, price, is_veg, id_restaurant, item_image) values ('14','','','','','','','');
insert into  foodItem (item_id, item_name, description, id_category, price, is_veg, id_restaurant, item_image) values ('15','','','','','','','');
insert into  foodItem (item_id, item_name, description, id_category, price, is_veg, id_restaurant, item_image) values ('16','','','','','','','');
insert into  foodItem (item_id, item_name, description, id_category, price, is_veg, id_restaurant, item_image) values ('17','','','','','','','');
insert into  foodItem (item_id, item_name, description, id_category, price, is_veg, id_restaurant, item_image) values ('18','','','','','','','');
insert into  foodItem (item_id, item_name, description, id_category, price, is_veg, id_restaurant, item_image) values ('19','','','','','','','');
insert into  foodItem (item_id, item_name, description, id_category, price, is_veg, id_restaurant, item_image) values ('20','','','','','','','');
insert into  foodItem (item_id, item_name, description, id_category, price, is_veg, id_restaurant, item_image) values ('21','','','','','','','');
insert into  foodItem (item_id, item_name, description, id_category, price, is_veg, id_restaurant, item_image) values ('22','','','','','','','');
insert into  foodItem (item_id, item_name, description, id_category, price, is_veg, id_restaurant, item_image) values ('23','','','','','','','');
insert into  foodItem (item_id, item_name, description, id_category, price, is_veg, id_restaurant, item_image) values ('24','','','','','','','');
insert into  foodItem (item_id, item_name, description, id_category, price, is_veg, id_restaurant, item_image) values ('25','','','','','','','');
insert into  foodItem (item_id, item_name, description, id_category, price, is_veg, id_restaurant, item_image) values ('26','','','','','','','');
insert into  foodItem (item_id, item_name, description, id_category, price, is_veg, id_restaurant, item_image) values ('27','','','','','','','');
insert into  foodItem (item_id, item_name, description, id_category, price, is_veg, id_restaurant, item_image) values ('28','','','','','','','');
insert into  foodItem (item_id, item_name, description, id_category, price, is_veg, id_restaurant, item_image) values ('29','','','','','','','');




-- Location 
insert into location ( id_location, latitude, longitude) values ('1','12.9219486386','77.6165360212');


-- locationHasRestaurant
insert into locationHasRestaurant ( Location_IdLocation, id_restaurant ) values ('1','1');



-- drop
-- DROP TABLE location;