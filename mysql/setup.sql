use nodedb

create table people(
    id int auto_increment primary key,
    name varchar(250)
);

insert into people values (1,'Carlos');
insert into people values  (2,'Pedro');
insert into people values (3,'Israel');