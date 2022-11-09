import UserModel from "../Models/UserModel.js";
// import bcrypt from "bcrypt";


// User
export const User = async(req, res)=> {
    const { firstName , lastName, email, phoneNumber, password,companyName,address1,address2,city, state, country,zipCode, skype, trafficSource, experience, hearAbout, currentlyPromote, isMember, signed, isAgree,siteUrl,description,} = req.body;

    // // Hashed Password
    // const salt = await bcrypt.genSalt(10);
    // const hashedPass = await bcrypt.hash(password, salt);

    const newUser = new UserModel({firstName , lastName, email, phoneNumber,password,companyName,address1,address2,city, state, country,zipCode, skype, trafficSource, experience, hearAbout, currentlyPromote, isMember, signed, isAgree,siteUrl,description,});

    try {
        await newUser.save();
        res.status(200).json(newUser);
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
}