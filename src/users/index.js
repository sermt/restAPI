const express = require('express');
const {usersController} =require('./controller');
const router=express.Router()
module.exports.usersAPI=(app)=>{
    router
    .get('/',usersController.getUsers)// /
 
    .post('/',usersController.createUser)
    .get('/:id',usersController.getUser)// /n
   
   
   
    app.use('/api/users',router);
}