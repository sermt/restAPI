const {Database} =require('../database/index');
const {ObjectId}= require('mongodb');
const COLLECTION = 'products';
const {productsUtils}=require('./utils');
const getAll= async ()=>{
    const collection = await Database(COLLECTION);
    return await collection.find({}).toArray();
}

const generateReport=async(name,res)=>{
    let products= await getAll();
    productsUtils.excelGenerator(products,name,res)
}
const getById = async (id)=>{
    const collection= await Database(COLLECTION);
    return collection.findOne({_id:ObjectId(id)});
}

const create=async (product)=>{
    const collection = await Database(COLLECTION);
    let result= await collection.insertOne(product);
    return result.insertedId;
}
module.exports.productsService={
getAll,
getById,
create,
generateReport
}