import React from 'react';
import hero_main_image from '../../public/Hero_Image/hero_main.jpeg'
import { Link } from 'react-router-dom';
const Hero = () => {
    return (
        // HoperAid hero section start
        <div id='/' className='bg-[#FEF9F6] min-h-[calc(100vh-78px)]'>
            <div className='max-w-7xl 2xl:ml-auto 2xl:mr-auto md:flex lg:gap-14 lg:pt-16 pt-11 lg:ml-32 md:ml-0 ml-0 mx-auto '>
                {/* HoperAid hero section text */}
                <div className='lg:ml-0 ml-4 lg:mr-0 mr-4 '>
                    <h1 className='lg:text-[50px] md:text-[30px] leading-tight text-[28px] font-semibold text-[#171717]'>
                        Empowering Lives, One <span className='md:block '></span> Donation at a Time<span className='md:block '></span> Hope in Action
                    </h1>
                    <p className='mt-4 text-[#525252] font-normal text-[15px]'>
                        Act as a catalyst for good, and assist us in providing opportunities,<span className='md:block '></span> happiness, and hope to people and communities who are in need.
                    </p>

                    <div className='lg:mt-14 md:mt-7 mt-14'>
                        <Link to='/checkout'>
                            <button className="bg-[#068278] hover:border-[#068278] hover:border text-[#FFF] hover:bg-[#FFF] btn rounded-3xl px-12 py-4 hover:text-[#068278] border-transparent">

                                Donate Now
                            </button>
                        </Link>
                    </div>
                    <div className='md:flex gap-8 lg:pb-2 md:pb-5 pb-0 lg:mt-10 md:mt-4 mt-10'>
                        <div>
                            <h1 className='text-[32px] font-medium text-[#068278]'>56+</h1>
                            <p className='text-sm hidden lg:block text-[#525252] font-normal'>Nations where they are having <br /> an impact</p>
                            <p className='text-sm lg:hidden block text-[#525252] font-normal'>Nations where they <br /> are having an impact</p>
                        </div>
                        <div>
                            <h1 className='text-[32px] font-medium text-[#068278]'>$103M</h1>
                            <p className='text-sm lg:block hidden text-[#525252] font-normal'>Total amount invested in Follows <br /> across all nations</p>
                            <p className='text-sm lg:hidden block text-[#525252] font-normal'>Total amount invested <br /> in Follows across all <br /> nations</p>
                        </div>
                    </div>
                </div>
                {/* HoperAid hero section svg and Image*/}
                <div>
                    <div className='lg:mr-0 lg:ml-8 md:ml-0 ml-0 lg:-mt-8 md:mt-0 mt-0 md:mr-8 mr-0'>
                        <svg className='backdrop-blur-none lg:relative absolute lg:ml-2 ml-[130px] lg:-mt-0 -mt-[130px] lg:w-[495px] lg:h-[319px] w-[225px] h-[195px] ' width="495" height="319" viewBox="0 0 495 319" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g filter="url(#filter0_bd_0_1)">
                                <circle cx="80" cy="143" r="28" fill="url(#paint0_linear_0_1)" />
                                <circle cx="80" cy="143" r="27.5" stroke="url(#paint1_linear_0_1)" />
                            </g>
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M76.9373 132.46L68.7053 137.033C66.9747 137.995 66.9747 140.483 68.7053 141.444L76.9373 146.017C78.8413 147.075 81.1573 147.075 83.0627 146.017L91.2947 141.444C93.0254 140.483 93.0254 137.995 91.2947 137.033L83.0627 132.46C81.1573 131.403 78.8427 131.403 76.9373 132.46Z" stroke="#D75084" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M71.988 143.267V148.499C71.988 149.764 72.6214 150.944 73.6734 151.644L75.816 153.069C78.3507 154.755 81.6494 154.755 84.1827 153.069L86.3254 151.644C87.3787 150.944 88.0107 149.763 88.0107 148.499V143.267" stroke="#D75084" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            <g filter="url(#filter1_bd_0_1)">
                                <circle cx="439" cy="236" r="28" fill="url(#paint2_linear_0_1)" />
                                <circle cx="439" cy="236" r="27.5" stroke="url(#paint3_linear_0_1)" />
                            </g>
                            <path d="M451 248L451.771 246.459C452.141 245.718 452.333 244.902 452.333 244.074V235.333C452.333 234.229 451.438 233.333 450.333 233.333V233.333C449.229 233.333 448.333 234.229 448.333 235.333V240.667" stroke="#068278" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M441.667 248V244.116C441.667 243.539 441.854 242.977 442.2 242.516L444.437 239.533C444.814 239.031 445.39 238.717 446.015 238.672C446.641 238.628 447.256 238.857 447.699 239.301V239.301C448.461 240.062 448.547 241.268 447.9 242.13L446.498 244" stroke="#068278" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M427 248L426.229 246.459C425.859 245.718 425.667 244.902 425.667 244.074V235.333C425.667 234.229 426.562 233.333 427.667 233.333V233.333C428.771 233.333 429.667 234.229 429.667 235.333V240.667" stroke="#068278" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M436.333 248V244.116C436.333 243.539 436.146 242.977 435.8 242.516L433.563 239.533C433.186 239.031 432.611 238.717 431.985 238.672C431.359 238.628 430.744 238.857 430.301 239.301V239.301C429.539 240.062 429.453 241.268 430.1 242.13L431.502 244" stroke="#068278" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M445 228.933C445 228.197 444.403 227.6 443.667 227.6H441.4V225.333C441.4 224.597 440.803 224 440.067 224H437.933C437.197 224 436.6 224.597 436.6 225.333V227.6H434.333C433.597 227.6 433 228.197 433 228.933V231.067C433 231.803 433.597 232.4 434.333 232.4H436.6V234.667C436.6 235.403 437.197 236 437.933 236H440.067C440.803 236 441.4 235.403 441.4 234.667V232.4H443.667C444.02 232.4 444.359 232.26 444.609 232.009C444.86 231.759 445 231.42 445 231.067V228.933Z" stroke="#068278" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <g filter="url(#filter2_bd_0_1)">
                                <circle cx="343" cy="49" r="24" fill="url(#paint4_linear_0_1)" />
                                <circle cx="343" cy="49" r="23.5" stroke="url(#paint5_linear_0_1)" />
                            </g>
                            <path d="M343 61.005V58.3372V61.005" stroke="#ED9039" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M343 39.6628V36.995V39.6628" stroke="#ED9039" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M343.026 54.3065C345.972 54.3065 348.361 51.9177 348.361 48.971C348.361 46.0242 345.972 43.6354 343.026 43.6354C340.079 43.6354 337.69 46.0242 337.69 48.971C337.69 51.9177 340.079 54.3065 343.026 54.3065Z" stroke="#ED9039" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M351.489 57.4889L346.771 52.7709L351.489 57.4889" stroke="#ED9039" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M336.397 42.3973L334.511 40.5112L336.397 42.3973" stroke="#ED9039" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M355.005 49H352.337H355.005" stroke="#ED9039" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M333.663 49H330.995H333.663" stroke="#ED9039" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M351.489 40.5112L349.603 42.3973L351.489 40.5112" stroke="#ED9039" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M336.397 55.6028L334.511 57.4889L336.397 55.6028" stroke="#ED9039" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <defs className=''>
                                <filter id="filter0_bd_0_1" x="0" y="90" width="136" height="136" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="10" />
                                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_0_1" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dx="-12" dy="15" />
                                    <feGaussianBlur stdDeviation="20" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0" />
                                    <feBlend mode="normal" in2="effect1_backgroundBlur_0_1" result="effect2_dropShadow_0_1" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_0_1" result="shape" />
                                </filter>
                                <filter id="filter1_bd_0_1" x="359" y="183" width="136" height="136" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="10" />
                                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_0_1" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dx="-12" dy="15" />
                                    <feGaussianBlur stdDeviation="20" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0" />
                                    <feBlend mode="normal" in2="effect1_backgroundBlur_0_1" result="effect2_dropShadow_0_1" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_0_1" result="shape" />
                                </filter>
                                <filter id="filter2_bd_0_1" x="267" y="0" width="128" height="128" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="10" />
                                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_0_1" />
                                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                    <feOffset dx="-12" dy="15" />
                                    <feGaussianBlur stdDeviation="20" />
                                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.09 0" />
                                    <feBlend mode="normal" in2="effect1_backgroundBlur_0_1" result="effect2_dropShadow_0_1" />
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_0_1" result="shape" />
                                </filter>
                                <linearGradient id="paint0_linear_0_1" x1="52" y1="115" x2="117.333" y2="174.439" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="white" stop-opacity="0.8" />
                                    <stop offset="1" stop-color="white" stop-opacity="0.2" />
                                </linearGradient>
                                <linearGradient id="paint1_linear_0_1" x1="56.9123" y1="117.947" x2="108" y2="171" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="white" stop-opacity="0.8" />
                                    <stop offset="1" stop-color="white" stop-opacity="0.8" />
                                </linearGradient>
                                <linearGradient id="paint2_linear_0_1" x1="411" y1="208" x2="476.333" y2="267.439" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="white" stop-opacity="0.8" />
                                    <stop offset="1" stop-color="white" stop-opacity="0.2" />
                                </linearGradient>
                                <linearGradient id="paint3_linear_0_1" x1="415.912" y1="210.947" x2="467" y2="264" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="white" stop-opacity="0.8" />
                                    <stop offset="1" stop-color="white" stop-opacity="0.8" />
                                </linearGradient>
                                <linearGradient id="paint4_linear_0_1" x1="319" y1="25" x2="375" y2="75.9474" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="white" stop-opacity="0.8" />
                                    <stop offset="1" stop-color="white" stop-opacity="0.2" />
                                </linearGradient>
                                <linearGradient id="paint5_linear_0_1" x1="323.211" y1="27.5263" x2="367" y2="73" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="white" stop-opacity="0.8" />
                                    <stop offset="1" stop-color="white" stop-opacity="0.8" />
                                </linearGradient>
                            </defs>
                        </svg>

                        <svg className='-mt-[260px] lg:block hidden ' width="468" height="468" viewBox="0 0 468 468" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="234" cy="234" r="197.5" stroke="white" />
                            <circle cx="234" cy="234" r="160.5" stroke="white" />
                            <circle cx="234" cy="234" r="233.5" stroke="white" />
                        </svg>
                        {/* HoperAid hero section Image edit */}
                        <div className='lg:-mt-[350px] md:mt-[100px] md:ml-[90px] -mt-[50px] lg:ml-2 ml-[90px] lg:pb-12 md:pb-5 pb-5 '>
                            <svg className='lg:w-[440px] lg:h-[440px] w-[277px] h-[277px]' width="440" height="440" viewBox="0 0 440 440" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="220" cy="220" r="216" stroke="white" stroke-width="8" />
                            </svg>

                            <img src={hero_main_image} className='lg:w-[424px] lg:h-[424px] w-[267px] h-[267px] object-cover rounded-full lg:-mt-[432px] -mt-[271px] ml-1 lg:ml-[8px] ' alt='hero home page banner'></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // HoperAid hero section end
    );
};

export default Hero;