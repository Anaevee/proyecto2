const jwt = require ('jsonwebtoken');

const authUser = async (req,res,next) =>{

    try{
        const { authorization } = req.headers;

        if(!authorization){
            const error = new Error ('Falta autorización');
            error.httpStatus = 401;
            throw error;
        }

        let token;

        try{
            token = jwt.verify(authorization.split(' ')[1],process.env.SECRET);
                } catch(_){
                    const error = new Error ('el token no es válido');
                    error.httpStatus = 401;
                    throw error;
                }

                req.userAuth = token;

                next ();
    }catch (error){
        next (error);
    }
};

module.exports = authUser;