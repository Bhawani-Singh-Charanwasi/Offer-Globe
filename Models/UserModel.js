import mongoose from "mongoose";

//User Schema
const UserSchema = mongoose.Schema(
    {
        firstName:{
            type:String,
            required:true
        },
        lastName:{
            type:String
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        phoneNumber:{
            type:Number,
            required:true,
            unique:true
        },
        companyName:{
            type:String,
            required:true
        },
        address1:{
            type:String,
            required:true
        },
        address2:{
            type:String,
        },
        city:{
            type:String,
            required:true 
        },
        state:{
            type:String,
            required:true
        },
        country:{
            type:String,
            required:true
        },
        zipCode:{
            type:Number,
            required:true
        },
        skype:{
            type:String,
            required:true
        },
        trafficSource:{
            type:String
        },
        experience:{
            type:String
        },
        hearAbout:{
            type:String,
            required:true
        },
        currentlyPromote: {
            type:String
        },
        isMember:{
            type:Boolean
        },
        signed:{
            type:String
        },
        isAgree:{
            type:Boolean,
            default:false
        },
        siteUrl:{
            type:String
        },
        description:{
            type:String
        }
    }
);

// User Model
const UserModel = mongoose.model("users", UserSchema);
export default UserModel;