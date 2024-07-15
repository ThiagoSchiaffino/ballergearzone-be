insert into roles (codigo, nombre) values ('ADM', 'Administrador');
insert into roles (codigo, nombre) values ('USR', 'Usuario');

insert into usuarios (email, password, activo, rolID) values ('admin@ballersgearzone.com','123456', 1, 1);

select * from usuarios