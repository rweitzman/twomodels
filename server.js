const express = require("express");
// models
const db = require("./models");
const app = express(); 
// const controllers = require("./controllers");
const port = 4000;
// const methodOverride = require("method-override");
app.set("view engine", "ejs");

//middleware//
// app.use(express.urlencoded({ extended: true }));
// app.use(methodOverride("_method"));

//controllers//

// app.use("/", controllers.exportedCheesesController);
// app.use("/", controllers.exportedSteaksController);
// app.get("/", function(request, response){
//     response.send("hi")
// });

app.get("/", function(request, response){
    response.render("home");
});

// app.get("/", function(request, response) {
//     response.render("house/houseIndex");
// })

app.get("/houseIndex", function (request, response) {
    const context = {
        allHouse: db.House,
    };
    response.render("house/houseIndex", context);
});


app.listen(4000, function(){
    console.log("I am live on port 3000");
  });

  module.exports = app;

  