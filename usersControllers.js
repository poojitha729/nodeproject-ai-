const post=require("../models/posts");
const getAll=async (req,res)=>{
    try{
        const posts=await post.find();
        res.status(200).send(posts);
    }catch(err){
        res.status(500).send({message:err.message});
    }
}

const createUser=async (req,res)=>{
    let body=req.body;
    const users=new post({
        name:body.name,
        age:body.age,
        gender:body.gender,
        rollNo:body.rollNo,
        mobileNo:body.mobileNo
    });
    try{
        await users.save();
        res.status(201).json({
          name:body.name,
          age:body.age,
          gender:body.gender,
          rollNo:body.rollNo,
          mobileNo:body.mobileNo  
        })
    }catch(error){
        res.status(400).json({message:error.message});
    }
}

const updateUser= async (req,res)=>{
    let id=req.params.id;
    let body=req.body;
    try{
        const updated=await post.findByIdAndUpdate(id,body,{new:true,runValidators:true});
        res.status(202).json(updated);
    }catch(error){
        res.status(400).json({message:error.message});
    }

}

const deleteUser=async (req,res)=>{
    let id=req.params.id;
    try{
        if(id==null){
            res.status(404).json({message:`Not found :${id}`});
        }else{
            await post.findByIdAndDelete(id);
            res.send('Deleted Record with id:${id}').status(204);
        }
    }catch(err){
        res.status(500).json({message:err.message});
    }
}


const getbyid=async (req,res)=>{
    let id=req.params.id;
    try{
        if(id==null){
            req.status(404).json({message:`Not found id :${id}`});
        }else{
            let poster=await post.findById(id);
            res.json(poster).status(200)
        }
    }catch(err){
        res.status(500).json({message:err.message});
    }
}

module.exports={
    createUser,
    updateUser,
    getAll,
    deleteUser,
    getbyid
}