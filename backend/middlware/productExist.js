const getDB = require('../BD/getDB');

const productExist = async (req, res,next) =>{
    let connection;

try{
    connection = await getDB();

    const { idProduct } = req.params;

    const [exist] = await connection.query(
`
        SELECT * FROM products WHERE id = ?
        `,
        [idProduct]
    );
    console.log( exist > 1);
        if (exist < 1) {
        const error = new Error('El producto seleccionado no existe');
        error.httpStatus = 404;
        throw error;
    }

    next();

}  catch (error){
    next(error);
}  finally{
    if (connection) connection.release();
}
};

module.exports = productExist;