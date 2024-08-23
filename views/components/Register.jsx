import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { imageUpload } from "../../app/utility/image_Utility";

const Register = () => {
    const [error, setError] = useState(''); 
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate(); 

    const handleRegister = async (e) => {
        e.preventDefault(); // Prevent default form submission
        const form = new FormData(e.currentTarget); 
        const EmailAddress = form.get('email'); 
        const Password = form.get('password');
        const Images = form.get('photourl'); 
        const Name = form.get('name'); 
        setLoading(true); 

        try {
            // Check if an image is uploaded; if not, use a default image
            let Image;
            if (Images && Images.size > 0) {
                const imageData = await imageUpload(Images); // Upload image and get the URL
                Image = imageData.data.display_url;
            } else {
                Image = 'https://i.ibb.co/gdGfHLj/profile-user-icon-isolated-on-white-background-eps10-free-vector.jpg'; // Default image URL
            }

            // Prepare the payload for the registration request
            const payload = {
                Name,
                Password,
                EmailAddress,
                Image
            };

            // Send registration request to the server
            const response = await fetch('http://localhost:5001/api/CreateProfile', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload)
            });

            if (response.status === 200) {
                navigate('/signin'); // Redirect to login page on successful registration
                toast.success('Registration successful!'); // Show success message
            } else {
                const errorData = await response.json();
                setError(errorData.message || 'Your email is already registered. Please use a different email or log in.'); 
                toast.error(errorData.message || 'Registration failed. Please try again.'); 
            }
        } catch (error) {
            setError(error.message || 'An unexpected error occurred.'); 
            toast.error(error.message || 'An unexpected error occurred.');
            setLoading(false); 
        }
    };

    return (
        <div>
            <div className="min-h-screen bg-white text-gray-900 flex justify-center">
                <div className="max-w-screen-xl m-0 sm:m-10 bg-white shadow sm:rounded-xl flex justify-center flex-1">
                    <div className="lg:w-1/2 xl:w-5/12 p-6 sm:p-12">
                        <div className="mt-12 flex flex-col items-center">
                            <h2 className="text-2xl font-semibold text-gray-700 text-center">Please Sign Up</h2>
                            <h2 className='text-gray-700  text-[25px] font-medium'>Hope<span className='text-[#068278]'>Aid</span></h2>
                            <div className="w-full flex-1 mt-1">
                                <div className="my-8 border-b text-center">
                                    <div className="leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform translate-y-1/2">
                                        sign up with e-mail
                                    </div>
                                </div>
                                <div className="mx-auto max-w-xs">
                                    {/* Registration form */}
                                    <form onSubmit={handleRegister}>
                                        <input
                                            className="w-full px-8 mb-4 py-4 rounded-lg font-medium bg-stone-50 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                            type="text" name='name' placeholder="Your name" required />
                                        <input
                                            className="w-full px-8 py-4 rounded-lg font-medium bg-stone-50 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white"
                                            type="email" name='email' placeholder="Email" required />
                                        <input
                                            className="w-full px-8 py-4 rounded-lg font-medium bg-stone-50 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5"
                                            type="password" name='password' placeholder="Password" required />
                                        <div className="flex items-center space-x-6 mt-3 mb-3">
                                            <label className="block">
                                                <span className="sr-only">Choose profile photo</span>
                                                <input type="file" name="photourl" className="block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#fef9f6] file:text-[#068278] hover:file:bg-[#068278] hover:file:text-[#fff]" />
                                            </label>
                                        </div>
                                        {/* Submit button with loading state */}
                                        <button
                                            className="mt-5 tracking-wide font-semibold py-4 rounded-lg transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none bg-bg-stone-50 border-[#068278] border text-[#068278] hover:bg-[#068278] hover:text-white px-4 w-full"
                                            disabled={loading}
                                        >
                                            {loading ? (
                                                // Show spinner when loading
                                                <svg
                                                    className="w-6 h-6 animate-spin"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path d="M4 12a8 8 0 118 8 8 8 0 01-8-8z" />
                                                </svg>
                                            ) : (
                                                // Show signup icon
                                                <svg
                                                    className="w-6 h-6 -ml-2"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                                                    <circle cx="8.5" cy="7" r="4" />
                                                    <path d="M20 8v6M23 11h-6" />
                                                </svg>
                                            )}
                                            <span className="ml-3">
                                                {loading ? 'Signing Up...' : 'Sign Up'}
                                            </span>
                                        </button>
                                        {/* Display error message */}
                                        {error && <h1 className='font-semibold text-red-500 ml-1 mb-5'>{error}</h1>}
                                    </form>
                                    <h4 className="mt-6 text-xs text-gray-600 text-center">
                                        Already have an account? Please <span className='text-red-500 font-semibold'><NavLink to={"/signin"}>Log in</NavLink></span>
                                    </h4>
                                    <p className="mt-6 text-xs text-gray-600 text-center">
                                        I agree to abide by HopeAid's <a href="#" className="border-b border-gray-500 border-dotted">Terms of Service</a> and its <a href="#" className="border-b border-gray-500 border-dotted">Privacy Policy</a>.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 bg-[#FEF9F6] text-center hidden lg:flex">
                        <div className="m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat">
                            <img className='lg:mt-10' src="https://i.ibb.co/7rjVxbY/Mobile-login-pana.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
