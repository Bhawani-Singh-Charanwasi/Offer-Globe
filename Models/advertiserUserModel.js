import mongoose from "mongoose";

// advertiserUserSchema
const advertiserUserSchema = mongoose.Schema(
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
            required:true
        },
        phoneNumber:{
            type:Number,
            required:true
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
        hearAbout:{
            type:String,
            required:true
        },
        signed:{
            type:String
        },
        isAgree:{
            type:Boolean,
            default:false
        },
        siteUrl:{
            type:String,
            required:true
        },
        description:{
            type:String, 
            required:true
        }
    },
    {timestamps:true}
);

// advertiserUserModel
const advertiserUserModel = mongoose.model("advertiser", advertiserUserSchema, "users");
export default advertiserUserModel;