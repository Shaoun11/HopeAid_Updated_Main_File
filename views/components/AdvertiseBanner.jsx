import React from 'react';
import {Link} from "react-router-dom";

const AdvertiseBanner = () => {
    return (
        
        // Advertise banner page code start
        <div className='mt-[60px] mb-[60px] md:pl-16 pl-2 pr-1 md:pr-16 '>
             {/* Advertise banner page text  */}
            <div
                className="bg-[#FEF9F6]  rounded-2xl md:p-12 p-8 text-white  text-center sm:px-6 lg:px-8"
            >
                <p className="text-center text-[#171717]  lg:text-[37px] md:text-[30px] text-[24px] font-medium ">
                Come together with us as we <br /> build a brighter future. <br />
                
                </p>
                <p className='text-[#525252] text-center  md:text-[16px] text-[15px] font-medium mt-3'>You can set up fundraising activities, volunteer, or use social media to raise <br /> awareness.</p>
                <div className='mt-12 text-center'>
              <Link to='/signin'>
              <button className="bg-[#068278] hover:border-[#068278] hover:border text-[#FFF] hover:bg-[#FFF] btn rounded-3xl px-12 py-4 hover:text-[#068278] border-transparent">
                    Join Now
                </button>
              </Link>
            </div>
               
            </div>
        </div>
        // Advertise banner page code End
    );
};

export default AdvertiseBanner;