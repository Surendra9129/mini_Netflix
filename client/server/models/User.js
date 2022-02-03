const mongoose=require('mongoose');
const UserSchema=new mongoose.Schema(
    {
        username:{type:String,required:false},
        email:{type:String, required:true, unique:true},
        password:{type:String,required:true},
        profilePic:{type:String, default: " "},
        isAdmin: {type: Boolean, default: false},

    } ,{
        timestamps:true,
        versionKey:false
    } 
)

module.exports=mongoose.model('User',UserSchema)