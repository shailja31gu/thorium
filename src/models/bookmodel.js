 const mongoose = require('mongoose');

 const createbook = new mongoose.Schema({
     bookName:String,
     authorName:String,
     category:String,
     year:Number,
 })
 module.exports=mongoose.model('book',createbook )