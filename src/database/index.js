const {MongoClient}=require('mongodb');
const debug=require('debug')('app:module-database');
const {config}=require('package../config/index');
let connection=null;
module.exports.Database=(collection)=>new Promise((resolve,reject)=>{
try {
    if(!connection){
        const client=new MongoClient(config.mongoURL);
        connection=await client.connect();
        debug('Nueva conexion realizada');
        
    }
    const db=connection.db(Config.mongoDB);
    resolve(db.collection(collection))
} catch (error) {
    reject(error);
}
});