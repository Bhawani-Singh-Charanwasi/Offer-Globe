import mongoose from "mongoose";

const ContactSchema = mongoose.Schema(
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
        }
    }
);

const ContactModel = mongoose.model("contacts", ContactSchema);

export default ContactModel