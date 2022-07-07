//llamar a getDB
const getDB = require ('./getDB.js');

//llamar a faker para simular entradas de datos de usuarios y prodcutos BD
//const faker = require('faker/locale/es');

//llamamos la funcion formatDate creada en helpers con destructuring

const { formatDate } = require ('../helper.js');

//const { Table } = require('reactstrap');



//Crear la funcion principal donde se crearan las tablas:
async function main () {
    let connection;
    try {
        console.log('ESTAMOS AQUI')
        connection = await getDB();
        //Crear la tabla de usuarios respectivas columnas(localidad)

      
       await connection.query('DROP TABLE IF EXISTS historialProducts ');
       await connection.query('DROP TABLE IF EXISTS photos');
       await connection.query('DROP TABLE IF EXISTS products');
       await connection.query('DROP TABLE IF EXISTS users');

        console.log('Tablas eliminadas');


 await connection.query(`
 CREATE TABLE users (
     id INT PRIMARY KEY AUTO_INCREMENT,
     name VARCHAR(50) NOT NULL,
     email VARCHAR (100) NOT NULL,
     password VARCHAR (512) NOT NULL,
     rol ENUM('usuario','administrador')DEFAULT 'usuario' NOT NULL,
     active BOOLEAN DEFAULT false,
     deleted BOOLEAN DEFAULT false,
     verifiedCode VARCHAR (100),
     recoverCode VARCHAR (100),
     createdAt DATETIME NOT NULL
     )
`);

console.log ('Tabla usuarios creada correctamente');


await connection.query(`
CREATE TABLE products(
id INT PRIMARY KEY AUTO_INCREMENT,
idUser INT NOT NULL,
FOREIGN KEY (idUser) REFERENCES users(id) ON DELETE CASCADE,
namePRODUCT VARCHAR (50) NOT NULL,
brand VARCHAR (30) NOT NULL,
category ENUM('Hand make by kei','Colleciones','Pendientes','Pulseras','Anillos','Collares','Special Box') NOT NULL,
description varchar(400) NOT NULL,
price MEDIUMINT NOT NULL,
createdAt DATETIME NOT NULL,
modifiedDate DATETIME,
deleteDate DATETIME,
active BOOLEAN DEFAULT true,
Stock MEDIUMINT NOT NULL,
soldOUT BOOLEAN DEFAULT false,
deleted BOOLEAN DEFAULT false

)
`);

console.log('Tabla de productos creada correctamente');


await connection.query(`
    CREATE TABLE photos(
        id INT PRIMARY KEY AUTO_INCREMENT,
        idProduct INT NOT NULL,
        FOREIGN KEY (idProduct) REFERENCES products(id),
        namePhoto VARCHAR(50) NOT NULL,
        createdAt DATETIME NOT NULL
    )



`);

console.log ('Tabla de fotos creada correctamente');


await connection.query(`
CREATE TABLE historialProducts (
id INT PRIMARY KEY AUTO_INCREMENT,
idProduct INT NOT NULL,
FOREIGN KEY (idProduct) REFERENCES products (id),
localidad VARCHAR(100) NOT NULL,
pais VARCHAR(100) NOT NULL,
codigoPostal VARCHAR (20) NOT NULL,
name VARCHAR(100) NOT NULL,
email VARCHAR(100) NOT NULL,
direccion VARCHAR (245) NOT NULL,
rol ENUM('vendido','devuelto','cancelado','recibido')DEFAULT 'vendido' NOT NULL


)
`);
console.log ('Tabla de historia de productos creada correctamente ');


//USUARIOS ADMINISTRADOR//

await connection.query(`
INSERT INTO users (name ,email,password,rol,active,deleted,createdAt)
VALUES(
    "Amancay",
    "evee_mcm@hotmail.com",
    SHA2("123456",512),
    "administrador",
    true,
    false,
    "${formatDate(new Date())}"
)
`);
console.log ('creado usuario administrador');



//USUARIO//

await connection.query(`
    INSERT INTO users (name ,email,password,rol,active,createdAt)
    VALUES(
        "ENRI",
        "evee_mcm@hotmail.com",
        SHA2("123456",512),
        "usuario",
        true,
        "${formatDate(new Date())}"
    )
`);

console.log ('Usuario Administrador creado correctamente en tabla de usuarios');

//TABLA DE PRODUCTOS//


// el estatu lo tengo por activo ?¿? sold?¿
//me falta una llave en la 150

//los productos los tengo q meter todos a mano?¿¿?

//status y price

    } catch (error) {
        console.error(error.message);
    } finally{
        if (connection) connection.release();
        process.exit(0)
    }

    
};
 main();

 



 

 

