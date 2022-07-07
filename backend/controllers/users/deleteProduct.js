const getDB = require('../../BD/getDB');

const {borrarFoto} = require('../../helper');

const deleteProduct = async (req, res, next) =>{
let connection;



try{
    connection = await getDB();

    const {idProduct} = req.params;

    const [product] = await connection.query(`
       SELECT * FROM products WHERE id = ?`,
        [idProduct]
    );
    if (product.length < 1){
        const error = new Error ('El producto no fue encontrado');
        error.httpStatus = 404;
        throw error;
    }

    const [data] = await connection.query (`
        SELECT namePhoto FROM photos WHERE idProduct = ?
    `,
    [idProduct]
    );
    for (const d of data) {
       
        await borrarFoto(d.namePhoto);
        
        await connection.query(
          `DELETE FROM photos WHERE idProduct = ?`,
  
          [idProduct]
        );
        
      }
      await connection.query(
        `
  DELETE FROM products WHERE id = ?
  `,
        [idProduct]
      );
  
      res.send({
        status: 'ok',
        message: 'Producto eliminado',
      });
    } catch (error) {
      next(error);
    } finally {
      if (connection) connection.release();
    }
};
    module.exports = deleteProduct ;