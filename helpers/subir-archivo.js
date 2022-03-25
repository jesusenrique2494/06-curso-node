const  path  = require("path");
const { v4: uuidv4 } = require('uuid');

const subirArchivo=(files,extensionesValidas=['png','jpg','jpeg','gif'],carpeta='')=>{

    return new Promise((resolve,reject)=>{

        // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
        const {archivo} = files;

        const nombreCortado = archivo.name.split('.');

        const extension= nombreCortado[nombreCortado.length-1];

        //validar la extension

        if(!extensionesValidas.includes(extension)){
            return reject(`extencion ${extension} no permitida, solo : ${extensionesValidas}`)
        }

        const nombreTemporal=uuidv4()+'.'+extension;

        const uploadPath = path.join( __dirname,"../uploads/",carpeta, nombreTemporal);

        // Use the mv() method to place the file somewhere on your server
        archivo.mv(uploadPath, (err)=> {
            if (err) return reject(err);

            resolve(nombreTemporal);
            
        });
    });

   

}

module.exports={
    subirArchivo
}