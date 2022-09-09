const getDB = require('../../BD/getDB');

const categoriaProductos = async ( req,res,next ) =>{
    let connection;

    try{
        connection = await getDB();

        const { categoriaProductos } = req.query;

        const valoresCategoria = [
            'anillos',
            'pulseras',
            'pendientes',
            'collares',
            'colleciones',
          ];


        [products] = await connection.query(
           ` SELECT p.id, p.namePRODUCT, p.brand, p.price, p.category, 
            p.Stock, ph1.namePhoto
            FROM products p
            JOIN photos ph1 ON ph1.idProduct = p.id 
            WHERE NOT EXISTS (
              SELECT *
                FROM photos ph2
                WHERE  ph2.idProduct = ph1.idProduct
                AND (ph2.idProduct > ph1.idProduct OR (ph2.createdAt = ph1.createdAt AND ph2.id > ph1.id))
            ) AND p.category = ?
            GROUP BY p.id, ph1.namePhoto
            ORDER BY p.id ASC; ` ,
    
            [`${categoriaProductos}`]
          );
          res.send({
            status: 'ok',
            products
          });
        } catch (error) {
          next(error);
        } finally {
          if (connection) connection.release();
        }
      };
      
      module.exports = categoriaProductos;
