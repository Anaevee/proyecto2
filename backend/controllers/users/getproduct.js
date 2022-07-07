const getDB = require('../../BD/getDB');

const getProduct = async ( req,res,next ) =>{
    let connection;
    
    try{
        connection = await getDB();

        const { idProduct } = req.params;

        const [getProduct] = await connection.query(
            `
            SELECT * FROM products WHERE products.id = ?
            `,
            [idProduct]
        );

        const [fotos] = await connection.query (`
            SELECT namePhoto FROM photos WHERE idProduct = ?
            `,
            [idProduct]
        );
        res.send ({
            status: 'ok',
            producto: {
                getProduct,fotos,
            },
        });
    } catch (error){
        next(error);
    } finally {
        if (connection) connection.release();
    }
};


module.exports = getProduct;