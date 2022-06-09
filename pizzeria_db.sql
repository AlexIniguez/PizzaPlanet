# Instrucción para crear una base de datos:
CREATE DATABASE IF NOT EXISTS pizzeria_db;

# Abrir la base de datos para modificarla:
USE pizzeria_db;

# Tabla de pizzas predeterminadas:
CREATE TABLE IF NOT EXISTS pizzaPredeterminada(
	id_pizzaPre TINYINT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(20) NOT NULL,
    descripcion TINYTEXT NOT NULL,
    ingredientes TINYTEXT NOT NULL,
    imagen VARCHAR(30),
    precio DECIMAL (4, 1),
    PRIMARY KEY (id_pizzaPre)
);

# Tabla de ordenes:
CREATE TABLE IF NOT EXISTS orden(
	id_orden INT NOT NULL AUTO_INCREMENT,
    fechaHora DATETIME DEFAULT CURRENT_TIMESTAMP,
    total DECIMAL(5, 1),
    PRIMARY KEY (id_orden)
);

# Tabla de tamaños:
CREATE TABLE IF NOT EXISTS tamanioPizza(
	id_tamanio INT NOT NULL AUTO_INCREMENT,
    nombre ENUM('Chica', 'Mediana', 'Grande', 'Extra Grande') NOT NULL,
    costoExtra DECIMAL (3, 1), 
    PRIMARY KEY (id_tamanio)
);

# Tabla de pedidos de pizzas predeterminadas (relación entre pizzas predeterminadas y orden)
CREATE TABLE IF NOT EXISTS pedidoPredeterminado(
	idPizzaPre TINYINT NOT NULL,
    idOrden INT NOT NULL,
    cantidad TINYINT UNSIGNED NOT NULL,
    idTamanio INT NOT NULL,
    subtotal DECIMAL (4, 1),
    PRIMARY KEY(idPizzaPre, idOrden),
    CONSTRAINT fk_pizzaPredeterminada_pedidoPredeterminado
		FOREIGN KEY (idPizzaPre)
        REFERENCES pizzaPredeterminada (id_pizzaPre)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
	CONSTRAINT fk_orden_pedidoPredeterminado
		FOREIGN KEY (idOrden)
		REFERENCES orden (id_orden)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    CONSTRAINT fk_tamanioPizza_pedidoPredeterminado
		FOREIGN KEY (idTamanio)
        REFERENCES tamanioPizza (id_tamanio)
		ON DELETE CASCADE
        ON UPDATE CASCADE
);

# Tabla de ingredientes:
CREATE TABLE IF NOT EXISTS ingrediente(
	id_ingrediente INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(20) NOT NULL,
    PRIMARY KEY (id_ingrediente)
);

# Tabla de pizzas personalizadas:
CREATE TABLE IF NOT EXISTS pizzaPersonalizada(
	id_pizzaPer INT NOT NULL AUTO_INCREMENT,
    precio DECIMAL (4, 1) NOT NULL,
    masa ENUM('Original', 'Italiana', 'Sartén', 'Orilla rellena de queso', 'Crunchy') NOT NULL,
    PRIMARY KEY (id_pizzaPer)
);

# Tabla de recetas (relación entre ingredientes y pizzas personalizadas)
CREATE TABLE IF NOT EXISTS receta(
	idPizzaPer INT NOT NULL,
    idIngrediente INT NOT NULL,
    PRIMARY KEY (idPizzaPer, idIngrediente),
		CONSTRAINT fk_pizzaPersonalizada_receta
			FOREIGN KEY (idPizzaPer)
			REFERENCES pizzaPersonalizada (id_pizzaPer)
			ON DELETE CASCADE
			ON UPDATE CASCADE,
		CONSTRAINT fk_ingrediente_receta
			FOREIGN KEY (idIngrediente)
            REFERENCES ingrediente (id_ingrediente)
            ON DELETE CASCADE
            ON UPDATE CASCADE
);

# Tabla de pedidos de pizzas personalizadas (relación entre pizzas personalizadas y orden)
CREATE TABLE IF NOT EXISTS pedidoPersonalizado(
	idPizzaPer INT NOT NULL,
    idOrden INT NOT NULL,
    cantidad TINYINT UNSIGNED NOT NULL,
    idTamanio INT NOT NULL,
    subtotal DECIMAL (4, 1),
    PRIMARY KEY(idPizzaPer, idOrden),
    CONSTRAINT fk_pizzaPersonalizada_pedidoPersonalizado
		FOREIGN KEY (idPizzaPer)
        REFERENCES pizzaPersonalizada (id_pizzaPer)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
	CONSTRAINT fk_orden_pedidoPersonalizado
		FOREIGN KEY (idOrden)
		REFERENCES orden (id_orden)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    CONSTRAINT fk_tamanioPizza_pedidoPersonalizado
		FOREIGN KEY (idTamanio)
        REFERENCES tamanioPizza (id_tamanio)
		ON DELETE CASCADE
        ON UPDATE CASCADE
);

