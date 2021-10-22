const {productsService}=require('./services');
const debug= require('debug')('app:module-products');

module.exports.productsController={
    getProducts: async (req,res)=>{
        try {
            let products= await productsService.getAll();
            res.json(products);
        } catch (error) {
            console.log(error);
            res.status(500).json({message: "INTERNAL SERVER ERROR"});
        }
    },
    getProduct:async  (req,res)=>{
        try {
            const id=req.params.id;
           
        let product=await productsService.getById(id);
         res.json(product);
        } catch (error) {
            console.log(error);
            res.status(500).json({message: "INTERNAL SERVER ERROR"});
        }
    },
    createProducts: async (req,res)=>{
        try {
            const {body}=req;
           
            let insertedId= await productsService.create(body);
            res.json(insertedId);
        } catch (error) {
            console.log(error)
            res.status(500).json({message: "INTERNAL SERVER ERROR"});
        }
    }
};