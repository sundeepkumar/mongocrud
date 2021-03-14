//setup 
const connection = require("./models");
const express = require("express");
const application = express();
const path = require("path");
const Handlebars = require('handlebars');
const expresshandlebars = require("express-handlebars");
const bodyparser = require("body-parser");
const PeopleController  = require("./controllers/people");
// Import function exported by newly installed node modules.
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');


//config 

application.use(bodyparser.urlencoded({
   extended:true  
}));

application.set('views',path.join(__dirname,"/views/"));

application.engine("hbs",expresshandlebars({
    extname:"hbs",
    defaultLayout:"mainlayout",
    layoutsDir:__dirname+"/views/layouts",
    handlebars: allowInsecurePrototypeAccess(Handlebars)
}));

application.set("view engine","hbs");


//Routes 
application.get("/",(req,res)=>{
    res.render("index",{});
})

// Set up controller
application.use("/people",PeopleController);


//Start the application
application.listen("5000");