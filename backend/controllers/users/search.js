const getDB = require('../../BD/getDB');


const search = async ( req, res, next) =>{
    let connection;

    try{
        connection = await getDB();

        const { search, order, direction,limit} = req.query;

        const validOrderOptions = [
            'nameProduct',
            'brand',
            'status',
            'category',
            'description',
            'price',
            'createdDate'
        ];

        const validDirectionOptions = ['DESC', 'ASC'];

        const orderBy = validDirectionOptions.includes(order) ? order : 'products.createdAt';

        const orderDirection = validDirectionOptions.includes (direction) ? direction : 'ASC';

        let items;

        if (search) {
            [items] = await connection.query (
             `  SELECT products.id, products.nameProduct, products.brand, products.price, products.category, 
             ph1.namePhoto
             FROM products
             JOIN photos ph1 ON ph1.idProduct = products.id
             WHERE NOT EXISTS (
               SELECT *
                 FROM photos ph2
                 WHERE  ph2.idProduct = ph1.idProduct
                 AND (ph2.idProduct > ph1.idProduct OR (ph2.createdAt = ph1.createdAt AND ph2.id > ph1.id))
             ) AND  (products.nameProduct LIKE ? OR products.brand LIKE ? OR products.category LIKE ? OR products.description LIKE ? OR products.price LIKE ? )
             GROUP BY products.id, ph1.namePhoto ORDER BY ${orderBy} ${orderDirection};
             `,
             [
               `%${search}%`,
               `%${search}%`,
               `%${search}%`,
               `%${search}%`,
               `%${Number(search)}%`,
             ]
           ); 
            
        } 
        console.log (search);
        if ( items.length < 1){
            const error = new Error ('No hay elementos que coincidan con la busqueda');
            error.httpStatus = 404 ;
            throw error;
        }

        res.send({
            status: 'ok',
            items,
        });
           
    }catch (error) {
        next(error);
    } finally {
        if (connection) connection.release();
    }
};

module.exports = search;