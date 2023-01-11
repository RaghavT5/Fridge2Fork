var axios = require('axios');
require('dotenv').config();

// const getUrl =

//API to get recipes based on ingredients
const getFood = async (req, res, next) => {

    const ingredientList = req.body.ingredientList;
    const numberOfResults = 20;
    // const data = "cheese,Flour,sugar";
    var config = {
        method: 'get',
        url: `https://api.spoonacular.com/recipes/findByIngredients?ingredients=${ingredientList}&number=${numberOfResults}&apiKey=${process.env.API_KEY}`,
    };

//     var arr = []
//     await axios(config)
//         .then(function (response) {
//             response.data.map((data, index) => {
//                 var obj = {
//                     id: data.id,
//                     count: index,
//                     title: data.title,
//                     image: data.image,
//                     // usedIngredients: data.usedIngredients,
//                     // otherIngredients: data.missedIngredients,
//                 }
//                 arr.push(obj);
//             })

//             return res.send({
//                 success: true,
//                 message: "Data fetched",
//                 data: arr
//             })
//         })
//         .catch(function (error) {

//             return res.send({
//                 success: false,
//                 message: "problem in spoon wala api",
//                 data: error
//             });

//         });
// }

var arr = []
    await axios(config)
        .then(async function (response) {

            for(var i =0; i<response.data.length;i++ ){
var url
 var config = {
        method: 'get',
        url: `https://api.spoonacular.com/recipes/${response.data[i].id}/information?includeNutrition=false&apiKey=${process.env.API_KEY}`,
    }; 
    await axios(config)
        .then(function (response) {
           
    url = response.data.sourceUrl
        
        })
         var imageSize="240x150";
         var obj = {
                    id: response.data[i].id,
                    
                    title: response.data[i].title,
                    image: `https://spoonacular.com/recipeImages/${response.data[i].id}-${imageSize}.jpg`,
                    //image: response.data[i].image,
                    recipeUrl:url
                    // usedIngredients: data.usedIngredients,
                    // otherIngredients: data.missedIngredients,
                }

                arr.push(obj);

            }

return res.send({
                success: true,
                message: "Data fetched",
                data: arr
            })


   })
      
        .catch(function (error) {
console.log(error)
            return res.send({
                success: false,
                message: "problem in spoon wala api",
                data: error
            });

        });
}


const getRecipeInfo = async (req, res, next) => {
    const id = req.params.id;
    console.log(id)
    var config = {
        method: 'get',
        url: `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${process.env.API_KEY}`,
    };

    await axios(config)
        .then(function (response) {
            console.log(response)
            const recipeInfo = {
                url:response.data.sourceUrl
    // summry:response.data.summary
                }
            return res.send({
                success: true,
                message: "Data fetched",
                data: recipeInfo
            })
        })
        .catch(function (error) {
            return res.send({
                success: false,
                message: "problem in spoon wala api",
                data: error
            });
        });
}


// const getRecipeInfo = async (req, res, next) => {
//     const id = req.params.id;
//     var config = {
//         method: 'get',
//         url: `https://api.spoonacular.com/recipes/${id}/information?includeNutrition=false&apiKey=${process.env.API_KEY}}`,
//     };

//     var arr = []
//     await axios(config)
//         .then(function (response) {
//             response.data.map((data) => {
//                 var obj = {
//                     url: data.sourceUrl
//                 }
//                 arr.push(obj);
//             })

//             return res.send({
//                 success: true,
//                 message: "Data fetched",
//                 data: arr
//             })
//         })
//         .catch(function (error) {

//             return res.send({
//                 success: false,
//                 message: "problem in spoon wala api",
//                 data: error
//             });

//         });
// }

module.exports = {
    getFood,
    getRecipeInfo 
}
