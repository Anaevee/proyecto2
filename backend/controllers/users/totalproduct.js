const getDB = require('../../BD/getDB');

const totalProduct = async ( req,res,next ) =>{
    let connection;

    try{
        connection = await getDB();

        const [totalProduct] = await connection.query(
            `
        SELECT p.id, p.namePRODUCT, p.brand, p.price, p.category, 
		p.Stock, ph1.namePhoto
        FROM products p
        JOIN photos ph1 ON ph1.idProduct = p.id 
        WHERE NOT EXISTS (
          SELECT *
            FROM photos ph2
            WHERE  ph2.idProduct = ph1.idProduct
            AND (ph2.idProduct > ph1.idProduct OR (ph2.createdAt = ph1.createdAt AND ph2.id > ph1.id))
        )
        GROUP BY p.id, ph1.namePhoto
        ORDER BY p.id ASC;

            `,
            []
        );

       // const [fotos] = await connection.query (`
       // SELECT namePhoto FROM photos WHERE idProduct = ?
       // `,
       // []
   // );
    res.send ({
        status: 'ok',
        producto: {
            totalProduct,
        },
    });
} catch (error){
    next(error);
} finally {
    if (connection) connection.release();
}
};

module.exports = totalProduct;

