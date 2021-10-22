const express = require('express');
const debug=require('debug')('app:main');
const {Config}=require('./src/config/index');

const {ProductsAPI}=require('./src/products/index');
const {usersAPI}=require('./src/users/index');
const app= express();
app.use(express.json());

usersAPI(app);
ProductsAPI(app);




app.listen(Config.port,()=>{
    debug(`El servidor esta escuchando en el puerto ${Config.port}`);
});