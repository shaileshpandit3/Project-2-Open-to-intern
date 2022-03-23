const  mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const internSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email: {
        type:String,
        required:true,
        unique: true,
        match:[/^\w+([\.-]?\w+)@\w+([\. -]?\w+)(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    mobile:{
        type:String,
        required: true,
        unique: true,
        match: /^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/
    },
    collegeId: {
        type:ObjectId,
        ref:"college model",
        required: true
    },
    isDeleted: {
        type:Boolean,
        default: false
    }
},{timestamps:true});

module.exports= mongoose.model("intern",internSchema)