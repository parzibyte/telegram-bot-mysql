CREATE TABLE mascotas(
    id integer NOT NULL AUTO_INCREMENT,
    nombre varchar(255),
    creada_por varchar(255) NOT NULL,
    timestamp_mensaje BIGINT UNSIGNED NOT NULL,
    PRIMARY KEY(id)
);