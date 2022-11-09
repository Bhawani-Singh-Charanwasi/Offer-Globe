import PublisherUserModel from "../Models/PublisherUserModel.js";
import bcrypt from "bcrypt";
import advertiserUserModel from "../Models/advertiserUserModel.js";


// PublisherUser a User
export const PublisherUser = async(req, res)=> {
    const { firstName , lastName, email, phoneNumber, password,companyName,address1,address2,city, state, country,zipCode, skype, trafficSource, experience, hearAbout, currentlyPromote, isMember, signed, isAgree} = req.body;

    // Hashed Password
    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);

    const newUser = new PublisherUserModel({firstName , lastName, email, phoneNumber,password:hashedPass,companyName,address1,address2,city, state, country,zipCode, skype, trafficSource, experience, hearAbout, currentlyPromote, isMember, signed, isAgree});

    try {
        await newUser.save();
        res.status(200).json(newUser);
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
}

// Advertiser User Model
export const AdvertiserUser = async(req, res)=> {
    const { firstName , lastName, email, phoneNumber,companyName,address1,address2,city, state, country,zipCode, skype, hearAbout,siteUrl,description, signed, isAgree} = req.body;

    const newUser = new advertiserUserModel({firstName , lastName, email, phoneNumber,companyName,address1,address2,city, state, country,zipCode, skype, hearAbout,siteUrl, description, signed, isAgree});

    try {
        await newUser.save();
        res.status(200).json(newUser);
    } catch (error) {
        res.status(500).json({ message: error.message});
    }
}

