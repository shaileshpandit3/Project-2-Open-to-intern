const express = require('express');
const router = express.Router();

const collegeController = require('../Controllers/collegeController')
// const internController = require('../Controllers/internController')


router.get("/test-me", function(req,res){
    res.send("hello there")
})


router.post("/functionup/colleges",collegeController.collegeSchema)
router.post("/functionup/interns",internController.internSchema)


module.exports= router;