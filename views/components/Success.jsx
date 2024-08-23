import React, { useEffect, useState } from 'react';
import { jwtDecode } from "jwt-decode";
const Success = () => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(true);
    useEffect(() => {
        const fetchUserData = () => {
          const token = localStorage.getItem('authToken'); // Retrieve the token from local storage
          if (!token) {
            setUser(null); 
            setLoading(false);
            return;
          }
          try {
            const decodedToken = jwtDecode(token); 
            setUser(decodedToken);
          } catch (error) {
            setLoading(false);
            setError('Error decoding token');
            console.error('Token decoding error:', error);
          }
        };
    
        fetchUserData(); 
      }, []);
      console.log(user);
    return (
        <div>
            <div class="bg-[#fef9f6] h-screen">
      <div class="bg-[#fef9f6cd] p-6  md:mx-auto">
        <svg viewBox="0 0 24 24" class="text-green-600 w-16 h-16 mx-auto my-6">
            <path fill="currentColor"
                d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z">
            </path>
        </svg>
        <div class="text-center">
            <h3 class="md:text-2xl text-base text-gray-900 font-semibold text-center">Congratulations<span className='text-[#068278]'> {user?.data?.Name}!</span> Your donation has been Done!</h3>
            <p class="text-gray-600 my-2">Thank you for your generous contribution. Your support is greatly appreciated!.</p>
            <p class="text-gray-600 my-2">Your Transaction ID:QMD385730SKU678.</p>
            <p> Have a great day!  </p>
            <div class="py-10 text-center">
                <a href="/" class="bg-[#068278] hover:border-[#068278] hover:border text-[#FFF] hover:bg-[#FFF] btn rounded-3xl px-12 py-4 hover:text-[#068278] border-transparent">
                    GO Home
               </a>
            </div>
        </div>
    </div>
  </div>
        </div>
    );
};

export default Success;