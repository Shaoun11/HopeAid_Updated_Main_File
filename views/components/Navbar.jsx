
import { Link } from 'react-scroll/modules';
import React, { useEffect, useState } from 'react';
import { IoClose } from "react-icons/io5";
import { jwtDecode } from "jwt-decode";
import '../../app/utility/Navber.css';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(!false);
  const [activeLink, setActiveLink] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [profile, setProfile] = useState(false);
  const navigate=useNavigate();
  const handleProfile = () => {
    setProfile(!profile);
  };
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
  const handleClick = (linkId) => {
      setActiveLink(linkId);
  };

  const handleLogout = () => {
    localStorage.removeItem('authToken');
    setUser(null);
    navigate('/signin');
  };

  return (
    //Navbar code start
    <div className=" sticky -top-1 bg-opacity-50 z-10  backdrop-blur-3xl   lg:h-[80px] w-full  h-auto   bg-[#fef9f6]  ">
    <div className="max-w-7xl mx-auto ">
      <nav className="px-6 py-3 flex lg:flex-row justify-between items-center">
        <div className="flex items-center ">
          <a href="/" className=" font-bold">
          <h2 className='text-[#18233B] cursor-pointer invisible lg:visible md:text-2xl text-xl font-medium'>Hope<span class='text-[#068278]'>Aid</span> </h2>
          </a>
        </div>
         {/* lg: device navbar    */}
        <ul className="hidden cursor-pointer lg:flex justify-between items-center gap-8 text-base text-[#18233B] font-normal ">
          <li>
            <Link to='/' smooth={true} offset={-90}
             className={`hover:text-[#068278] active:text-[#068278] ${activeLink === 'home' ? 'clicked' : ''}`}
             onClick={() => handleClick('home')}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to='donation' smooth={true} offset={-90} 
              className={`hover:text-[#068278] active:text-[#068278] ${activeLink === 'donation' ? 'clicked' : ''}`}
             onClick={() => handleClick('donation')}
            >
            Donation
              
            </Link>
          </li>
          <li>
            <Link
              to='features' smooth={true} offset={-90} 
              className={`hover:text-[#068278] active:text-[#068278] ${activeLink === 'features' ? 'clicked' : ''}`}
             onClick={() => handleClick('features')}
            >
             Features
              
            </Link>
          </li>

          <li>
            <Link
              to='volunteer' smooth={true} offset={-90} 
              className={`hover:text-[#068278] active:text-[#068278] ${activeLink === 'volunteer' ? 'clicked' : ''}`}
             onClick={() => handleClick('volunteer')}
            >
              Volunteer
            </Link>
          </li>

          <li>
            <Link
              to='blog' smooth={true} offset={-90} 
              className={`hover:text-[#068278] active:text-[#068278] ${activeLink === 'blog' ? 'clicked' : ''}`}
             onClick={() => handleClick('blog')}
            >
            Blog
            </Link>
          </li>
        
        </ul>

        <div className="flex items-center  gap-x-3">
          {/* Mobile device navbar */}
          <div
            onClick={() => setToggleMenu(!toggleMenu)}
            className="lg:hidden order-2"
          >
            {toggleMenu === true ? (
              <svg  className="lg:hidden md:-ml-[725px]  -ml-[350px] mx-auto  text-3xl font-semibold text-[#18233B] cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="30" height="40" viewBox="0 0 24 24" fill="none">
              <path d="M5.49762 12H18.5027" stroke="#171717" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M5.49762 16.0017H18.5027" stroke="#171717" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M5.49728 7.99832H18.5024" stroke="#171717" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            ) : (
              <IoClose className="lg:hidden md:-ml-[725px] -ml-[350px] text-2xl text-[#18233B] cursor-pointer" />
            )}

            <ul
              className={`mt-[150px] absolute w-full h-[300px] rounded-md top-full right-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4 bg-[#FFF] backdrop-blur-3xl text-[#18233B] p-8 z-50 flex flex-col items-center  gap-y-4 text-xl font-medium lg:hidden ${toggleMenu ? "hidden" : ""
                }`}
            >
                 <li>
            <a href='/' smooth={true} offset={-90} 
              className={`hover:text-[#068278] active:text-[#068278] ${activeLink === 'home' ? 'clicked' : ''}`}
             onClick={() => handleClick('home')}
            >
              Home
            </a>
          </li>
         
          <li>
            <Link
              to='donation' smooth={true} offset={-90} 
              className={`hover:text-[#068278] active:text-[#068278] ${activeLink === 'donation' ? 'clicked' : ''}`}
             onClick={() => handleClick('donation')}
            >
              Donation
            </Link>
          </li>
          <li>
            <Link
              to='features' smooth={true} offset={-90} 
              className={`hover:text-[#068278] active:text-[#068278] ${activeLink === 'features' ? 'clicked' : ''}`}
             onClick={() => handleClick('features')}
            >
            Features
              
            </Link>
          </li>
          <li>
            <Link
              to='volunteer' smooth={true} offset={-90} 
              className={`hover:text-[#068278] active:text-[#068278] ${activeLink === 'volunteer' ? 'clicked' : ''}`}
             onClick={() => handleClick('volunteer')}
            >
             Volunteer
            </Link>
          </li>

          <li>
            <Link
             to='blog' smooth={true} offset={-90} 
             className={`hover:text-[#068278] active:text-[#068278] ${activeLink === 'blog' ? 'clicked' : ''}`}
            onClick={() => handleClick('blog')}
            >
             Blog
            </Link>
          </li>
            </ul>
            
          </div>

          {/* Navbar button */}


          <div className="flex items-center gap-x-6 text-lg font-medium">
              {user ? (
                <>                
                <div
                    onClick={handleProfile}
                    className="flex justify-center items-center gap-x-4 cursor-pointer"
                  >
                    <div className="dropdown dropdown-end">
                      <div className="avatar online m-2" tabIndex={0}>
                        <div className="w-11 rounded-full">
                          <img className='object-cover' src={user?.data?.Image} />
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <>
                 
                <a href='/signin'>
                <div className="ml-4 invisible lg:visible " >
                  <button className="bg-[#FFF] border-[#068278] border text-[#068278] btn hover:bg-[#068278] rounded-3xl px-8 py-3 hover:text-white hover:border-transparent">
                   
                  Signup
                  </button>
                </div>
                </a>
                </>
              )}
            </div>

            {/* user profile */}
            <div className="flex">
              <div
                className={`w-[280px] z-10 h-fit absolute  rounded-md mr-32 mt-9 bg-opacity-50 backdrop-blur-md hover:shadow-md bg-[#eae4e4] py-8 px-5 ${profile
                  ? "top-7 left-20 lg:left-auto md:top-12  lg:right-5 md:left-[450px]  md:right-auto "
                  : "hidden"
                  } `}
              >
                <div className="w-[120px] h-[120px] mx-auto rounded-full border-2 border-[#068278] overflow-hidden">
                  <img
                    onClick={handleProfile}
                    src={user?.data?.Image}
                    className="w-[120px] h-[120px] mx-auto object-cover rounded-full"
                    alt="profile"
                  />
                </div>
                <div className="text-center  mt-5 ">
                  <h1 className="text-base font-bold">
                    Name: {user?.data?.Name}
                  </h1>
                  <p className="text-xs mt-3">Email: {user?.data?.EmailAddress}</p>
                  <p
                    className={
                      user?.emailVerified
                        ? "text-xs text-green-500 mt-1"
                        : "text-xs text-red-500 mt-1"
                    }
                  >
                    {user?.emailVerified
                      ? "Your Email has been verified!"
                      : "Your Email is not verified!"}
                  </p>
                  <div className="mt-4 my-btn" >
                    <button onClick={handleLogout} className="bg-[#FFF] border-[#068278] border text-[#068278] btn hover:bg-[#068278] rounded-3xl px-9 py-3 hover:text-white hover:border-transparent">
                      {" "}
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            </div>


        </div>
      </nav>
    </div>
  </div>
  //Navbar code end
  );
};

export default Navbar;