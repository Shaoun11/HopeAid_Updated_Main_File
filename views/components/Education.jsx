import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import ReactApexChart from 'react-apexcharts';

const Education = () => {
    const [series] = useState([
        {
            name: "School Supplies",
            data: [1500, 2000, 2500, 3000, 3500, 4000, 4500, 5000, 5500, 6000, 6500, 7000],
        },
        {
            name: "Scholarships",
            data: [1200, 1800, 3400, 3000, 3600, 6200, 4800, 5400, 6000, 6600, 7200, 7800],
        },
        {
            name: "Total Donation",
            data: [2700, 3800, 4900, 6000, 7000, 8200, 9300, 10400, 11500, 12600, 13700, 14800],
        }
    ]);

    const [options] = useState({
        chart: {
            height: 350,
            type: 'line',
            zoom: {
                enabled: false
            }
        },
        colors: ['#30978E', '#FF6347', '#4CAF50'], // Colors for School Supplies, Scholarships, and Total Donation
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        title: {
            text: 'Donation Breakdown',
            align: 'left'
        },
        grid: {
            row: {
                colors: ['#f3f3f3', 'transparent'],
                opacity: 0.5
            }
        },
        xaxis: {
            categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            title: {
                text: 'Month'
            }
        },
        yaxis: {
            title: {
                text: 'Amount ($)'
            }
        }
    });

    return (
        <>
            <Navbar />
            <div className="bg-[#fef9f6]">
                <div className="mx-auto h-full px-4 py-10 sm:max-w-xl md:max-w-full md:px-24 md:py-36 lg:max-w-screen-xl lg:px-8">
                    <div className="flex flex-col items-center justify-between lg:flex-row">
                        <div className="">
                            <div className="lg:max-w-xl lg:pr-5">
                                <h2 className="mb-6 max-w-lg text-5xl font-light leading-snug tracking-tight text-[#30978E] sm:text-6xl">
                                    Support Education <br />
                                    and
                                    <span className="my-1 inline-block border-b-8 border-[#30978E] font-bold text-[#30978E]"> Change Lives</span>
                                </h2>
                                <p className="text-base text-gray-700">Your donations help provide educational resources to underprivileged children and make a lasting impact on their futures.</p>
                            </div>
                            <div className="mt-10 flex flex-col items-center md:flex-row">
                                <Link to='/checkout'>
                                    <button className="bg-[#068278] hover:border-[#068278] hover:border text-[#FFF] hover:bg-[#FFF] btn rounded-3xl px-12 py-4 hover:text-[#068278] border-transparent">

                                        Donate Now
                                    </button>
                                </Link>

                            </div>
                            <div className="mt-12 flex flex-col space-y-3 divide-gray-300 text-sm text-gray-700 sm:flex-row sm:space-y-0 sm:divide-x">
                                <div className="flex max-w-xs space-x-2 px-4">

                                    <svg className='-mt-1' width="50" height="50" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="#068278" d="M476 40c-19.299 0-35 15.701-35 35v103.065c6.709 3.121 12.996 7.447 18.532 12.982 25.388 25.383 25.389 66.542.004 91.927l-56.674 56.674c-5.858 5.858-15.355 5.858-21.213 0s-5.858-15.355 0-21.213l56.673-56.673c13.669-13.669 13.668-35.831-.002-49.499-13.669-13.666-35.827-13.665-49.495.002l-84.146 84.15c-21.719 21.721-33.68 50.6-33.68 81.316l.001 134.269h125c8.284 0 15-6.716 15-15v-53.897c0-8.172 2.881-16.129 8.112-22.407l65.233-78.279c17.189-20.627 26.655-46.773 26.655-73.622v-193.795c0-19.299-15.701-35-35-35zM207.32 296.415l-84.146-84.15c-13.667-13.667-35.826-13.668-49.495-.002-13.67 13.668-13.671 35.83-.002 49.499l56.673 56.673c5.858 5.858 5.858 15.355 0 21.213s-15.355 5.858-21.213 0l-56.674-56.674c-25.385-25.385-25.384-66.544.004-91.927 5.536-5.535 11.823-9.862 18.532-12.982l.001-103.065c0-19.299-15.701-35-35-35s-35 15.701-35 35v193.795c0 26.849 9.466 52.995 26.654 73.621l65.233 78.279c5.231 6.278 8.112 14.235 8.112 22.407v53.898c0 8.284 6.716 15 15 15h125v-134.27c.001-30.715-11.96-59.594-33.679-81.315zM361.964 22.311c-29.11-29.11-76.087-29.734-105.964-1.871-29.876-27.863-76.853-27.239-105.964 1.871-29.749 29.748-29.749 78.153 0 107.901l95.357 95.357c5.858 5.858 15.355 5.858 21.213 0l95.357-95.357c29.749-29.748 29.749-78.153.001-107.901z" />
                                    </svg>

                                    <p>
                                    Support HopeAid: Donate to empower futures through education!</p>
                                </div>
                                <div className="flex max-w-xs space-x-2 px-4">
                                    <svg className='-mt-1 w-auto md:h-[50px] h-[31px]' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" fill="#068278" width="50px" height="50px">
                                        <path d="M8.76 14.16A3 3 0 0 0 6 17.16v4.13a2 2 0 1 0 4 0v-3.19A79.26 79.26 0 0 1 62.74 35.56a2 2 0 0 0 2.52 0A79.28 79.28 0 0 1 118 18.09v3.19a2 2 0 1 0 4 0V17.16a3 3 0 0 0-2.76-2.99 83.2 83.2 0 0 0-53.24 17.29 83.21 83.21 0 0 0-55.24-17.3Z" />
                                        <path d="M62 4v10a2 2 0 1 0 4 0V4a2 2 0 1 0-4 0ZM72.21 9.11l-2 4a2 2 0 1 0 3.58 1.79l2-4a2 2 0 1 0-3.58-1.79ZM53.1 8.21a2 2 0 0 0-.89 2.68l2 4a2 2 0 1 0 3.58-1.79l-2-4A2 2 0 0 0 53.1 8.21Z" />
                                        <path d="M122.16 27.03c-10.15-.25-35.18.78-56.16 14.9v83.1c3.89-2.77 23.26-15.16 55.64-13.16a5.93 5.93 0 0 0 4.45-1.62 6.1 6.1 0 0 0 1.91-4.41V33.03a5.97 5.97 0 0 0-5.84-6ZM109.11 95.51A62 62 0 0 0 82 103.25a2 2 0 1 1-1-3.73 66.14 66.14 0 0 1 28.89-8.27 2 2 0 1 1 .22 4Zm0-12A62.11 62.11 0 0 0 82 91.24a2.03 2.03 0 0 1-1 .27 2 2 0 1 1-1-3.73 66.14 66.14 0 0 1 28.89-8.27 2 2 0 1 1 .22 4Zm0-12A62.11 62.11 0 0 0 82 79.24a2.03 2.03 0 0 1-1 .27 2 2 0 1 1-1-3.73 66.24 66.24 0 0 1 28.89-8.27 2 2 0 1 1 .22 4Zm0-12.01A62.01 62.01 0 0 0 82 67.24a2.03 2.03 0 0 1-1 .27 2 2 0 1 1-1-3.73 66.24 66.24 0 0 1 28.89-8.27 2.02 2.02 0 1 1 1.89 1.89 2 2 0 0 1-1.89 1.61Zm0-12A62.01 62.01 0 0 0 82 55.24a2.03 2.03 0 0 1-1 .27 2 2 0 1 1-1-3.73 65.97 65.97 0 0 1 28.89-8.27 2 2 0 1 1 .22 4Z" />
                                        <path d="M6.36 111.86c32.39-1.98 51.75 10.4 55.64 13.16V41.93C41.02 27.81 15.99 26.78 5.84 27.03a5.97 5.97 0 0 0-5.84 6v72.8a6.1 6.1 0 0 0 1.91 4.41 5.93 5.93 0 0 0 4.45 1.62ZM19.11 43.51A66.24 66.24 0 0 1 48 51.77a2 2 0 0 1-1 3.73 2.03 2.03 0 0 1-1-.27A62.01 62.01 0 0 0 18.89 47.5a2 2 0 0 1 .22-3.99Zm0 12A66.24 66.24 0 0 1 48 63.77a2 2 0 0 1-1 3.73 2.03 2.03 0 0 1-1-.27A62.01 62.01 0 0 0 18.89 59.5a2 2 0 0 1-1.89-2.11 2.02 2.02 0 0 1 2.11-1.89Zm0 12A66.24 66.24 0 0 1 48 75.77a2 2 0 0 1-1 3.73 2.03 2.03 0 0 1-1-.27 62.11 62.11 0 0 0-27.11-7.73 2 2 0 1 1 .22-4Zm0 12A66.14 66.14 0 0 1 48 87.78a2 2 0 0 1-1 3.73 1.93 1.93 0 0 1-1-.27 62.11 62.11 0 0 0-27.11-7.73 2 2 0 1 1 .22-4Zm0 12A66.14 66.14 0 0 1 48 99.78a2 2 0 0 1-2 3.47 62.01 62.01 0 0 0-27.11-7.74 2 2 0 1 1 .22-4Z" />
                                    </svg>
                                    <p>Support education, Empower futures.</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative hidden lg:ml-32 lg:block lg:w-1/2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto my-6 h-10 w-10 animate-bounce rounded-full bg-blue-50 p-2 lg:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16 17l-4 4m0 0l-4-4m4 4V3" />
                            </svg>
                            <div className="w-fit rounded-[6rem] mx-auto overflow-hidden rounded-tl-none rounded-br-none ">

                                <img className="-mb-20 w-[530px] h-[600px] object-cover" src="https://i.ibb.co/hLgYFYz/MTQ1-Nz-Mw-OTQ7.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <section className="bg-blue-40 text-blue-800 mb-[120px]">
                <div className="mx-auto flex max-w-screen-xl flex-col px-4 sm:flex-row sm:px-8 lg:px-20">
                    <div className="mt-20 flex flex-col sm:w-2/3 sm:pr-10">
                        <div>
                            <p className="mb-2 hidden h-1.5 w-14 bg-[#30978E] sm:block"></p>
                            <h1 className="block whitespace-nowrap text-center text-4xl font-black text-gray-800 sm:text-left">Donation Chart</h1>
                        </div>
                        <div id="chart">
                            <ReactApexChart options={options} series={series} type="line" height={350} />
                        </div>
                        <p className="hidden text-gray-600 sm:block">
                            Your donations have made these things possible Penny Appeal are members of the Fundraising Regulator and commit to follow the Code of Fundraising Practice and the Fundraising Promise.
                        </p>
                    </div>
                    <div className="mt-8 flex-col items-end space-y-3 rounded-xl px-4 py-4 sm:w-1/3 md:ml-auto lg:flex">
                        <div className="bg flex w-full flex-col items-center justify-center rounded-xl bg-[#30978E] px-2 py-2 text-white shadow-lg sm:h-56 sm:w-56">
                            <div className="p-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                                </svg>
                            </div>
                            <div className="text-center">
                                <p className="text-4xl font-bold">1420</p>
                                <p className="text-sm">Total Donate</p>
                            </div>
                        </div>
                        <div className="bg flex w-full flex-col items-center justify-center rounded-xl bg-[#30978E] px-2 py-2 text-white shadow-lg sm:h-56 sm:w-56">
                            <div className="p-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                                </svg>
                            </div>
                            <div className="text-center">
                                <p className="text-4xl font-bold">550</p>
                                <p className="text-sm">Scholarships</p>
                            </div>
                        </div>
                        <div className="bg flex w-full flex-col items-center justify-center rounded-xl bg-[#30978E] px-2 py-2 text-white shadow-lg sm:h-56 sm:w-56">
                            <div className="p-3">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                                </svg>
                            </div>
                            <div className="text-center">
                                <p className="text-4xl font-bold">40</p>
                                <p className="text-sm">School Supplies</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </>

    );
};

export default Education;
