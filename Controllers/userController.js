import UserModel from "../Models/UserModel.js";

// User
const User = async(req, res)=> {
    const {types, firstName , lastName, email, phoneNumber, password,companyName,address1,address2,city, state, country,zipCode, skype, trafficSource, experience, hearAbout, currentlyPromote, isMember, signed, isAgree,siteUrl,description,} = req.body;

    const newUser = new UserModel({types, firstName , lastName, email, phoneNumber,password,companyName,address1,address2,city, state, country,zipCode, skype, trafficSource, experience, hearAbout, currentlyPromote, isMember, signed, isAgree,siteUrl,description,});

    try {
        await newUser.save();
        res.status(200).json(newUser);
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
}

export default User