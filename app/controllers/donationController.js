import donationData from "../models/donationModel.js";
// Controller for donation
export const donationDataCreate = async (req, res) => {
    try {
        // Your Code Here
        const reqBody=req.body;
        const data = await donationData.create(reqBody);
       return res.status(200).json({status:"success",data:data})
        
    } catch (error) {
        return res.status(400).json({ status: "fail", data: error });
    }
};

export const donationDatas = async (req, res) => {
    try {
        const data = await donationData.find();
        return res.status(200).json({ status: "success", data: data });
    } catch (error) {
        return res.status(400).json({ status: "fail", data: error });
    }
};
export const donationDataByID = async (req, res) => {
    try {
        const data = await donationData.findById(req.params.id);
        if (!data) {
            return res.status(404).send({ message: 'Donation data by id not found' });
        }
        res.send(data);
    } catch (error) {
        res.status(500).send({ message: 'Error fetching donation card' });
    }
};



