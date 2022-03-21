const mongoose   = require('mongoose');


const collegeSchema = new mongoose.Schema({
    name: {
        type: String,
        unique: true,
        required:true,
        trim: true,
        lowercase: true
    },
    fullName:{
        type:String,
        required: true
    },
    logoLink:{
    type: String,
    required: true,
    //match: [(("http|https):/)(www.)?[a-zA-Z0-9@:%._\\+~#?&//=]{2,256}\\.[a-z]{2,6}\\b([-a-zA-Z0-9@:%._\\+~#?&//=]*),"please enter valid URL"]"
},
    isDeleted: {
        type: Boolean,
        default: false
    }

},{timestamps:true});

module.exports= mongoose.model("College",collegeSchema)