INSERT INTO pizzaPredeterminada (nombre, descripcion, ingredientes, imagen, precio)
	VALUES ('Mexicana', 'Elaborada con los ingredientes habituales de la cocina mexicana.', 'Queso, salsa,
				chorizo, carne molida y chile jalapeño', 'pizzaMexicana.jpg', 100),
			('Al Pastor', 'Con esta fusión podrás disfrutar de ambas comidas en un solo mordisco, la exquisita 
				carne al pastor, los trocitos de piña y la cebolla caramelizada hacen de esta pizza, una 
                combinación ideal.', 'Queso, salsa, piña, carne al pastor y cebolla', 'pizzaPastor.jpg', 100),
			('Hawaiana', 'Combinación deliciosa de ingredientes que crean una mezcla de sabor salado y dulce.',
				'Queso, salsa, jamón y piña.', 'pizzaHawaiana.jpg', 90),
			('Pepperoni', 'La vieja confiable.', 'Queso, salsa y pepperoni.', 'pizzaPepperoni.jpg', 8idPizzaPreidPizzaPreidPizzaPre0),
            ('Vegetariana', 'Elaborada solo con verduras y vegetales sin cárnico alguno, para satisfacer 
				las necesidades del público vegetariano.', 'Queso, salsa, champiñón, cebolla, pimiento morrón
                y aceitunas.', 'pizzaVegetariana.jpg', 120),
            ('Suprema', 'Para los amantes de las pizzas todo terreno.', 'Queso, salsa, pepperoni, salchicha,
				champiñón, cebolla y pimiento morrón.', 'pizzaSuprema.jpg', 130),
            ('Salchicha', 'Sencilla pero deliciosa.', 'Queso, salsa, salchicha, pepperoni y tocino.',
				'pizzaSalchicha.jpg', 90),
            ('Carnes Frías', 'Dile hola a una robusta obra de arte con carnes de la más alta calidad.', 'Queso,
				salsa, pepperoni, salami y jamón.', 'pizzaCarnes.jpg', 100),
            ('Honolulu', 'Te traemos una pizza distinta desde las islas de Hawaii. Una combinación perfecta 
				entre dulce y picante.', 'Queso, salsa, jamón, piña, tocino y chile jalapeño.', 'pizzaHonolulu.png', 100),
            ('Cuatro Quesos', 'Ideal para los amantes del queso, su superficie está condimentada con 4 tipos
				de quesos diferentes.', 'Salsa, queso crema, queso mozzarella, queso parmesano y queso cheddar', 
				'pizza4Quesos.jpg', 90);
                
INSERT INTO tamanioPizza (nombre, costoExtra)
	VALUES ('Chica', 0),
			('Mediana', 20),
            ('Grande', 40),
            ('Extra Grande', 60);
            
INSERT INTO ingrediente (nombre)
	VALUES ('Chile Jalapeño'),
			('Cebolla'),
            ('Aceitunas'),
            ('Champiñón'),
            ('Pimiento morrón'),
            ('Piña'),
            ('Queso Crema'),
            ('Queso Cheddar'),
            ('Queso Parmesano'),
            ('Pollo'),
            ('Salchicha'),
            ('Jamón'),
            ('Salami'),
            ('Pepperoni'),
            ('Chorizo'),
            ('Carne Molida'),
            ('Tocino'),
            ('Carne Al Pastor');

INSERT INTO pedidopredeterminado (idPizzaPre, idOrden, cantidad, idTamanio, subtotal) VALUES ('','','','','');


SELECT piz_nombre, tam_nombre FROM pizzapredeterminada, tamaniopizza WHERE id_pizzaPre=1 AND id_tamanio=2;
SELECT * FROM pedidopredeterminado;
SELECT SUM(subtotal) FROM pedidopredeterminado WHERE idOrden = 139;

SELECT piz_nombre, tam_nombre, subtotal, cantidad FROM pizzapredeterminada, tamaniopizza, pedidopredeterminado WHERE idTamanio = id_tamanio AND idOrden = 123 AND idPizzaPre = id_pizzaPre;

ALTER TABLE pizzapredeterminada CHANGE nombre piz_nombre VARCHAR(20);
ALTER TABLE tamaniopizza CHANGE nombre tam_nombre  ENUM('Chica', 'Mediana', 'Grande', 'Extra Grande') NOT NULL;


#------------------------------------------------------------------------------------
SELECT * FROM pedidoPersonalizado;
SELECT idPizzaPer, cantidad, tam_nombre, subtotal FROM pedidoPersonalizado, tamanioPizza WHERE idOrden=140 AND id_tamanio=idTamanio;
INSERT INTO pedidoPersonalizado (idPizzaPer, idOrden, cantidad, idTamanio, subtotal) VALUES (1,140,1,2,'120');

SELECT idIngrediente FROM receta WHERE idPizzaPer=9;

SELECT * FROM pizzapersonalizada WHERE id_pizzaPer=9;

SELECT * FROM orden;

SELECT * FROM receta;

SELECT idPizzaPer, cantidad, tam_nombre, subtotal FROM pedidoPersonalizado, tamanioPizza WHERE idOrden=177 AND id_tamanio=idTamanio;

SELECT SUM(subtotal) AS suma FROM pedidoPersonalizado WHERE idOrden = 178;