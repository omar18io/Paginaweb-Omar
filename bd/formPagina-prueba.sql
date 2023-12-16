CREATE DATABASE formDatos;

USE formDatos; -- Usar la base de datos formDatos si no se está usando actualmente

CREATE TABLE DatosPersonales (
    id INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(60) CHECK (Nombre REGEXP '^[A-Za-z ]+$'),
    Apellido VARCHAR(60) CHECK (Apellido REGEXP '^[A-Za-z ]+$'),
    CorreoElectronico VARCHAR(90) CHECK (CorreoElectronico REGEXP '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}$'),
    Telefono VARCHAR(9) CHECK (LENGTH(Telefono) = 9 AND Telefono REGEXP '^[0-9]+$'),
    Mensaje TEXT
);
select * from DatosPersonales;
-- traer los registros de los datos
select * from DatosPersonales;
-- insertar datos a la tabla
INSERT INTO DatosPersonales(Nombre, Apellido, CorreoElectronico, Telefono, Mensaje) VALUES ("Omar Felix", "Rivera Rosas", "omar.rivera@vallegrande.edu.pe", "930720474", "Yo creo que faltaria una parte de login para que los profesores vean en una tabla con otros mas datos pero muy genial");
-- eliminar la tabla
-- DROP TABLE DatosPersonales;
-- modifucar la tabla hicimos q puedo contener espaciados
-- ALTER TABLE DatosPersonales
-- MODIFY Nombre VARCHAR(60) CHECK (Nombre REGEXP '^[A-Za-z ]+$'),
-- MODIFY Apellido VARCHAR(60) CHECK (Apellido REGEXP '^[A-Za-z ]+$');






