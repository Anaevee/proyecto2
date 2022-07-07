const getDB = require('../../BD/getDB');


const { guardarFoto} = require ('../../helper.js');

const newProduct =  async (req, res, next)=> {

    let connection;

    try{
        connection = await getDB();

        const{
            nameProduct,
            brand,
            category,
            description,
            price,
            Stock
        }= req.body;

       if(
           !nameProduct ||
           !brand ||
           !category ||
           !description ||
           !price ||
           !Stock
       ) {

        const error = new Error ('Falta algun campo');
        error.httpStatus = 400;
        throw error;
       }

       

       const [nuevoProducto] = await connection.query(`

        INSERT INTO products (idUser, nameProduct,brand,category,description,price,Stock,createdAt,active)
        VALUES (?,?,?,?,?,?,?,?,?)
        `
       ,
        [
            1,
            nameProduct,
            brand,
            category,
            description,
            Number (price),
            Number (Stock),
            new Date (),
            true,

        ]
       );

       const idProduct = nuevoProducto.insertId;

       if (req.files && Object.keys(req.files).length > 0) {
        // Recorremos los valores de "req.files".
        for (const photo of Object.values(req.files).slice(0, 3)) {
          // Variable que almacenará el nombre de la imagen.
          let photoName;
          
          try {
              // Guardamos la foto en el servidor y obtenemos el nombre de la misma.
              photoName = await guardarFoto(photo);
            } catch (_) {
            const error = new Error('Formato de archivo incorrecto');
            error.httpStatus = 400;
            throw error;
          }
          // Guardamos la foto.
          await connection.query(
            `INSERT INTO photos (namePhoto, idProduct, createdAt) VALUES (?, ?, ?)`,
            [photoName, idProduct, new Date()]
          );
        }
      }
  
      // Para confirmar si funciona: vamos a devolver (response) un OBJETO con status:200
      // y un mensaje de confirmación:
      res.send({
        status: 'Ok',
        message: 'El producto ha sido creado correctamente',
      });
    } catch (error) {
      next(error);
    } finally {
      // Pase lo que pase con la función, debemos liberar la conexión establecida:
      if (connection) connection.release();
    }
  };
  

    
module.exports = newProduct;