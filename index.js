const express = require('express');
const debug=require('debug')('app:main');
const {ProductsAPI}=require('./src/products/index');
const {Config}=require('./src/config/index');
const app= express();
app.use(express.json());
ProductsAPI(app);




//modulos







app.listen(Config.port,()=>{
    debug(`El servidor esta escuchando en el puerto ${Config.port}`);
});