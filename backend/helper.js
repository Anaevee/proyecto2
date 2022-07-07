const { format } = require('date-fns')
const sharp = require ('sharp');
const uuid = require('uuid');

require('dotenv').config();
const { UPLOAD_PATH } = process.env;


const crypto = require ('crypto');
const { ensureDir } = require('fs-extra');

const path = require('path');
const { unlink } = require('fs');
const uploadPath = path.join(__dirname, UPLOAD_PATH);

function formatDate (date){
    return format ( date, 'yyy-MM-dd-HH-mm-ss')
}

function generateRandomString(length) {
    return crypto.randomBytes(length).toString('hex');
}


async function guardarFoto(imagen){
    //comprueba existe direcorio
    
    await ensureDir(uploadPath);
    
    const sharpImage = sharp(imagen.data)
  
    
    //convertimos la imagen
    //accedemos a los metadatos para ver anchura
    const infoImage = await sharpImage.metadata();
    //definimos ancho max
    const maxWidth = 1000;
    // redimesionamos
    if (infoImage.width >maxWidth){
        sharpImage.resize (maxWidth);
    }
    //genero nombre foto
 
    const nameImage = `${uuid.v4()}.jpg`;
    //creamos ruta absoluta
    const pathImage = path.join(uploadPath,nameImage);
    //guardamos la imagen como string
    await sharpImage.toFile (pathImage);

    return nameImage;
} 

async function borrarFoto (nameImage) {

    const photoPath = path.join(uploadPath,nameImage);
    await unlink(photoPath,() => {
    })

  
    
}


async function validate(schema, data) {
    try {
        await schema.validateAsync(data);
    } catch (error) {
        error.httpStatus = 400;
        throw error;
    }
}


module.exports = {formatDate, generateRandomString, validate, guardarFoto,borrarFoto}