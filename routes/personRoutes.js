const express=require('express');


const router=express.Router();
const Person=require('./../model/person')


// Async await POST route to save data
router.post('/',async (req,res)=>{
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

  //GET method to get data about person
  router.get('/',async(req,res)=>{

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

 router.get('/:workType',async(req,res)=>{
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

 router.put('/:id', async(req,res)=>{
    try{
        const personId=req.params.id; //Extract the id from URL parameter
        const updatedPersondata=req.body; //Updated data for the person
        
        const response=await Person.findByIdAndUpdate(personId,updatedPersondata,{
            new:true, //Return the updated document
            runValidators:true //Run Mongoose validation
        })

        if(!response){
            return res.status(404).json({error: 'Person not found'});
        }

        console.log('data updated');
        res.status(200).json(response);

    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'internal server error'})
    }
 })

 router.delete('/:id', async(req,res)=>{
    try{
        const personId=req.params.id;

        const response=await Person.findByIdAndDelete(personId);
        if(!response){
            return res.status(404).json({error:'Person not found'});
        }
        console.log('data fetched');
        res.status(200).json({message:'Person Deleted successfully'});
    }
    catch(err){
        console.log(err);
        res.status(500).json({error: 'internal server error'})
    }
 })

// New comment added
 module.exports=router;