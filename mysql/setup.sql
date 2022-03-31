use nodedb

create table people(
    ID int AUTO_INCREMENT PRIMARY KEY,
    NAME varchar(50) NOT NULL,
    CREATED datetime
);
