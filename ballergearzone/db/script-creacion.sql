create schemas if not exists ballersgearzone;

use ballersgearzone;

create table if not exists roles (
   rolID integer auto_increment,
   codigo VARCHAR(3),
   nombre VARCHAR(50),
   primary key (rolID)
);

create table if not exists usuarios (
   usuarioID integer auto_increment,
   email VARCHAR(256) not null,
   password VARCHAR(100),
   activo tinyint,
   rolID integer,
   primary key (usuarioID),
   constraint FK_usuarios_roles foreign key (rolID) references roles (rolID)
);

create table if not exists productos (
productoId int not null auto_increment,
precio int not null,
foto varchar(90),
stock int not null,
equipo varchar(200),
descripcion varchar (300),
fotodelete varchar (400),
camisetade varchar (80),
zona int not null,
primary key (productoID)
);

CREATE TABLE IF NOT EXISTS registroDeVentas (
    ventaID INT NOT NULL AUTO_INCREMENT,
    fecha DATE,
    productoId INT,
    usuarioID INT,
    PRIMARY KEY (ventaID),
    CONSTRAINT FK_registroDeVentas_usuarios FOREIGN KEY (usuarioID) REFERENCES usuarios(usuarioID),
    CONSTRAINT FK_registroDeVentas_productos FOREIGN KEY (productoId) REFERENCES productos(productoId)
);
