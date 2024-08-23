// models/StripeTransaction.js
import mongoose from 'mongoose';

const StripeTransactionSchema = new mongoose.Schema({
    paymentMethodId:{type:String},
    amount:{type:Number},
    email:{type:String},
    currency:{type:String},
    
},{ timestamps: true, versionKey: false }
);

const StripeTransaction = mongoose.model('StripeTransaction', StripeTransactionSchema);
export default StripeTransaction;
