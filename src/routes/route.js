const express = require('express');
const router = express.Router();

const collegeController = require('../Controllers/collegeController')
const internController = require('../Controllers/internController')
// const collageModel = require("../Models/collegeModel")

router.get("/test-me", function(req,res){
    res.send("hello there")
})


router.post("/colleges",collegeController.createCollege)
router.post("/interns",internController.createIntern)

router.get("/collegeDetails",collegeController.collegeDetails)


module.exports= router;