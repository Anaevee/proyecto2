require('dotenv').config();
const morgan = require('morgan');




const express = require('express'); //aqui lo llamo!!!!!
const fileUpload = require('express-fileupload');




const { PORT }= process.env;

const app = express(); // aqui lo ejecuto!!!
app.use(express.json())

app.use(fileUpload());
app.use(morgan('dev'));

//llamar middlware

const authUser = require('./middlware/authUser');
const productExist = require('./middlware/productExist');


//llamar ENDPOINTS USUARIOS

const recoverUserPass = require('./controllers/users/recoverUserPass');
const loginUser = require('./controllers/users/loginUser');
app.post ('/login', loginUser);

//ENDPOINTS PRODCUTOS
const newProduct = require('./controllers/users/newProduct');
const editProduct = require ('./controllers/users/editProduct');
const deleteProduct = require ('./controllers/users/deleteProduct');
const getProduct = require('./controllers/users/getproduct');
const search = require ('./controllers/users/search');



app.post ('/nuevoproducto',authUser, newProduct);

app.put ('/editProduct/:idProduct',authUser, editProduct);


app.delete ('/deleteProduct/:idProduct',authUser,productExist ,deleteProduct);

app.get ('/getProduct/:idProduct',productExist, getProduct);

app.get ('/search',search);




//para que corra los errores
app.use((error, req, res, next) => {
    console.error(error);
    res.status(error.httpStatus || 500).send({
        status: 'error',
        message: error.message,
      });
    });
    app.use((req, res) => {
        res.status(404).send({
          estatus: 'error',
          message: 'Not found',
        });
      });

app.listen (PORT, () => {
    console.log (`conectado al puerto: ${PORT}`);
});