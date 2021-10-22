const {usersService}=require('./services');
const debug= require('debug')('app:module-users');
const {Response}=require('../common/response');
const createError = require('http-errors');
module.exports.usersController={
    getUsers: async (req,res)=>{
        try {
            let users= await usersService.getAll();
           Response.success(res,200,"Lista de usuarios",users);
        } catch (error) {
            debug(error);
          Response.error(res)
        }
    },
    getUser:async  (req,res)=>{
        try {
            const id=req.params.id;
           
        let user=await usersService.getById(id);
        Response.success(res,200,"Usuario",user);
        } catch (error) {
           
            Response.error(res)
        }
    },
    createUser: async (req,res)=>{
        try {
            const {body}=req;
           if(!body || Object.keys(body).length===0){
               Response.error(res, new createError.BadRequest());
           }
            else{
                let insertedId= await usersService.create(body);
            Response.success(res,200,"Usuario agregado",insertedId);
            }

        } catch (error) {
            console.log(error)
           Response.error(res)
        }
    },



};