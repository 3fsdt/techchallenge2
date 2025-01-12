CREATE DATABASE IF NOT EXISTS pos_db CHARACTER SET utf8 COLLATE utf8_unicode_ci;
USE pos_db;
CREATE TABLE IF NOT EXISTS postagens (
    id INT(11) NOT NULL AUTO_INCREMENT,
    titulo VARCHAR(255) NOT NULL,
    autor VARCHAR(255) NOT NULL,
    conteudo TEXT NOT NULL,
    PRIMARY KEY (id),
    UNIQUE KEY (id)
);

INSERT INTO postagens (titulo,autor,conteudo) VALUES
('Titulo 1','Autor 1','Conteudo 1'),
('Titulo 2','Autor 2','Conteudo 2'),
('Titulo 3','Autor 3','Conteudo 3');