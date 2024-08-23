import { useState } from 'react';
import toast from "react-hot-toast";
import { Form, Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);  // Start the loading animation
        const email = e.target.email.value;
        const password = e.target.password.value;

        try {
            const response = await fetch('http://localhost:5001/api/UserLogin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ EmailAddress: email, Password: password })
            });

            const result = await response.json();

            if (response.status === 200) {
                setMessage('Login successful');
                localStorage.setItem('authToken', result.token);
                navigate("/");
                toast.success('Login successful');
            } else if (response.status === 401) {
                toast.error('Unauthorized: Invalid email or password.');
                setMessage('Unauthorized: Invalid email or password.');
            } else {
                toast.error(`Login failed: ${result.status}`);
                setMessage(`Login failed: ${result.status}`);
            }
        } catch (error) {
            toast.error(`An error occurred: ${error.message}`);
            setMessage(`An error occurred: ${error.message}`);
        } finally {
            setLoading(false);  // Stop the loading animation
        }
    };

    return (
        <>
            <div className='mt-20'>
                <div className="py-16">
                    <div className="flex backdrop-blur-3xl bg-[#FEF9F6] rounded-xl border overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
                        <div className="hidden lg:block lg:w-1/2 bg-cover">
                            <img className='bg-white h-[500px] w-[880px] object-cover' src="https://i.ibb.co/R3GyTrY/Sign-in-rafiki.png" alt="" />
                        </div>
                        <div className="w-full p-8 lg:w-1/2 mt-4">
                            <h2 className="text-2xl font-semibold text-gray-700 text-center">Please Log in</h2>
                            <p className="text-xl text-gray-600 text-center">Hey, Welcome back!
                                <h2 className='text-gray-700 text-[22px] font-medium'>Hope<span className='text-[#068278]'>Aid</span> </h2>
                            </p>
                            {message && <div className="text-red-500 text-center mt-2">{message}</div>} {/* Display error message */}
                            <div className="mt-4 flex items-center justify-between">
                                <span className="border-b w-1/5 lg:w-1/4"></span>
                                <a href="#" className="text-xs text-center text-gray-500 uppercase">Login with email</a>
                                <span className="border-b w-1/5 lg:w-1/4"></span>
                            </div>
                            <form onSubmit={handleLogin}>
                                <div className="mt-4">
                                    <label className="block text-gray-700 text-sm font-medium mb-2">Email Address</label>
                                    <input className="bg-stone-50 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" name='email' type="email" required />
                                </div>
                                <div className="mt-4">
                                    <div className="flex justify-between">
                                        <label className="block text-gray-700 text-sm font-medium mb-2">Password</label>
                                    </div>
                                    <input className="bg-stone-50 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" name='password' type="password" required />
                                </div>
                                <div className="mt-8">
                                    <button
                                        className={`flex items-center justify-center bg-bg-stone-50 border-[#068278] border text-[#068278] hover:bg-[#068278] hover:text-white font-bold py-2 px-4 w-full rounded ${loading ? 'cursor-not-allowed' : ''}`}
                                        disabled={loading}
                                    >
                                        {loading ? (
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
                                        {loading ? 'Logging in...' : 'Login'}
                                    </button>
                                </div>
                            </form>
                            <div className="mt-4 flex items-center justify-between">
                                <span className="border-b w-1/5 md:w-1/4"></span>
                                <span className="text-xs text-gray-500 uppercase">or <Link to={"/register"}><span className='font-semibold text-red-500'>sign up</span></Link></span>
                                <span className="border-b w-1/5 md:w-1/4"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
