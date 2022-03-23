const internModel = require("../models/internModel")



// validation........................................................

const isValid = function (value) {
    if (typeof value == undefined || value == null) return false
    if (typeof value === 'string' && value.trim().length === 0) return false
    return true
}


// create intern....................................................

// const createIntern = async function (req, res) {


//     try {

//         let data = req.body;

//         if (Object.keys(data).length > 0) {

//             if (!isValid(data.name)) { return res.status(400).send({ status: false, msg: "First name is required" }) }
//             if(!isValid(data.collegeId)){return res.status(400).send({status:false , msg:"College Id is required"})}

//             if (!(/^\w+([\.-]?\w+)@\w+([\. -]?\w+)(\.\w{2,3})+$/.test(data.email))) {
//                 return res.status(400).send({ status: false, msg: "Please provide a valid email" })
//             }
//             if (!(/^([+]\d{2})?\d{10}$/.test(data.mobile))) {
//                 return res.status(400).send({ status: false, msg: "please provide a valid moblie Number" })
//             }

//             let dupli = await internModel.findOne({ email: data.email })

//             if (dupli) { return res.status(400).send({ status: false, msg: "Email already exists" }) }

//             let savedData = await internModel.create(data);
//             return res.status(201).send({ internDetails: savedData });

//         } else {
//             return res.status(400).send({ ERROR: "BAD REQUEST" })
//         }

//     } catch (err) {

//         return res.status(500).send({ ERROR: err.message })

//     }
// }


const createIntern = async function (req, res) {


    try {

        let { email, mobile,collegeId } = req.body;
        data = req.body
        if (Object.keys(data).length < 0) {
            res.status(400).send({ status: false, msg: "Body is missing" })
        }

        if (!isValid(email)) {
            res.status(400).send({ status: false, msg: "Please inter a email id" })
        }

        if (!(/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(email))) {
            res.status(400).send({ status: false, msg: "Please enter valid email Id" })
            return

        }

        if (!isValid(mobile)) {
            res.status(400).send({ status: false, msg: "Please inter a moblie number" })
        }

        if (!(/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/.test(mobile))) {
            res.status(400).send({ status: false, msg: "Please eneter valid mobile number" })
            return
        }

        if (!isValid(collegeId)) {
            res.status(400).send({ status: false, msa: "Please inter a college id" })
        }

        // if (!isValidObjectId(collegeId)) {
        //     res.status(400).send({ status: false, msg: "Please inter a valid college id" })
        // }

        const internData = await internModel.create(data);
        res.status(201).send({status:true, msg:'College Internship Successfully created',data:internData})


    } catch (err) {

        return res.status(500).send({ ERROR: err.message })

    }
}


module.exports.createIntern = createIntern;