const express = require('express');
const app = express();
//le indicas a la app que vas a usar un server de archivos estaticos
//express.static = la direccion donde se encuentran esos archivos
//use = inserta un middleware se inserta en el stack de middlewares
app.use('/assets',express.static('assets'));

// a tra ves del metodo get envias la respuesta del servidor, sendFile envia un archivo hmtl como respuesta
//en sendFile como parametro le envias el nombre del archivo y la direccion en este caso es un JSON
//con una variable y el valor __dirname que apunta al directorio actual.
app.get('/',function(req, res){
res.sendFile('index.html',{
    root: __dirname
});

});

app.listen(3000);