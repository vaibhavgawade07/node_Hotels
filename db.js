const mongoose=require('mongoose');

require('dotenv').config();
// const mongoURL = 'mongodb://localhost:27017/hotels';
//const mongoURL=process.env.MONGODB_URL_Local;
const mongoURL=process.env.MONGODB_URL;


mongoose.connect(mongoURL, {
    //useNewUrlParser:true,
  //  useUnifiedTopology:true
})

const db=mongoose.connection

db.on('connected',()=>{
    console.log('connected to Mongo Db');
})

db.on('error',(err)=>{
    console.log('Mongodb Connection error:',err);
})

db.on('disconnected',()=>{
    console.log('Mongo db disconnected');
})

module.exports=db;