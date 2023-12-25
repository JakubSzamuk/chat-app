CREATE TABLE users (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  email varchar(255) NOT NULL,
  password varchar(255) NOT NULL,
);
CREATE TABLE sent_messages (
  id varchar(255) NOT NULL PRIMARY KEY,
  message_body mediumtext NOT NULL,
  sender_id varchar(255) NOT NULL,
  recipient_id varchar(255) NOT NULL,
  time datetime NOT NULL,
  message_key_range varchar(100) NOT NULL
);
CREATE TABLE app_keys (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  app_key varchar(255) NOT NULL,
);
CREATE TABLE temp_keys (
  id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
  key_id int NOT NULL,
  temp_key varchar(255) NOT NULL,
);