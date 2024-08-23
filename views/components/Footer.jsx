/*
© 2024 HopeAid! - Created by DevGenius (2024)
Project Name:HopeAid - Charity Landing Page
*/
import React from 'react';
import google_play_image from '../../public/Footer_Image/Google Play.svg'
import apple_play_image from '../../public/Footer_Image/Play Store.svg'
import codecanyon_logo from '../../public/Footer_Image/DevGenius-codecanyon-logo.svg'
import {Link} from "react-scroll/modules";

const Footer = () => {
    return (
        //HopeAid Footer section code start
        <div className="bg-gradient-to-r shadow-md border bg-[#ffffff]">
            <div className="max-w-screen-xl py-16 mx-auto md:px-10 px-4 lg:px-8">
                <div className="grid grid-cols-1 gap-x-6 lg:grid-cols-3">
                    <div>
                        {/*HopeAid Footer section text */}
                        <h2 class='text-[#18233B] text-2xl font-medium'>Hope<span class='text-[#068278]'>Aid!</span> </h2>

                        <p className="max-w-xl mt-4 text-base text-[#525252] font-normal">
                            Our programme, Education for All, <br /> seeks to end the poverty cycle.
                        </p>

                        <div>
                            <img src={codecanyon_logo}  alt="DevGenius-codecanyon-logo" className="mt-4" />
                        </div>
                    </div>
                    {/* Footer section Nav */}
                    <div className="grid grid-cols-3 lg:ml-8 lg:mt-0 mt-8 lg:col-span-2 sm:grid-cols-4 lg:grid-cols-4">
                        <div>
                            <p className=" text-[#171717] font-medium text-xl">
                                Menu
                            </p>
                            <nav className="flex flex-col mt-4 space-y-2  text-sm text-[#525252] font-normal">
                                <Link to='donation'  smooth={true} offset={-90} className="hover:opacity-75 cursor-pointer" > Donation</Link>
                                <Link to='features'  smooth={true} offset={-90} className="hover:opacity-75 cursor-pointer" > Features</Link>
                                <Link to='volunteer'  smooth={true} offset={-90} className="hover:opacity-75 cursor-pointer" > Volunteer</Link>
                                <Link to='blog'  smooth={true} offset={-90} className="hover:opacity-75 cursor-pointer" > Blog</Link>

                            </nav>
                        </div>
                        <div>
                            <p className="text-[#171717] font-medium text-xl">
                                Categories
                            </p>
                            <nav className="flex flex-col mt-4 space-y-2 text-sm text-[#525252] font-normal">
                                <a className="hover:opacity-75 cursor-pointer" href='/education'> Education </a>
                                <a className="hover:opacity-75 cursor-pointer" href='/medical'> Medical Help</a>
                                <a className="hover:opacity-75 cursor-pointer" href='/healthyFood'> Healthy Food</a>
                                <a className="hover:opacity-75 cursor-pointer" href='/cleanWater'> Clean Water</a>

                            </nav>
                        </div>


                        <div>
                            <p className="text-[#171717]  font-medium text-xl">
                                About Us
                            </p>
                            <nav className="flex flex-col mt-4 space-y-2  text-sm text-[#525252] font-normal">
                         
                                
                                <a className="hover:opacity-75" href='/help&Support'> Help & Support</a>
                                <a className="hover:opacity-75" href='/help&Support'> FAQ</a>
                            </nav>
                        </div>
                        <div className='lg:mt-0 md:mt-0 mt-6 lg:col-span-1 md:col-span-1 col-span-3'>
                            <p className="text-[#171717] font-medium text-xl">
                                Social Media
                            </p>
                            <div className='flex gap-3 mt-4'>
                                <a href="">
                                    <svg className='hover:text-white' xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43" fill="none">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M21.5 42C32.8218 42 42 32.8218 42 21.5C42 10.1782 32.8218 1 21.5 1C10.1782 1 1 10.1782 1 21.5C1 32.8218 10.1782 42 21.5 42Z" stroke="#171717" stroke-opacity="0.12" />
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M24.1084 19.2445C23.7883 19.1432 23.4202 19.0757 23.0842 19.0757C22.6681 19.0757 21.7719 19.3626 21.7719 19.9195V21.2527H23.9003V23.4971H21.7719V29.6905H19.6275V23.4971H18.5713V21.2527H19.6275V20.122C19.6275 18.4176 20.3636 17 22.14 17C22.7481 17 23.8363 17.0338 24.4284 17.2531L24.1084 19.2445Z" fill="#171717" />
                                    </svg>
                                </a>
                                <a href="">
                                    <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M21.5 42C32.8218 42 42 32.8218 42 21.5C42 10.1782 32.8218 1 21.5 1C10.1782 1 1 10.1782 1 21.5C1 32.8218 10.1782 42 21.5 42Z" stroke="#171717" stroke-opacity="0.12" />
                                        <path d="M26.6562 14H15.3438C14.0516 14 13 15.0516 13 16.3438V27.6562C13 28.9487 14.0516 30 15.3438 30H26.6562C27.9487 30 29 28.9487 29 27.6562V16.3438C29 15.0516 27.9487 14 26.6562 14ZM28.0625 27.6562C28.0625 28.4316 27.4316 29.0625 26.6562 29.0625H15.3438C14.5684 29.0625 13.9375 28.4316 13.9375 27.6562V16.3438C13.9375 15.5684 14.5684 14.9375 15.3438 14.9375H26.6562C27.4316 14.9375 28.0625 15.5684 28.0625 16.3438V27.6562Z" fill="#171717" />
                                        <path d="M21 17.7812C18.6737 17.7812 16.7812 19.6737 16.7812 22C16.7812 24.3263 18.6737 26.2188 21 26.2188C23.3263 26.2188 25.2188 24.3263 25.2188 22C25.2188 19.6737 23.3263 17.7812 21 17.7812ZM21 25.2812C19.1906 25.2812 17.7188 23.8094 17.7188 22C17.7188 20.1906 19.1906 18.7188 21 18.7188C22.8094 18.7188 24.2812 20.1906 24.2812 22C24.2812 23.8094 22.8094 25.2812 21 25.2812Z" fill="#171717" />
                                    </svg>

                                </a>
                                <a href="">
                                    <svg width="43" height="43" viewBox="0 0 43 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" clip-rule="evenodd" d="M21.5 42C32.8218 42 42 32.8218 42 21.5C42 10.1782 32.8218 1 21.5 1C10.1782 1 1 10.1782 1 21.5C1 32.8218 10.1782 42 21.5 42Z" stroke="#171717" stroke-opacity="0.12" />
                                        <path d="M29 16.539C28.405 16.8 27.771 16.973 27.11 17.057C27.79 16.651 28.309 16.013 28.553 15.244C27.919 15.622 27.219 15.889 26.473 16.038C25.871 15.397 25.013 15 24.077 15C22.261 15 20.799 16.474 20.799 18.281C20.799 18.541 20.821 18.791 20.875 19.029C18.148 18.896 15.735 17.589 14.114 15.598C13.831 16.089 13.665 16.651 13.665 17.256C13.665 18.392 14.25 19.399 15.122 19.982C14.595 19.972 14.078 19.819 13.64 19.578C13.64 19.588 13.64 19.601 13.64 19.614C13.64 21.208 14.777 22.532 16.268 22.837C16.001 22.91 15.71 22.945 15.408 22.945C15.198 22.945 14.986 22.933 14.787 22.889C15.212 24.188 16.418 25.143 17.852 25.174C16.736 26.047 15.319 26.573 13.785 26.573C13.516 26.573 13.258 26.561 13 26.528C14.453 27.465 16.175 28 18.032 28C24.068 28 27.368 23 27.368 18.666C27.368 18.521 27.363 18.381 27.356 18.242C28.007 17.78 28.554 17.203 29 16.539Z" fill="#171717" />
                                    </svg>

                                </a>
                            </div>
                            <p className="text-[#171717] mt-8  font-medium text-xl">
                                Discover our app
                            </p>
                            <div className='flex gap-3 mt-4'>
                                <a href="">
                                   <img src={google_play_image} ></img>
                                </a>
                                <a href="">
                                    <img src={apple_play_image} ></img>
                                </a>
                            </div>
                        </div>
                    </div>
                    {/*HopeAid Footer section nav end */}
                </div>

            </div>
            {/*HopeAid sub Footer */}
            <footer className="footer footer-center p-4 text-[15px] bg-[#fffaf8] border-t text-[#525252]">
                <aside>
                    <a target='_blank' href='https://www.devgenius.app/'>© 2024 HopeAid! - Created by <span className='text-[#909495] font-normal' >DevGenius Technologies Ltd</span>.</a>
                </aside>
            </footer>
        </div>

        //HopeAid Footer section code End

    );
};

export default Footer;