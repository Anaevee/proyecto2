const getDB = require('../../BD/getDB');
//const { generateRandomString, sendMail } = require('../../helper');

const recoverUserPass = async (req,res,next) => {
    let connection;

    try {
        connection = await getDB();

        const {email} = req.body;

        if (!email){
            const error = new Error ('Faltan campos');
            error.httpStatus = 400;
            throw error ;  
        }

        const [user] = await connection.query(
            'SELECT id FROM users WHERE email =?',
            [email]
        );

        if (user.lenght < 1) {
            const error = new Error ('No existe ningún usuario con este email');
            error.httpStatus = 404;
            throw error;
        }

        const recoverCode =generateRandomString(20);
        
        const emailBody = `
        Se solicitó un cambio de contraseña para el usuario registrado con este email.

        El código de recuperación es : ${recoverCode}

        Si no has sido tú por favor , ignora este email.
        `;

        await sendMail ({
            to: email,
            subject: 'Cambio de contraseña',
            body: emailBody,
        });

        await connection.query (
            `UPDATE users SET recoverCode =? WHERE email =?`,
            [recoverCode, email]
        );

        res.send ({
            status: 'ok',
            message: 'Email enviado',
        });
    } catch (error){
        next(error);
    } finally{
        if (connection) connection.relase();
    }
};

module.exports = recoverUserPass;