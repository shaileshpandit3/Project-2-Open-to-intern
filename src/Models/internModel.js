const  mongoose = require('mongoose');
const ObjectId = mongoose.Schema.Types.ObjectId

const internSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
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
        pattern: /^[+]91(9|8|7)\d{9}$/,
        maxlength: 10
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