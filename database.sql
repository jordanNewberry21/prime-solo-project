
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
----------------------------------------------------
---------- TABLES ----------------------------------

CREATE TABLE "user" (
	id SERIAL PRIMARY KEY,
	"username" VARCHAR (100) UNIQUE NOT NULL,
	"password" VARCHAR (1000) NOT NULL,
	"first_name" VARCHAR (30),
	"last_name" VARCHAR (50),
	"street" VARCHAR (200),
	"city" VARCHAR (100),
	"state" VARCHAR (25),
	"zip" VARCHAR (15),
	"admin" BOOLEAN DEFAULT false
); -- NOTE -- "admin" property must be changed manually in postico to "true"
   -- to have access to the admin features of the application. 
   -- the "username" does not have to be admin or anything like that, just change the admin value

CREATE TABLE "product" (
	id SERIAL PRIMARY KEY,
	"name" VARCHAR (150) NOT NULL,
	"description" VARCHAR (2000) NOT NULL,
	"price" VARCHAR (25) NOT NULL,
	"image" VARCHAR (5000) NOT NULL,
	"quantity" INT DEFAULT 1,
	"sold" BOOLEAN DEFAULT false,
	"featured" BOOLEAN DEFAULT false
);

CREATE TABLE "order" (
	id SERIAL PRIMARY KEY,
	"user_id" INT REFERENCES "user",
	"order_status" BOOLEAN DEFAULT false
);

CREATE TABLE "product_order" (
	id SERIAL PRIMARY KEY,
	"product_id" INT REFERENCES "product",
	"order_id" INT REFERENCES "order"
);

--------------------------------------------------------------
-------------------- INSERTS ---------------------------------
                  
                  
INSERT INTO "product" ("name", "description", "price", "image") 
VALUES ('Armoire', 'Rustic antique armoire. This piece has been sanded down and re-finished to bring it back to its former glory! Advanced painting techniques are applied to give it the textured look you see in the photo here. This is a really functional piece, so its not just for looks! Its a perfect fit in any bedroom.', '149.99', 'https://scontent-msp1-1.xx.fbcdn.net/v/t1.0-9/138919281_10224494588127757_2628845947992794381_n.jpg?_nc_cat=109&ccb=2&_nc_sid=0debeb&_nc_ohc=MsTC5uFFguwAX9osySz&_nc_ht=scontent-msp1-1.xx&oh=13feeeda0ef867843fc10ad435a0e723&oe=6022EA22'), ('Decorative Carrying Tray', 'This piece is very stylish, with rustic brass handles on sides and feet, this makes a nice centerpiece for any table. Stencil design spray painted on to add some pizzazz. Paris!', '39.99', 'https://scontent-msp1-1.xx.fbcdn.net/v/t1.0-9/136806805_10224494589967803_3608298245109825592_n.jpg?_nc_cat=107&ccb=2&_nc_sid=0debeb&_nc_ohc=v-esjb37BGgAX9NmqgN&_nc_ht=scontent-msp1-1.xx&oh=8d9f5cc675c9781bb7f2e8c64a69010f&oe=6021124F'), ('Desk / Table', 'This piece is really what you make of it.', '24.99', 'https://scontent-msp1-1.xx.fbcdn.net/v/t1.0-9/138237636_10224494591407839_9136636094695155180_n.jpg?_nc_cat=109&ccb=2&_nc_sid=0debeb&_nc_ohc=0FdAuci1NU8AX9JTJaZ&_nc_ht=scontent-msp1-1.xx&oh=b0ba3ec2be572f037118b13ace7f2acd&oe=602434E4');


INSERT INTO "order" ("user_id")
VALUES (2);


INSERT INTO "product_order" ("product_id", "order_id")
VALUES (1, 1);

INSERT INTO "product_order" ("product_id", "order_id")
VALUES (2, 1);