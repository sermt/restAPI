const {MongoClient}=require('mongodb');
const debug=require('debug')('app:module-database');
const {Config}=require('../config/index');
let connection=null;
module.exports.Database=(collection)=>new Promise(async (resolve,reject)=> {
try {
    if(!connection){
        const client=new MongoClient(Config.mongoURL);
        connection=await client.connect();
        debug('Nueva conexion realizada');
        
    }
    const db=connection.db(Config.mongoDB);
    resolve(db.collection(collection))
} catch (error) {
    reject(error);
}
});