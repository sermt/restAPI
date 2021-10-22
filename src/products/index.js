const express = require('express');
const {productsController} =require('./controller');
const router=express.Router()
module.exports.ProductsAPI=(app)=>{
    router
    .get('/', productsController.getProducts)// /
    .get('/reportes', productsController.generateReport)
    .post('/',productsController.createProducts)
    .get('/:id',productsController.getProduct)// /n
   
   
   
    app.use('/api/products',router)
}