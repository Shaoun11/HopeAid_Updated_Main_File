import { Swiper, SwiperSlide } from 'swiper/react';
// import required modules
import { Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import '../assets/css/CustomSwiper.css'; 
import testimonial_image from '../../public/Testimonial_Images/e0e5e24a0fe6d734bd263c3658760e39.png';

const Testimonial = () => {
    return (
        <div className='max-w-7xl mx-auto pt-[60px] pb-[60px]'>
            <div className='lg:ml-0 md:ml-6 ml-6 lg:mr-0 mr-4'>
                <h1 className='lg:text-[40px] md:text-[30px] text-[24px] font-semibold text-[#171717] '>
                    Motivational Narratives <br />
                    of Effect
                </h1>
            </div>
            <Swiper
                 slidesPerView={3}
                 spaceBetween={30}
                 pagination={{
                   clickable: true,
                 }}
                 breakpoints={{
                    340: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 3,
                    },
                }}
                 modules={[Pagination]}
                 className="mySwiper"
            >
                <SwiperSlide>
                    <div className='bg-[#FFF] border rounded-2xl mt-12 lg:ml-2'>
                        <div className='p-6  '>
                            <svg className='absolute -mt-[50px] ml-2' width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="24" cy="24" r="24" fill="#068278" />
                                <path d="M16 30.056V25.688C16 24.056 16.288 22.552 16.864 21.176C17.44 19.8 18.416 18.408 19.792 17L22.288 18.968C21.488 19.768 20.88 20.52 20.464 21.224C20.048 21.928 19.776 22.648 19.648 23.384H22.72V30.056H16ZM25.36 30.056V25.688C25.36 24.056 25.648 22.552 26.224 21.176C26.8 19.8 27.776 18.408 29.152 17L31.648 18.968C30.848 19.768 30.24 20.52 29.824 21.224C29.408 21.928 29.136 22.648 29.008 23.384H32.08V30.056H25.36Z" fill="white" />
                            </svg>

                            <h1 className='text-[16px] mt-4 ml-4 font-normal text-[#171717]'>
                                Our mission at HopeAid is to improve <span className='md:block '></span> the lives of people who are less <span className='md:block '></span> fortunate. The inspiring tales of impact <span className='md:block '></span> made possible by the kindness and <span className='md:block '></span> assistance of our supporters and <span className='md:block '></span> volunteers serve as the fuel for our <span className='md:block '></span> work.
                            </h1>

                            <hr className='lg:w-[336px] w-auto h-[2px] mt-4  ml-4' />

                            <div className='flex gap-3 ml-4 mt-4'>
                                <img className='w-[48px] mb-4 h-[48px] rounded-full object-cover' src={testimonial_image} alt='testimonial' />

                                <div>
                                    <p className='text-[16px] font-medium text-[#171717]'>
                                        James Bank
                                    </p>
                                    <p className='text-[14px] font-normal text-[#525252]'>
                                        CEO
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='bg-[#FFF] border rounded-2xl mt-12'>
                        <div className='p-6'>
                            <svg className='absolute -mt-[50px] ml-2' width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="24" cy="24" r="24" fill="#068278" />
                                <path d="M16 30.056V25.688C16 24.056 16.288 22.552 16.864 21.176C17.44 19.8 18.416 18.408 19.792 17L22.288 18.968C21.488 19.768 20.88 20.52 20.464 21.224C20.048 21.928 19.776 22.648 19.648 23.384H22.72V30.056H16ZM25.36 30.056V25.688C25.36 24.056 25.648 22.552 26.224 21.176C26.8 19.8 27.776 18.408 29.152 17L31.648 18.968C30.848 19.768 30.24 20.52 29.824 21.224C29.408 21.928 29.136 22.648 29.008 23.384H32.08V30.056H25.36Z" fill="white" />
                            </svg>

                            <h1 className='text-[16px] mt-4 ml-4 font-normal text-[#171717]'>
                                Our mission at HopeAid is to improve <span className='md:block '></span> the lives of people who are less <span className='md:block '></span> fortunate. The inspiring tales of impact <span className='md:block '></span> made possible by the kindness and <span className='md:block '></span> assistance of our supporters and <span className='md:block '></span> volunteers serve as the fuel for our <span className='md:block '></span> work.
                            </h1>

                            <hr className='w-[336px] h-[2px] mt-4  ml-4' />

                            <div className='flex gap-3 ml-4 mt-4'>
                                <img className='w-[48px] mb-4 h-[48px] rounded-full object-cover' src="https://i.ibb.co/YZJtDGR/images-1.jpg" alt='testimonial' />

                                <div>
                                    <p className='text-[16px] font-medium text-[#171717]'>
                                    Sabrina Jahan
                                    </p>
                                    <p className='text-[14px] font-normal text-[#525252]'>
                                        Founder
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className='bg-[#FFF] border rounded-2xl mt-12'>
                        <div className='p-6'>
                            <svg className='absolute -mt-[50px] ml-2' width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="24" cy="24" r="24" fill="#068278" />
                                <path d="M16 30.056V25.688C16 24.056 16.288 22.552 16.864 21.176C17.44 19.8 18.416 18.408 19.792 17L22.288 18.968C21.488 19.768 20.88 20.52 20.464 21.224C20.048 21.928 19.776 22.648 19.648 23.384H22.72V30.056H16ZM25.36 30.056V25.688C25.36 24.056 25.648 22.552 26.224 21.176C26.8 19.8 27.776 18.408 29.152 17L31.648 18.968C30.848 19.768 30.24 20.52 29.824 21.224C29.408 21.928 29.136 22.648 29.008 23.384H32.08V30.056H25.36Z" fill="white" />
                            </svg>

                            <h1 className='text-[16px] mt-4 ml-4 font-normal text-[#171717]'>
                                Our mission at HopeAid is to improve <span className='md:block '></span> the lives of people who are less <span className='md:block '></span> fortunate. The inspiring tales of impact <span className='md:block '></span> made possible by the kindness and <span className='md:block '></span> assistance of our supporters and <span className='md:block '></span> volunteers serve as the fuel for our <span className='md:block '></span> work.
                            </h1>

                            <hr className='w-[336px] h-[2px] mt-4  ml-4' />

                            <div className='flex gap-3 ml-4 mt-4'>
                                <img className='w-[48px] mb-4 h-[48px] rounded-full object-cover' src="https://i.ibb.co/gDPDWJN/f8668e5328cfb4938903406948383cf6.jpg" alt='testimonial' />

                                <div>
                                    <p className='text-[16px] font-medium text-[#171717]'>
                                     John Smith
                                    </p>
                                    <p className='text-[14px] font-normal text-[#525252]'>
                                        Team Leader
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-[#FFF] border rounded-2xl mt-12'>
                        <div className='p-6'>
                            <svg className='absolute -mt-[50px] ml-2' width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="24" cy="24" r="24" fill="#068278" />
                                <path d="M16 30.056V25.688C16 24.056 16.288 22.552 16.864 21.176C17.44 19.8 18.416 18.408 19.792 17L22.288 18.968C21.488 19.768 20.88 20.52 20.464 21.224C20.048 21.928 19.776 22.648 19.648 23.384H22.72V30.056H16ZM25.36 30.056V25.688C25.36 24.056 25.648 22.552 26.224 21.176C26.8 19.8 27.776 18.408 29.152 17L31.648 18.968C30.848 19.768 30.24 20.52 29.824 21.224C29.408 21.928 29.136 22.648 29.008 23.384H32.08V30.056H25.36Z" fill="white" />
                            </svg>

                            <h1 className='text-[16px] mt-4 ml-4 font-normal text-[#171717]'>
                                Our mission at HopeAid is to improve <span className='md:block '></span> the lives of people who are less <span className='md:block '></span> fortunate. The inspiring tales of impact <span className='md:block '></span> made possible by the kindness and <span className='md:block '></span> assistance of our supporters and <span className='md:block '></span> volunteers serve as the fuel for our <span className='md:block '></span> work.
                            </h1>

                            <hr className='w-[336px] h-[2px] mt-4  ml-4' />

                            <div className='flex gap-3 ml-4 mt-4'>
                                <img className='w-[48px] mb-4 h-[48px] rounded-full object-cover' src="https://i.ibb.co/Ry8vG9P/images-2.jpg" alt='testimonial' />

                                <div>
                                    <p className='text-[16px] font-medium text-[#171717]'>
                                        Alvia Rahman
                                    </p>
                                    <p className='text-[14px] font-normal text-[#525252]'>
                                        Team Leader
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className='bg-[#FFF] border rounded-2xl mt-12'>
                        <div className='p-6'>
                            <svg className='absolute -mt-[50px] ml-2' width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="24" cy="24" r="24" fill="#068278" />
                                <path d="M16 30.056V25.688C16 24.056 16.288 22.552 16.864 21.176C17.44 19.8 18.416 18.408 19.792 17L22.288 18.968C21.488 19.768 20.88 20.52 20.464 21.224C20.048 21.928 19.776 22.648 19.648 23.384H22.72V30.056H16ZM25.36 30.056V25.688C25.36 24.056 25.648 22.552 26.224 21.176C26.8 19.8 27.776 18.408 29.152 17L31.648 18.968C30.848 19.768 30.24 20.52 29.824 21.224C29.408 21.928 29.136 22.648 29.008 23.384H32.08V30.056H25.36Z" fill="white" />
                            </svg>

                            <h1 className='text-[16px] mt-4 ml-4 font-normal text-[#171717]'>
                                Our mission at HopeAid is to improve <span className='md:block '></span> the lives of people who are less <span className='md:block '></span> fortunate. The inspiring tales of impact <span className='md:block '></span> made possible by the kindness and <span className='md:block '></span> assistance of our supporters and <span className='md:block '></span> volunteers serve as the fuel for our <span className='md:block '></span> work.
                            </h1>

                            <hr className='w-[336px] h-[2px] mt-4  ml-4' />

                            <div className='flex gap-3 ml-4 mt-4'>
                                <img className='w-[48px] mb-4 h-[48px] rounded-full object-cover' src="https://i.ibb.co/g7GFg10/boss-man-looking-camera-smiling-young-businessman-banker-with-beard-photo-with-close-up-portrait-321.jpg" alt='testimonial' />

                                <div>
                                    <p className='text-[16px] font-medium text-[#171717]'>
                                        Dylan Timmons
                                    </p>
                                    <p className='text-[14px] font-normal text-[#525252]'>
                                        Team Leader
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

        </div>
    );
};

export default Testimonial;
