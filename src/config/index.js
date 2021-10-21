require('dotenv').config();
module.exports.Config={
port: process.env.PORT,
mongoURL: process.env.MONGO_URL,
mongoDB: process.env.MONGO_DBNAME,
}