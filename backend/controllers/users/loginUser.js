const getDB = require('../../BD/getDB');

const jwt = require ('jsonwebtoken');

const loginUser = async ( req,res,next )=> {
    let connection;

    try{
        connection = await getDB ();

        const { email, password } = req.body

        if (!email || !password){
            const error =new Error ('Faltan campos');
            error.httpStatus = 400;
            throw error;
        }

        const [user] = await connection.query(
            `SELECT id,rol,active FROM users WHERE email =? AND password = SHA2(?,512)`,
            [email,password]
        );
        if (user.length < 1){
            const error =new Error (`Email o contraseña incorrectos`);
            error.httpStatus = 401;
            throw error;
        };
        
        const tokenInfo = {
            id: user[0].id,
            rol: user[0].rol,
        };


        const token = jwt.sign(tokenInfo,process.env.SECRET,{
            expiresIn: '30d',
        });
        res.send({
            status: 'ok',
            token: `Bearer ${token}`,
        });
    } catch (error){
        next (error);
    }finally{
        if (connection) connection.release();
    }
};

module.exports =loginUser;