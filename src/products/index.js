const express = require('express');
const {productsController} =require('./controller');
const { productsService } = require('./services');
const router=express.Router()
module.exports.ProductsAPI=(app)=>{
    router
    .get('/', productsController.getProducts)// /
    .get('/:id',productsController.getProduct)// /n
    .post('/',productsController.createProducts)

    .get('/',(req,res)=>{

    })
    app.use('/api/products',router)
}