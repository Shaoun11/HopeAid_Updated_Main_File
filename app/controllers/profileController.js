import profileModelUser from "../models/profileModel.js";
import jwt from 'jsonwebtoken';
export const CreateProfile = async (req, res) => {
    try {
        // Your Code Here
        const reqBody=req.body;
        const data = await profileModelUser.create(reqBody);
       return res.status(200).json({status:"success",data:data})
        
    } catch (error) {
        return res.status(400).json({ status: "fail", data: error });
    }
};

export const ShowProfile = async (req, res) => {   
    try {
        const data = await profileModelUser.find().exec();
        return res.status(200).json({status:"success",data:data})
    } catch (error) {
        return res.status(400).json({ status: "fail", data: error });
    }
}

export const UserLogin = async (req, res) => {
   
    try {
        let EmailAddress=req.body['EmailAddress'];
        let Password=req.body['Password']
        let projection="Name EmailAddress Image"

        const data = await profileModelUser.find({ EmailAddress: EmailAddress, Password: Password },projection).exec();
        
        if (data.length > 0) {
            // Create Auth Token
            let Payload = { exp: Math.floor(Date.now() / 1000) + (24 * 60 * 60), data: data[0] };
            let token = jwt.sign(Payload, 'SecretKey123456789');

            res.status(200).json({ status: "success", token: token, data: data[0] });
        } else {
            res.status(401).json({ status: "unauthorized" });
        }
    } catch (error) {
        res.status(500).json({ status: "error", data: error.message });
    }
};

