import React from 'react';
import {Link} from "react-router-dom";

const Goal = () => {
    return (
        // HoperAid Goal Section Code Start
        <div className='max-w-7xl mx-auto'>
            <div className='lg:ml-16 md:ml-6 md:mr-6 ml-auto mt-[120px] mb-[60px] md:flex lg:gap-20 gap-5'>
                {/* HoperAid Goal Section box */}
            <div className='grid grid-cols-2 lg:gap-8 gap-4 lg:ml-0 ml-4 lg:mr-0 mr-4'>
            <div className='lg:p-6 p-3 border border-[#1717171F]'>
                <h1 className='lg:text-[37px] font-medium text-[32px] text-[#068278]'>56+</h1>
                <p className='lg:text-[15px] text-sm font-normal text-[#525252]'>
                Countries where they are <span className='md:block '></span>  influencing policy
                </p>
            </div>

            <div className='lg:p-6 p-3 border border-[#1717171F]'>
                <h1 className='lg:text-[37px] font-medium text-[32px] text-[#068278]'>$103M</h1>
                <p className='lg:text-[15px] text-sm font-normal text-[#525252]'>
                Total invested in Follows for <span className='md:block '></span> all countries
                </p>
            </div>

            <div className='lg:p-6 p-3 border border-[#1717171F]'>
                <h1 className='lg:text-[37px] font-medium text-[32px] text-[#068278]'>8M+</h1>
                <p className='lg:text-[15px] text-sm font-normal text-[#525252] '>
                Dedication to successful <span className='md:block '></span> charitable fundraising
                </p>
            </div>
            <div className='lg:p-6 p-3 border border-[#1717171F]'>
                <h1 className='lg:text-[37px] font-medium text-[32px] text-[#068278]'>900+</h1>
                <p className='lg:text-[15px] text-sm font-normal text-[#525252] '>
                Leader who have kicks-<span className='md:block '></span>tarted ideas with our help
                </p>
            </div>

            </div>
            {/* HoperAid Goal Section text */}
            <div className='lg:mt-0 md:mt-0 mt-8 lg:ml-8 ml-4 lg:mr-0 mr-4'>
                <h1 className='lg:text-[37px] md:text-[30px] text-[24px] font-semibold text-[#171717] '>
                Our goal is to change <span className='md:block '></span>the world for the better.
                </h1>
                <p className='mt-3 text-[#525252] font-normal lg:text-[15px] md:text-[13px] text-sm'>
                Our group of enthusiastic people, volunteers, and backers puts <span className='md:block '></span> forth endless effort. We use the ideals of compassion,<span className='md:block '></span> teamwork, and community to further our purpose because we<span className='md:block '></span> really believe in their power.
                </p>
                <div className='mt-12'>
               <Link to='/signin'>
               <button className="bg-[#068278] hover:border-[#068278] hover:border text-[#FFF] hover:bg-[#FFF] btn rounded-3xl px-12 py-4 hover:text-[#068278] border-transparent">
                    Join Now
                </button>
               </Link>
            </div>
            </div>
            </div>
        </div>
        // HoperAid Goal Section Code End
    );
};

export default Goal;