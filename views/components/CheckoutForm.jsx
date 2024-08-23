import React, { useEffect, useState } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import toast from 'react-hot-toast';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from "../loader/loading.jsx";
import Footer from './Footer.jsx';
import Navbar from './Navbar.jsx';

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const [donationCard, setDonationCard] = useState(null);
  const [donations, setTotalDonation] = useState(null);
  const navigate = useNavigate();
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    fetch(`http://localhost:5001/api/donationCard/${id}`)
      .then(response => response.json())
      .then(data => setDonationCard(data))
      .catch(error => console.error('Error fetching donation card:', error));
  }, [id]);

  useEffect(() => {
    fetch("http://localhost:5001/api/donationCard")
      .then(response => response.json())
      .then(data => setTotalDonation(data))
      .catch(error => console.error('Error fetching donation card:', error));
  }, []);

  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  useEffect(() => {
    // Update the date every second
    const timer = setInterval(() => {
      setDate(new Date());
    }, 1000);

    // Clean up the timer on component unmount
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let amount = donationCard?.Donate * 100 ||384; // Convert dollars to cents
    amount = Math.max(amount, 50);
    const email = e.target.email.value;
    const currency = e.target.currency.value;

    setLoading(true);
    const cardElement = elements.getElement(CardElement);

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });

    console.log(amount, currency, email, paymentMethod);

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      // Send paymentMethod.id to your server for processing
      const response = await fetch('http://localhost:5001/api/createpayment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ paymentMethodId: paymentMethod.id, amount, currency, email }),
      });

      if (response.ok) {
        setError(null);
        navigate('/paymentSuccess');
        toast.success('Payment successful!');
      } else {
        setError('Payment failed. Please try again.');
      }
      setLoading(false);
    }
  };

  if (!donationCard || !donations) {
    return <div><Loading></Loading></div>;
  }

  return (
    <div>
      <Navbar></Navbar>
      <div className="relative mx-auto w-full bg-white">
      <div className="grid min-h-screen grid-cols-10">
        <div className="col-span-full py-6 px-4 sm:py-12 lg:col-span-6 lg:py-24">
          <div className="mx-auto w-full max-w-lg">
            <h1 className="relative text-2xl font-medium text-gray-700 sm:text-3xl">
              HopeAid Checkout
              <span className="mt-2 block h-1 w-10 bg-teal-600 sm:w-20"></span>
            </h1>
            <form onSubmit={handleSubmit} className="mt-10 flex flex-col space-y-4">
              <div>
                <label htmlFor="email" className="text-xs font-semibold text-gray-500">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="john.capler@fang.com"
                  className="mt-1 block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <CardElement className="block w-full rounded border-gray-300 bg-gray-50 py-3 px-4 text-sm placeholder-gray-300 shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500" />
              <div>

                <p className="text-xs font-semibold text-gray-500">Select your Currency</p>
                <div className="mr-6 flex flex-wrap  mb-3">
                  <div className="my-1">
                    <label htmlFor="currency" className="sr-only">
                      Select currency
                    </label>
                    <select
                      name="currency"
                      id="currency"
                      className="cursor-pointer rounded border-gray-300 bg-gray-50 py-3 px-2 text-sm shadow-sm outline-none transition focus:ring-2 focus:ring-teal-500"
                    >
                    <option  value="USD">USD</option>
                    <option value="BDT">BDT</option>
                    <option value="EUR">EUR</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center w-full">
                          <p className="text-base  font-semibold leading-4 text-gray-500">
                            Total Donate:
                          </p>
                          <p className="text-base  font-semibold leading-4 text-gray-600">
                            ${donationCard?.Donate || 384}
                          </p>
                        </div>
              <p className="mt-10  text-sm font-normal text-gray-500">
                By placing this order you agree to the{' '}
                <a href="#" className="whitespace-nowrap text-teal-400 underline hover:text-teal-600">
                  Terms and Conditions
                </a>
              </p>
              <button
                className="mt-6 inline-flex w-full items-center justify-center rounded bg-teal-600 py-2.5 px-4 text-base font-semibold tracking-wide text-white text-opacity-80 outline-none ring-offset-2 transition hover:text-opacity-100 focus:ring-2 focus:ring-teal-500 sm:text-lg"
                type="submit"
                disabled={!stripe || loading}
              >
                {loading ? 'Processing...' : 'Donate'}
              </button>
            </form>
          </div>
        </div>
        <div className="relative col-span-full flex flex-col py-6 pl-8 pr-4 sm:py-12 lg:col-span-4 lg:py-24">
          <h2 className="sr-only">Donation summary</h2>
          <div>
            <img
              src="https://i.ibb.co/Fxrg4M8/donation-box-and-charity-concept-human-hands-putting-money-cash-love-and-heart-to-donation-box-toget.jpg"
              alt=""
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-teal-800 to-teal-400 opacity-90 object-cover"></div>
          </div>
          {donationCard ? (
            <div className="relative">
              <ul className="space-y-5">
                <li className="flex justify-between">
                  <div className="inline-flex">
                    <img src={donationCard?.img || "https://i.ibb.co/Fxrg4M8/donation-box-and-charity-concept-human-hands-putting-money-cash-love-and-heart-to-donation-box-toget.jpg"} alt="" className="max-h-16 object-cover rounded" />
                    <div className="ml-3">
                      <p className="text-base font-semibold text-white">{donationCard?.title || "Every Contribution Counts Support Us in Your Own Way"}</p>
                      <p className="text-sm font-medium text-white text-opacity-80">{donationCard?.Date || date.toLocaleString()}</p>
                      <p className="text-sm font-semibold mt-1 text-white">${donationCard?.Donate ||384 }</p>
                    </div>
                  </div>

                </li>
              </ul>
              <div className="my-5 h-0.5 w-full bg-white bg-opacity-30"></div>
              <div className="space-y-2">
                <p className="flex justify-between text-lg font-bold text-white">
                  <span>Donate:</span>
                  <span className="text-white">${donationCard?.Donate || 384}</span>
                </p>
              </div>
            </div>
          ) : (
            <p className="relative text-white">No donation data found.</p>
          )}
          <div className="relative mt-10 lg:mt-[400px] text-white">
            <h3 className="mb-5 text-lg font-bold">Support</h3>
            <p className="text-sm font-semibold">
              +01 653 235 211 <span className="font-light">(International)</span>
            </p>
            <p className="mt-1 text-sm font-semibold">
              support@DevGenius.com <span className="font-light">(Email)</span>
            </p>
            <p className="mt-2 text-xs font-medium">Call us now for payment related issues</p>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
    </div>
  );
};

export default CheckoutForm;
