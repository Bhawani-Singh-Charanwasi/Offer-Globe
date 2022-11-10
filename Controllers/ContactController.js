import userContact from "../Models/contactModel.js";


const Contact = async (req, res)=>{
    const {
        name,
        phone,
        email
    } = req.body;

    const newData = new userContact({
        name,phone,email
    });

    try {
        await newData.save();
        res.status(200).json(newData);
    } catch (error) {
        res.status(500).json({message:error.message });
    }
}

export default Contact;