//<-------------------------< Importing : Packages >---------------------->//
const express = require('express');
const router = express.Router();
const {createStd} = require('../controllers/studentController.js');


router.post("/register",createStd);

//router.post("/login",loginUser) 




//<------------------------< Exports : router >------------------------------>//
module.exports = router;