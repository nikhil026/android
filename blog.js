var mongoose=require('mongoose');

var blogSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    title:String,
    userId:mongoose.Schema.Types.ObjectId
});

module.exports=mongoose.model('Blog', blogSchema);