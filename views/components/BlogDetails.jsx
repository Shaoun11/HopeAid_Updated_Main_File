import React, {useEffect, useState} from 'react';
import {Link, useNavigate, useParams} from "react-router-dom";
import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";
import {FaCalendarMinus, FaRegEye} from "react-icons/fa";
import {BiTimeFive} from "react-icons/bi";
import Loading from "../loader/loading.jsx";

const BlogDetails = () => {
    const { id } = useParams();
    const [donationBlog, setDonationBlogDetails] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:5001/api/donationBlogData/${id}`)
            .then(response => response.json())
            .then(data => setDonationBlogDetails(data))
            .catch(error => console.error('Error fetching donation card:', error));
    }, [id]);

    if (!donationBlog) {
        return <div><Loading /></div>;
    }

    return (
        <div>
            <Navbar />
            <div className='container max-w-7xl mx-auto mb-[120px] mt-[20px] px-4 md:px-8 lg:px-16'>
                <div>
                    <img className='h-[300px] md:h-[400px] lg:h-[600px] w-full object-cover rounded-md' src={donationBlog?.Image} alt=""/>
                    <div className='flex flex-col md:flex-row justify-between mt-4'>
                        <div className='flex flex-wrap gap-3'>
                            <p className='flex items-center text-sm text-[#171717]'>
                                <FaCalendarMinus className='mt-[2px] text-[#068278]' />
                                <span className='ml-1'>Published: {donationBlog?.Date}</span>
                            </p>
                            <p className='flex items-center text-sm text-[#171717]'>
                                <BiTimeFive className='mt-[4px] text-[#068278]' />
                                <span className='ml-1'>Read time: 04 minutes</span>
                            </p>
                        </div>
                        <p className='flex items-center text-[#171717] mt-2 md:mt-0'>
                            <FaRegEye className='mt-1 text-[#068278]' /> 2.3M
                        </p>
                    </div>
                    <h1 className='text-[18px] md:text-[24px] lg:text-[30px] font-semibold text-[#171717] my-4'>
                        {donationBlog?.title}
                    </h1>
                    <p className='text-sm lg:text-[16px] text-[#525252] font-normal'>{donationBlog?.description}</p>
                </div>
                <div className='mt-7'>
                    <Link to='/checkout'>
                        <button
                            className="bg-[#068278] hover:border-[#068278] hover:border text-[#FFF] hover:bg-[#FFF] btn rounded-3xl px-6 md:px-8 lg:px-12 py-2 md:py-3 lg:py-4 hover:text-[#068278] border-transparent">
                            Donate Now
                        </button>
                    </Link>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default BlogDetails;
