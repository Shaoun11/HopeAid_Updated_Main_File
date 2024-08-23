// controllers/stripeController.js
import Stripe from 'stripe';
import StripeTransaction from '../models/paymentModel.js';

const stripe = new Stripe('sk_test_51OHpPbHeHzAXsbmy35pODONdAdyCMaitZA8Z31d062zGLQMs52HtJdLTF3cYqL5RoS1AKPYNvuMS9aZaZoFD7SoS00QO8nsLBS');

export const createPayment = async (req, res) => {
  const { paymentMethodId, amount, currency, email } = req.body;

  // Ensure the amount meets the minimum threshold
  if (amount < 50) { // For USD, 50 cents
    return res.status(400).send({
      error: `Amount must be at least $0.50 USD.`,
    });
  }

  try {
    // Create a PaymentIntent and confirm it immediately
    const paymentIntent = await stripe.paymentIntents.create({
      amount,
      currency,
      payment_method: paymentMethodId,
      confirm: true, // Confirm immediately
      automatic_payment_methods: {
        enabled: true,
        allow_redirects: 'never', // No redirects allowed
      },
    });

    // Save transaction details in the database
    const transaction = new StripeTransaction({
      amount,
      currency,
      email,
      paymentMethodId,
      paymentIntentId: paymentIntent.id,
      status: paymentIntent.status,
    });

    await transaction.save();

    res.status(200).send({ success: true, paymentIntent });
  } catch (error) {
    // Send a descriptive error message
    res.status(400).send({ error: error.message });
  }
};
