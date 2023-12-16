create database formdatos;

-- use fechasCivicas;
USE formdatos;
create table calendarie (
	IDCAL int auto_increment,
    NAMECAL varchar(100),
    IMAGEN varchar(255),
    DESCAL varchar(500),
    DATECAL date,
    PRIMARY KEY (IDCAL)
);
-- DROP TABLE calendarie;
-- Insertar
insert into calendarie (NAMECAL, IMAGEN, DESCAL, DATECAL) VALUES ("Dia De los Muertos Omar","https://facialix.com/wp-content/uploads/2023/07/python-inteligencia-artificial-facialix.jpg", "Que sale Hoy es Hallowen Go Tono Xd Q estres Ya Parenme", (STR_TO_DATE("19/11/2023", "%d/%m/%Y")));
-- Mostrar
SELECT * FROM calendarie;
-- actualizar
UPDATE Calendarie SET calendarie.NAMECAL = 'ROMA', calendarie.DESCAL = 'Prueba de Modificacion', calendarie.DATECAL = (STR_TO_DATE("14/11/2023", "%d/%m/%Y"))  WHERE calendarie.IDCAL = 1;
-- eliminar
DELETE FROM calendarie WHERE calendarie.IDCAL = 8;



SELECT NAMECAL, DESCAL, date_format(DATECAL, '%d/%m/%Y') AS DATECAL FROM calendarie;





