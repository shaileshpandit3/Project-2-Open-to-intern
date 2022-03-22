const collegeModel = require("../models/collegeModel")
const internModel = require("../models/internModel")


const isValid = function (value) {
    if (typeof value == undefined || value == null) return false
    if (typeof value === 'string' && value.trim().length === 0) return false
    return true
}

// create college................................................

const createCollege = async function (req,res){
    
try{    
    const data = req.body;

    if (Object.keys(data).length > 0) {

        if (!isValid(data.name)) { return res.status(400).send({ status: false, msg: "Name is required" }) }
        if(!isValid(data.fullName)){return res.status(400).send({status:false , msg:"Full Name is required"})}

        if((/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/.test(data.logoLink))){    
       
    const savedData = await collegeModel.create(data)

   return res.status(201).send({status: "college Created", savedData})

     }else{res.send({msg : "please enter a valid URL"})}
         
    }else{res.send({msg: "please enter some data"})}

}catch(err){
   return res.status(500).send({ERROR:err.message})
}}


// get college detalis......................................

const collegeDetails = async function (req, res) {
    try {
      let collegeName = req.query.collegeName
      if (!collegeName) { return res.status(400).send({ status: false, ERROR: "Please provide collegeName in query" }) }
      let resCollege = await collegeModel.findOne({ name: collegeName })
      if (!resCollege) { return res.status(404).send({ status: false, Error: "no college found" }) }
  
      let presentInterns = await internModel.find({ collegeId: resCollege._id })
      let result = { name: resCollege.name, fullName: resCollege.fullName, logoLink: resCollege.logoLink }
      if (presentInterns.length > 0) {
        result["Interest"] = presentInterns
  
        return res.status(200).send({ data: result })
      }
  
      if (presentInterns.length == 0) {
        result["Interest"] = "no interns for now";
        return res.status(200).send({ data: result })
      }
  
  
    } catch (err) {
      return res.status(500).send({ ERROR: err.message })
    }
  
  }
  
       
  
module.exports.collegeDetails = collegeDetails;

module.exports.createCollege = createCollege