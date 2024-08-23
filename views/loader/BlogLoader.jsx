import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
const BlogLoader = () => {
    return (
        <div className="container p-20 m-auto">
            <div id='blog' className='max-w-7xl mx-auto'>
            {/* HoperAid Blog Section Text */}
            <div className='lg:ml-0 md:ml-6 md:mr-6 ml-4 lg:mr-0 mr-4 md:flex flex justify-between'>
                <div>
                    <Skeleton height={40} width={300} className='lg:text-[40px] md:text-[30px] text-[24px] font-semibold text-[#171717]' />
              

                </div>
                {/* blog section button*/}

              <div>
              <p className='md:block hidden'>
              <Skeleton height={44} width={120} className="rounded-3xl" />
                </p>
              </div>
              </div>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 md:mt-14 mt-8'>
                {/* first card skeleton */}
                <div>
                    <div className="bg-[#FFF] lg:w-96 w-[330px] mx-auto rounded-3xl">
                        <figure className="px-3 pt-3">
                            <Skeleton height={251} width={360} className="rounded-3xl" />
                        </figure>
                        <div className="ml-4 mr-4">
                            <p className='flex text-sm gap-1 mt-4 text-[#525252] font-normal'>
                                <Skeleton circle width={20} height={20} />
                                <span className='mt-[2px]'><Skeleton width={60} /></span>
                            </p>
                            <p className='text-[18px] mb-5 font-semibold text-[#171717] mt-2'>
                                <Skeleton width={`80%`} />
                            </p>
                        </div>
                    </div>
                </div>
                {/* second card skeleton */}
                <div>
                    <div className="bg-[#FFF] lg:w-96 w-[330px] mx-auto rounded-3xl">
                        <figure className="px-3 pt-3">
                            <Skeleton height={251} width={360} className="rounded-3xl" />
                        </figure>
                        <div className="ml-4 mr-4">
                            <p className='flex text-sm gap-1 mt-4 text-[#525252] font-normal'>
                                <Skeleton circle width={20} height={20} />
                                <span className='mt-[2px]'><Skeleton width={60} /></span>
                            </p>
                            <p className='text-[18px] mb-5 font-semibold text-[#171717] mt-2'>
                                <Skeleton width={`80%`} />
                            </p>
                        </div>
                    </div>
                </div>
                {/* third card skeleton */}
                <div>
                    <div className="bg-[#FFF] lg:w-96 w-[330px] mx-auto rounded-3xl">
                        <figure className="px-3 pt-3">
                            <Skeleton height={251} width={360} className="rounded-3xl" />
                        </figure>
                        <div className="ml-4 mr-4">
                            <p className='flex text-sm gap-1 mt-4 text-[#525252] font-normal'>
                                <Skeleton circle width={20} height={20} />
                                <span className='mt-[2px]'><Skeleton width={60} /></span>
                            </p>
                            <p className='text-[18px] mb-5 font-semibold text-[#171717] mt-2'>
                                <Skeleton width={`80%`} />
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* blog section button responsive */}

            <p className='md:hidden block text-center mt-8'>
            <Skeleton height={44} width={120} className="rounded-3xl" />
            </p>

        </div>
        </div>
    );
};

export default BlogLoader;