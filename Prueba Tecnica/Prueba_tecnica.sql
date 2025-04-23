create database Prueba_tecnica 
use Prueba_tecnica

create table usuarios (
id INT IDENTITY PRIMARY KEY,
nombre VARCHAR (20) NOT NULL,
edad INT NOT NULL,
correo VARCHAR (50) NOT NULL
);

INSERT INTO usuarios (nombre, edad, correo) VALUES
('Ana' , '22' , 'ana@mail.com'),
('Luis', '28' , 'luis@mail.com'),
('Marta' , '35' , 'marta@mail.com'),
('Santiago', '32' , 'santiago@mail.com');

-- Usuarios mayores a 25 años 
select nombre , edad
from usuarios
where edad > 25;

-- Solo nombres
select nombre 
from usuarios;




