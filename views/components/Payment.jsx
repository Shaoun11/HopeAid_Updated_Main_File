import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51OHpPbHeHzAXsbmyxMFYTVmlfNiH1dO0sXlwehorwb14mbLUyyJH1iPr3pT7tzrToBoWX5dwRIDFHd4GuSXqZb3O00IdnKFLOr');
const Payment = () => {
    
    return (
        <Elements stripe={stripePromise}>
        <CheckoutForm />
      </Elements>
    );
};

export default Payment;