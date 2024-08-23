import mongoose from 'mongoose';
const donationBlogSchema = new mongoose.Schema(
    {
       
          title: { type: String},
          Date: { type: String},
          Image:{type:String},
        
    },
    { timestamps: true, versionKey: false }
);

const donationBlog = mongoose.model('DonationBlog', donationBlogSchema);

export default donationBlog;
