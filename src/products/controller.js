const {productsService}=require('./services');
const debug= require('debug')('app:module-products');
const {Response}=require('../common/response');
const createError = require('http-errors');
module.exports.productsController={
    getProducts: async (req,res)=>{
        try {
            let products= await productsService.getAll();
           Response.success(res,200,"Lista de productos",products);
        } catch (error) {
            console.log(error);
          Response.error(res)
        }
    },
    getProduct:async  (req,res)=>{
        try {
            const id=req.params.id;
           
        let product=await productsService.getById(id);
        Response.success(res,200,"Producto",product);
        } catch (error) {
            console.log(error);
            Response.error(res)
        }
    },
    createProducts: async (req,res)=>{
        try {
            const {body}=req;
           if(!body || Object.keys(body).length===0){
               Response.error(res, new createError.BadRequest());
           }
            else{
                let insertedId= await productsService.create(body);
            Response.success(res,200,"Producto agregado",insertedId);
            }

        } catch (error) {
            console.log(error)
           Response.error(res)
        }
    }
};