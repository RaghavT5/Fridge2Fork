const express= require("express");
const https = require("https");
const bodyParser = require("body-parser");
const path = require("path");
const fs = require("fs");

const app = express();
const router = express.Router({ mergeParams: true });
require('dotenv').config();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true})); 

// app.use(express.static("public"));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname));


app.get("/", function(req, res){

	res.sendFile(__dirname + "/index.html");
	
});
const foodRouter = require("./routes/apiRoute");

router.use('/food', foodRouter);

app.use("/api", router);


// app.post("/", function(req, res){
    
//     const ing = req.body.ingredientName;
//     const appId = "055e6c98c51e479e97ee05f423a7ea39";
    
//     const url= "https://api.spoonacular.com/recipes/findByIngredients?ingredients="+ing+"&apiKey="+appId;

//     https.get(url, function(response){
//     console.log(response.statusCode);


// response.on("data", function(data){

    
//     const recipeData = JSON.stringify(data);
//             const id = recipeData.id
//             const titleOfRecipe = recipeData.title;
//             const otherIngredients = recipeData.name;
//             const image="https://spoonacular.com/recipeImages/" + id + "-312x231.jpg";

//     res.write("<h1>" + titleOfRecipe + ".</h1>");
//     res.write("<p>"+ otherIngredients + "</p>");
//     res.write("<img src="+ image + ">");

//     res.send();
// });


// });
// }); 



app.listen(5000, function(){
	console.log("Server is running at Port 5000");
})
;
