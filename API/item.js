const Router = require("express").Router();

// const data = require("../data/index");
const itemmodel = require("../data/itemschema");

/*
route           /item
use             to print all items
parameter       none
method          get
*/  

Router.get("/", async(req,res) => {
    const newdata = await itemmodel.find();
    return res.json(newdata);
})

/*
route           /
use             to get specific item from list
parameter       itemid
method          get
*/  
Router.get("/:itemid", async(req,res) =>{
    try{
        // const newdata = data.item.filter((id)=> id.item_id === parseInt(req.params.itemid));   
        const newdata = await itemmodel.findOne({item_id:req.params.itemid})
        if(!newdata){
            return res.json({ Error: `there is no product found for id ${req.params.itemid} `})
        }
        return res.json({data: newdata})
    }catch(error){
        return res.json({Error:"server is crashed"})
    }
})




/*
route           /item/add
use             to add item to list
parameter       none
method          post
*/  
Router.post("/add",async (req,res) => {
        const {datanew}=  req.body;     
        await itemmodel.create(datanew);
        return res.json({item:data.item});
    
})



module.exports = Router;
