import mongoose from 'mongoose';
const ProfileSchema = new mongoose.Schema(
    {
        Name:{type:String},
        EmailAddress:{type:String,unique:true},
        Password:{type:String},
        Image:{type:String}
    },
    { timestamps: true, versionKey: false }
);

const profileModelUser = mongoose.model('Profile', ProfileSchema);

export default profileModelUser;

