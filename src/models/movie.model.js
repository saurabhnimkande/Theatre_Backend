const mongoose = require('mongoose');

const movieSchema= mongoose.Schema({
    name:{type:String, required:true},
    actors:[{type:String}],
    languages:[{type:String}],
    directors:[{type:String}],
    poster_url:{type:String}
} ,{
    versionKey: false,
    timestamps:true
})


module.exports =mongoose.model("movie",movieSchema);