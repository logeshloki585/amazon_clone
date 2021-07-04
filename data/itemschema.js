const mongoose = require("mongoose");



let itemschema = mongoose.Schema({
    item_id:Number,
    item_name:String,
    item_amount:Number,
    item_details:String
});

const itemmodel = mongoose.model("items",itemschema);

module.exports = itemmodel; 