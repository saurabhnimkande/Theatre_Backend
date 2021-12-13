const mongoose = require('mongoose');

const screenSchema= mongoose.Schema({
    name:{type:String, required:true},
    theatre:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"theaters",
        required:true
    }
} , {
    versionKey: false,
    timestamps:true
})


module.exports = mongoose.model('screen',screenSchema);