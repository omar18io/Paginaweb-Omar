-- Crear la base de datos
-- CREATE DATABASE IF NOT EXISTS GestionNotas;
-- USE GestionNotas;
USE formDatos;
-- Tabla Alumnos
CREATE TABLE Alumnos (
    ID_Alumno INT AUTO_INCREMENT,
    Nombre VARCHAR(100),
    ID_Seccion INT,
    PRIMARY KEY (ID_Alumno)
    -- CONSTRAINT FK_Seccion_Alumno FOREIGN KEY (ID_Seccion) REFERENCES Secciones(ID_Seccion)
);
-- hacer despue las restricciones depues de tu haber creado tus tablas en la bd
ALTER TABLE Alumnos
ADD CONSTRAINT FK_Seccion_Alumno FOREIGN KEY (ID_Seccion) REFERENCES Secciones(ID_Seccion);

-- Tabla Profesores
CREATE TABLE Profesores (
    ID_Profesor INT AUTO_INCREMENT,
    Nombre VARCHAR(100),
    PRIMARY KEY (ID_Profesor)
);

-- Tabla Secciones
CREATE TABLE Secciones (
    ID_Seccion INT AUTO_INCREMENT,
    Nombre_Seccion VARCHAR(2),
    ID_Grado INT,
    PRIMARY KEY (ID_Seccion)
    -- CONSTRAINT FK_Grado_Seccion FOREIGN KEY (ID_Grado) REFERENCES Grados(ID_Grado)
);
-- hacer despue las restricciones depues de tu haber creado tus tablas en la bd
ALTER TABLE Secciones
ADD CONSTRAINT FK_Grado_Seccion FOREIGN KEY (ID_Grado) REFERENCES Grados(ID_Grado);

-- Tabla Grados
CREATE TABLE Grados (
    ID_Grado INT AUTO_INCREMENT,
    Nombre_Grado VARCHAR(100),
    PRIMARY KEY (ID_Grado)
);

-- Tabla Notas
CREATE TABLE Notas (
    ID_Nota INT AUTO_INCREMENT,
    ID_Alumno INT,
    ID_Curso INT,
    ID_Profesor INT,
    Nota DECIMAL(4, 2),
    PRIMARY KEY (ID_Nota)
    -- CONSTRAINT FK_Alumno FOREIGN KEY (ID_Alumno) REFERENCES Alumnos(ID_Alumno),
    -- CONSTRAINT FK_Curso FOREIGN KEY (ID_Curso) REFERENCES Cursos(ID_Curso),
    -- CONSTRAINT FK_Profesor FOREIGN KEY (ID_Profesor) REFERENCES Profesores(ID_Profesor)
);

ALTER TABLE Notas
ADD CONSTRAINT FK_Alumno FOREIGN KEY (ID_Alumno) REFERENCES Alumnos(ID_Alumno),
ADD CONSTRAINT FK_Curso FOREIGN KEY (ID_Curso) REFERENCES Cursos(ID_Curso),
ADD CONSTRAINT FK_Profesor FOREIGN KEY (ID_Profesor) REFERENCES Profesores(ID_Profesor);

-- Tabla Cursos
CREATE TABLE Cursos (
    ID_Curso INT AUTO_INCREMENT,
    Nombre_Curso VARCHAR(100),
    PRIMARY KEY (ID_Curso)
);
SELECT * FROM Grados;
-- DROP DATABASE gestionnotas;

-- Insertar datos en la tabla Grados
INSERT INTO Grados (Nombre_Grado) VALUES ('Primero');
INSERT INTO Grados (Nombre_Grado) VALUES ('Segundo');
-- Puedes seguir con otros grados

-- Insertar datos en la tabla Secciones asociadas a un grado
INSERT INTO Secciones (Nombre_Seccion, ID_Grado) VALUES ('A', 1); -- Sección A del primer grado
INSERT INTO Secciones (Nombre_Seccion, ID_Grado) VALUES ('B', 1); -- Sección B del primer grado
-- Puedes seguir con otras secciones

-- Insertar datos en la tabla Profesores
INSERT INTO Profesores (Nombre) VALUES ('Omar Felix');
INSERT INTO Profesores (Nombre) VALUES ('Mayra Ale');
-- Puedes seguir con otros profesores

-- Insertar datos en la tabla Cursos
INSERT INTO Cursos (Nombre_Curso) VALUES ('Matemáticas');
INSERT INTO Cursos (Nombre_Curso) VALUES ('Ciencias');
-- Puedes seguir con otros cursos

-- Insertar datos en la tabla Alumnos asociados a una sección
INSERT INTO Alumnos (Nombre, ID_Seccion) VALUES ('Juan', 1); -- Juan en Sección A del primer grado
INSERT INTO Alumnos (Nombre, ID_Seccion) VALUES ('Paula', 2); -- María en Sección B del primer grado
-- Puedes seguir con otros alumnos

-- Insertar datos en la tabla Notas
INSERT INTO Notas (ID_Alumno, ID_Curso, ID_Profesor, Nota) VALUES (1, 1, 1, 85.5); -- Nota de Juan en Matemáticas con Profesor 1
INSERT INTO Notas (ID_Alumno, ID_Curso, ID_Profesor, Nota) VALUES (2, 2, 2, 90.0); -- Nota de María en Ciencias con Profesor 2
-- Puedes seguir con otras notas

-- Ver todos los registros de la tabla Alumnos
SELECT * FROM Alumnos;

-- Ver todos los registros de la tabla Profesores
SELECT * FROM Profesores;

-- Ver todos los registros de la tabla Secciones
SELECT * FROM Secciones;

-- Ver todos los registros de la tabla Grados
SELECT * FROM Grados;

-- Ver todos los registros de la tabla Notas
SELECT * FROM Notas;

-- Ver todos los registros de la tabla Cursos
SELECT * FROM Cursos;

-- Ver solo los alumnos del primer grado
SELECT * FROM Alumnos WHERE ID_Seccion IN (SELECT ID_Seccion FROM Secciones WHERE ID_Grado = 1);

-- Ver las notas de un curso específico
SELECT * FROM Notas WHERE ID_Curso = 1;

-- Ver los profesores con un nombre específico
SELECT * FROM Profesores WHERE Nombre = 'Omar Felix';




