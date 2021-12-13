const mongoose = require('mongoose');

const seatSchema= mongoose.Schema({
    show:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"shows",
        required:true
    }
}, {
    versionKey: false,
    timestamps:true
})


module.exports = mongoose.model('seat',seatSchema);