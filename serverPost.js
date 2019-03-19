const express = require('express');
const app = express();
const bodyParser = require('body-parser');


//pidiendo a express que analize el cuerpo de datos de una peticion que venga en formato url encoded
//la opcion extended sirve para que puedas enviar parametros anidados
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/saludo',function(req,res){
  res.send(`Hola ${req.query.name}`);
});

app.post('/',function(req,res){
res.send(`Hola ${req.body.name}`);

//altgr + cerrar llave``

});

app.listen(3000);