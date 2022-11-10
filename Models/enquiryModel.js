import mongoose from "mongoose";

const enquirySchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:true
        },
        email:{
            type:String,
            required:true 
        },
        phone:{
            type:Number,
            required:true
        },
        enquiry:{
            type:String,
            required:true
        },
        message:{
            type:String,
            required:true
            
        }
    }
);

const enquiryModel = mongoose.model("enquiries", enquirySchema);

export default enquiryModel