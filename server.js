// function add(a,b){
//     return a+b;
// }
// var result=add(2,9);
// console.log(result);
/*
function callback(){
    console.log("now adding is succesfully completed");
}

const add=function(a,b,callback){
    var result=a+b;
    console.log("result: "+result);
    callback();
}
add(3,10,callback);
*/
/*
const add=function(a,b,callback){
    var result=a+b;
    console.log("result: "+result);
    callback();
}

// inline function
add(4,3,function(){
    console.log('add completed');
})

add(5,10,()=>console.log('Add done'));
*/
/*
var fs=require('fs');
var os=require('os');

var user=os.userInfo();
console.log(user);
console.log(user.username);

fs.appendFile('greeting.txt', 'HI '+user.username + '!\n' ,()=>{
    console.log('file is created')
})
*/
/*
const notes=require('./notes.js');
console.log('server file is available');

var age=notes.age;

console.log(age);

var result=notes.add(age+5,20);
console.log('result is: '+result);
*/
/*
var prince = require('lodash');

var data=["person","person",1,2,1,2,'name','age',2];

var filter=prince.uniq(data);
console.log(filter);

console.log(prince.isString(3));
*/

//-----------------------------------------------------------------------------------------------
// JSON AND OBJECT
/*
 const jsonstring='{"name":"john","age":25,"city":"pune"}';
 const jsonobject=JSON.parse(jsonstring);
 console.log(jsonobject);
 console.log(jsonobject.age);

 const objectToConvert={
    name:"Alice",
    age:25
 }
 const json=JSON.stringify(objectToConvert);
 console.log(json);
 */
 const express = require('express')
 const app = express()
 const db=require('./db');

 // Data is coming in different forms like form,json,raw,graphQL
 // converts data to object
 const bodyParser=require('body-parser')
 app.use(bodyParser.json());  //req.body


 const MenuItem=require('./model/MenuItem')
 
 app.get('/', function (req, res) {
   res.send('Hello World welcome to hotel')
 })

  //Import the router file
  const personRoutes=require('./routes/personRoutes');

  //use the routers
  app.use('/person',personRoutes);
/*
 // Async await POST route to save data
 app.post('/person',async (req,res)=>{
    try{
        const data=req.body;  // Assuming the request body contains persons data

        // Create a new person model using mongoose model
        const newPerson=new Person(data);

        // save the new person to the database
        const response=await newPerson.save();
        console.log('data saved');
        res.status(200).json(response);

    }
    catch(err){
        console.log(err);
        res.status(500).json({err: 'internal server error'})
    }
 })
 */

/*
 //GET method to get data about person
 app.get('/person',async(req,res)=>{

    try{
        const data=await Person.find();
        console.log('Data fetched');
        res.status(200).json(data);
        
    }
    catch(err){
        console.log(err);
        res.status(500).json({err: ' internal server error'})
    }
 })
*/
/*
 app.get('./person/:workType',async(req,res)=>{
    try{
        const workType=req.params.workType; // Extract the worktype from URL
        if(workType=='chief'|| workType=='manager'|| workType=='waiter'){
            const response=await Person.find({work:workType});
            console.log('data fetched');
            res.status(200).json(response);
            
        }
        else{
            res.status(404).json({error: 'invalid work type'});
        }

    }
    catch(err){
        console.log(err);
        res.status(505).json({err: 'internal server error'});
    }
 })
*/


 /*
 //POST route to add person
 app.post('/person',(req,res)=>{

    const data=req.body  // Assuming the request body contains persons data

    // Create a new person model using mongoose model
    const newPerson=new Person(data);
    // newPerson.name=data.name;

    // save the new person to the database
    newPerson.save((error,savedPerson)=>{
        if(error){
            console.log('error saving person: ',error);
            res.status(500).json({error: 'Internal server error'}) 
        }
        else{
            console.log('data saved succesully');
            res.status(200).json(savedPerson);
        }
    })
 })
*/    

 /*
 app.get('/chicken', (req, res) => {
    res.send('sure sir i will serve you');
});

app.get('/idli',(req,res)=>{
    var customized_idli={
        name:'reva idli',
        size: '10cm',
        is_sambar:true,
        is_chatney:false
    }
    res.send(customized_idli);
})
*/
  
 
 app.listen(3000, ()=>{
    console.log('listening on port 3000');
 })
