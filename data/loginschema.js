const mongoose = require("mongoose");

const loginschema = mongoose.Schema({
        email : String,
        password : String
})

const loginmodel = mongoose.model("logins",loginschema);

module.exports = loginmodel; 