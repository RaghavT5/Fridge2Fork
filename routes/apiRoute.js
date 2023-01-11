const express = require('express')
const router = express.Router();
const {
    getFood,
    getRecipeInfo
} = require("../controllers/apiController");

// router.get('/get', getApi);
router.post('/get', getFood);
// router.get('/recipe/:id', getRecipe);
router.get('/searchResult/recipeInfo/:id', getRecipeInfo);

module.exports = router;