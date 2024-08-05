const mongoose=require('mongoose');


const mongoURL = 'mongodb://localhost:27017/hotels';


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