CREATE TABLE mascotas(
    id integer NOT NULL AUTO_INCREMENT,
    nombre varchar(255),
    creada_por varchar(255) NOT NULL,
    fecha_creacion varchar(255) NOT NULL,
    PRIMARY KEY(id)
);