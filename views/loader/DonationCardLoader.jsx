import React from 'react';
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css';
const DonationCardLoader = () => {
    return (
        <div id='donation' className='max-w-7xl mt-10  mx-auto'>
               <div className='lg:ml-0 md:ml-8 md:mr-8 ml-4 lg:mr-0 mr-4 md:flex justify-between'>
      <div>
        <Skeleton height={40} width={300} className='lg:text-[40px] md:text-[30px] text-[24px] font-semibold text-[#171717]' />
        <Skeleton height={20} width={400} className='mt-3 text-[#525252] font-medium text-[15px]' />
        
      </div>
      <div>
      <Skeleton height={20} width={350} className='mt-3 text-[#525252] font-medium text-[15px]' />
      </div>
    </div>
        <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-14 lg:ml-0 md:ml-6  ml-4 lg:mr-0 mr-4'>
         <div className="bg-[#FFF] shadow-md lg:w-96 w-[330px] mx-auto rounded-3xl">
      <figure className="px-3 pt-3">
        <Skeleton height={251} width={360} className="rounded-3xl" />
      </figure>
      <div className="ml-4 mr-4">
        <p className='flex text-sm gap-1 mt-4 text-[#525252] font-normal'>
          <Skeleton circle={true} height={20} width={20} className="mr-2" />
          <Skeleton width={100} height={20} />
        </p>
        <p className='text-[18px] font-semibold text-[#171717] mt-2'>
          <Skeleton width={200} height={24} />
        </p>
        <div className='flex gap-3 mt-5'>
          <Skeleton width={60} height={30} />
          <Skeleton width={80} height={20} />
          <Skeleton width={60} height={20} />
        </div>
        <p className='mt-4 mb-6'>
          <svg className='lg:w-[336px] w-[302px]' width="336" height="6" viewBox="0 0 336 6" fill="none" xmlns="http://www.w3.org/2000/svg">
           <Skeleton></Skeleton>
          </svg>
        </p>
        <div className="card-actions mb-5">
          <button className="  btn rounded-3xl w-full p-2  hover:border-transparent">
            <Skeleton  />
          </button>
        </div>
      </div>
    </div>

    {/* Second Card */}
    <div className="bg-[#FFF] shadow-md lg:w-96 w-[330px] mx-auto rounded-3xl">
      <figure className="px-3 pt-3">
        <Skeleton height={251} width={360} className="rounded-3xl" />
      </figure>
      <div className="ml-4 mr-4">
        <p className='flex text-sm gap-1 mt-4 text-[#525252] font-normal'>
          <Skeleton circle={true} height={20} width={20} className="mr-2" />
          <Skeleton width={100} height={20} />
        </p>
        <p className='text-[18px] font-semibold text-[#171717] mt-2'>
          <Skeleton width={200} height={24} />
        </p>
        <div className='flex gap-3 mt-5'>
          <Skeleton width={60} height={30} />
          <Skeleton width={80} height={20} />
          <Skeleton width={60} height={20} />
        </div>
        <p className='mt-4 mb-6'>
          <svg className='lg:w-[336px] w-[302px]' width="336" height="6" viewBox="0 0 336 6" fill="none" xmlns="http://www.w3.org/2000/svg">
           <Skeleton></Skeleton>
          </svg>
        </p>
        <div className="card-actions mb-5">
          <button className="  btn rounded-3xl w-full p-2  hover:border-transparent">
            <Skeleton  />
          </button>
        </div>
      </div>
    </div>
    {/* third Card */}
    <div className="bg-[#FFF] shadow-md lg:w-96 w-[330px] mx-auto rounded-3xl">
      <figure className="px-3 pt-3">
        <Skeleton height={251} width={360} className="rounded-3xl" />
      </figure>
      <div className="ml-4 mr-4">
        <p className='flex text-sm gap-1 mt-4 text-[#525252] font-normal'>
          <Skeleton circle={true} height={20} width={20} className="mr-2" />
          <Skeleton width={100} height={20} />
        </p>
        <p className='text-[18px] font-semibold text-[#171717] mt-2'>
          <Skeleton width={200} height={24} />
        </p>
        <div className='flex gap-3 mt-5'>
          <Skeleton width={60} height={30} />
          <Skeleton width={80} height={20} />
          <Skeleton width={60} height={20} />
        </div>
        <p className='mt-4 mb-6'>
          <svg className='lg:w-[336px] w-[302px]' width="336" height="6" viewBox="0 0 336 6" fill="none" xmlns="http://www.w3.org/2000/svg">
           <Skeleton></Skeleton>
          </svg>
        </p>
        <div className="card-actions mb-5">
          <button className="  btn rounded-3xl w-full p-2  hover:border-transparent">
            <Skeleton  />
          </button>
        </div>
      </div>
    </div>
        </div>
        </div>
  );
};
export default DonationCardLoader;