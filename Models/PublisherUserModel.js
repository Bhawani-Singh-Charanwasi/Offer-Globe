import mongoose from "mongoose";

// publisherUserSchema
const publisherUserSchema = mongoose.Schema(
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
        password:{
            type:String,
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
        trafficSource:{
            type:String,
            required:true
        },
        experience:{
            type:String,
            required:true
        },
        hearAbout:{
            type:String,
            required:true
        },
        currentlyPromote: {
            type:String,
            required:true
        },
        isMember:{
            type:Boolean,
            default:false,
        },
        signed:{
            type:String
        },
        isAgree:{
            type:Boolean,
            default:false
        }
    },
    {timestamps:true}
);

// publisherUserModel
const publisherUserModel = mongoose.model("publisher", publisherUserSchema, "users");
export default publisherUserModel;