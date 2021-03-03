const express = require("express");

const PORT = process.env.PORT || 8080;

const app = express();

//serve static content for app
app.use(express.static("public"));

//parse app body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//set Handlebars
const exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//import routes & give server access
const routes = require("./controllers/burgerControllers.js");

app.use(routes);

//start server to begin listening to client requests
app.listen(PORT, function() {
    //log start
    console.log("Server listening on: http://localhost:" + PORT);
});