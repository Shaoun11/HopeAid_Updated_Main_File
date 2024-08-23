import mongoose from 'mongoose';
const donationSchema = new mongoose.Schema(
    {
       
          title: { type: String},
          Date: { type: String},
          Donate: { type: String},
          Total_Donate: { type: String},
          img: { type: String},
        
    },
    { timestamps: true, versionKey: false }
);

const donation = mongoose.model('DonationCard', donationSchema);

export default donation;
