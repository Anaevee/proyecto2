const getDB = require('../../BD/getDB');

const editProduct= async ( req,res,next) =>{

    let connection;

    try{

        connection = await getDB ();

        const {idProduct} = req.params;

        const [products] = await connection.query(`

            SELECT* FROM products WHERE id=?`,
            [idProduct]

        );

        if (products.lenght < 1) {
            const error = new Error ('El producto no fue encontrado');
            error.httpStatus = 400;
            throw error;
        }
        let{
            nameProduct,
            category,
            description,
            price,
            Stock
            
        }= req.body;
        
        if(
            !nameProduct,
            !category,
            !description,
            !price,
            !Stock
        ){
            const error = new Error ('Faltan datos por rellenar');
            error.httpStatus = 400;
            throw error;
        }


        await connection.query(`

            UPDATE products SET modifiedDate = ?, nameProduct = ?, category = ?, description = ? , price = ?, stock = ? WHERE id = ?
            `,[
              new Date(),
              nameProduct,
              category,
              description,
              price,
              Stock,
              idProduct

            ]
        );

        res.send ({
            status: 'ok',
            
                message: 'El producto se ha actulizado correctamente',
        });

    } catch (error) {
        next (error);
    }finally{
        if(connection) connection.release ();
    }
};

module.exports = editProduct;

        