const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Simplilearn",{useNewUrlParser:true},
(error)=> {
    if(!error) {
        console.log("Connection confirmed");
    }
    else {
        console.log("Error connecting to the database");
    }
});


const course = require("./people.model");