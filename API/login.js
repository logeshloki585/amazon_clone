const Router = require("express").Router();

const loginmodel = require("../data/loginschema")


/*
route           /login
use             to get all details
parameter       none
method          get
*/  

Router.get("/", async(req,res) => {
   try{
    const newdata = await loginmodel.find();
    return res.json(newdata);
   }catch(error){
       return res.json({Error:"error found"})
   }
})

/*
route           /login
use             to get specific login data..
parameter       emailid
method          get
*/  

Router.get("/:emailid",async (req,res) => {
    try{
        const newdata = await loginmodel.findOne({
            email:req.params.emailid
        });
        if(!newdata){
            return res.json({error:`there is no data found for ${req.params.emailid}`})
        }else{
            return res.json({data:newdata})
        }
        
    }catch(error){
        return res.json({Error:"error occured"})
    }
})



/*
route           /login/add
use             to add a login data
parameter       none
method          post
*/  

Router.post("/add", async(req,res) =>{
    try{
        const {datanew} = req.body;
        await loginmodel.create(datanew);
        return res.json("login data was added")
    }catch(error){
        return res.json({Error:"error occured.."});
    }
})



module.exports = Router;