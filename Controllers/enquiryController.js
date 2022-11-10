import enquiryModel from "../Models/enquiryModel.js";


const enquiry = async (req, res)=>{
    const {
        name,
        phone,
        email,
        enquiry,
        message 
    } = req.body;

    const newData = new enquiryModel({
        name,phone,email,enquiry,message
    });

    try {
        await newData.save();
        res.status(200).json(newData);
    } catch (error) {
        res.status(500).json({message:error.message });
    }
}

export default enquiry;