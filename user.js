var mongoose=require('mongoose');

var userSchema = mongoose.Schema({
    _id:mongoose.Schema.Types.ObjectId,
    name:String,
    blogId:mongoose.Schema.Types.ObjectId,
});

module.exports=mongoose.model('User', userSchema);