import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import ReactApexChart from 'react-apexcharts';
import Food_Image from '../../public/Healthy_Food_Image/2307153.jpg';
const HealthyFood = () => {
    const [series] = useState([
        {
            name: "Total Donation",
            data: [3900, 4700, 5100, 5400, 6100, 6500, 6900, 7000, 7100, 7200, 7300, 8000], // Consistent increase
        },
        {
            name: "Supplies Food",
            data: [1800, 2000, 2200, 2400, 2700, 2900, 3100, 3300, 3500, 3700, 3800, 3900], // Gradual increase
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
        colors: ['#66ba69', '#FF6347'], // Colors for Total Donation and Food
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth'
        },
        title: {
            text: 'Supplies Food Donation Breakdown',
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
                                Transform Lives  <br />
                                with 
                                    <span className="my-1 inline-block border-b-8 border-[#30978E] font-bold text-[#30978E]"> Healthy Food</span>
                                </h2>
                                <p className="text-base text-gray-700">Your donations transform lives by providing humanitarian aid, medical support, and healthy food.</p>
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
                                    <svg className='-mt-1 w-auto md:h-[50px] h-[31px]'  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480.007 480.007" fill="#068278" width="100px" height="100px">
                                        <path d="M479.426,267.581c-3.547-24.574-22.852-43.879-47.426-47.426v-14.544c0-40.128-30.504-72.8-68-72.8
                                        c-36.416,0-66.904,31.68-68,70.624h0.464l-0.464,0.08v157.656c0,50.4-37.68,91.328-84,91.328s-84-40.984-84-91.328v-13.656
                                        c11.6,0,24-8.408,24-32v-20.12c51.344-13.128,88-57.216,88-107.2v-16.68h-16l-0.336-104.12
                                        c-0.116-19.273-13.946-35.729-32.912-39.16c-4.091-12.533-17.568-19.377-30.102-15.285c-12.533,4.091-19.377,17.568-15.285,30.102
                                        c4.091,12.533,17.568,19.377,30.102,15.285c6.711-2.191,12.108-7.24,14.741-13.79c10.249,2.916,17.349,12.24,17.432,22.896
                                        L208,171.515h-16v16.912c-0.638,27.827-19.294,52.009-46.048,59.688c-14.315,4.542-29.685,4.542-44,0
                                        C75.229,240.41,56.615,216.232,56,188.427v-16.912H32v-104c0.046-10.813,7.318-20.261,17.76-23.072
                                        c4.869,12.395,18.864,18.495,31.259,13.626S99.514,39.204,94.645,26.81S75.78,8.315,63.386,13.184
                                        c-6.716,2.639-11.898,8.146-14.122,15.011C30.091,31.471,16.053,48.064,16,67.515v104H0v16.64c0,50.04,36.68,94.144,88,107.24
                                        v20.12c0,23.592,12.4,32,24,32v13.656c0,59.2,44.856,107.328,100,107.328s100-48.184,100-107.328V203.899
                                        c0.8-30.36,24.144-55.064,52-55.064c28.672,0,52,25.472,52,56.8v14.52c-30.611,4.418-51.844,32.815-47.426,63.426
                                        s32.815,51.844,63.426,47.426S483.844,298.191,479.426,267.581z M168,43.515c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8
                                        S172.418,43.515,168,43.515z M72,27.515c4.418,0,8,3.582,8,8s-3.582,8-8,8s-8-3.582-8-8S67.582,27.515,72,27.515z M16,188.155
                                        v-0.64h24v0.912c0.6,34.771,23.733,65.116,57.104,74.904c17.487,5.537,36.257,5.537,53.744,0
                                        c33.387-9.775,56.541-40.121,57.152-74.904v-0.912h16v0.64c0,44.504-34.304,83.664-81.6,93.136
                                        c-11.106,2.224-22.482,2.782-33.752,1.656c-3.71-0.36-7.398-0.918-11.048-1.672C50.304,271.819,16,232.659,16,188.155z
                                        M112,331.515c-7.2,0-8-11.2-8-16v-16.976c0.64,0.08,1.296,0.112,1.944,0.176c0.8,0.088,1.6,0.152,2.4,0.224
                                        c3.784,0.336,7.6,0.56,11.448,0.568h0.4c3.84,0,7.648-0.232,11.408-0.568c0.8-0.072,1.648-0.136,2.472-0.224
                                        c0.632-0.072,1.288-0.096,1.92-0.176v16.976c0,4.8-0.8,16-8,16H112z M424,315.515c-22.091,0-40-17.909-40-40
                                        c0-22.091,17.909-40,40-40c22.091,0,40,17.909,40,40C463.974,297.596,446.08,315.489,424,315.515z"/>
                                        <path d="M424,251.515c-13.255,0-24,10.745-24,24s10.745,24,24,24s24-10.745,24-24S437.255,251.515,424,251.515z M424,283.515
                                        c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S428.418,283.515,424,283.515z"/>
                                    </svg>

                                    <p> Transform Lives with Healthy Food.</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative hidden lg:ml-32 lg:block lg:w-1/2">
                            <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto my-6 h-10 w-10 animate-bounce rounded-full bg-blue-50 p-2 lg:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M16 17l-4 4m0 0l-4-4m4 4V3" />
                            </svg>
                            <div className="w-fit rounded-[6rem] mx-auto overflow-hidden rounded-tl-none rounded-br-none ">

                                <img className="-mb-20 w-[530px] h-[600px] object-cover" src={Food_Image} alt="" />
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
                                <p className="text-4xl font-bold">4520</p>
                                <p className="text-sm">Total Donate</p>
                            </div>
                        </div>
                        <div className="bg flex w-full flex-col items-center justify-center rounded-xl bg-[#30978E] px-2 py-2 text-white shadow-lg sm:h-56 sm:w-56">
                            <div className="p-3">
                            <svg className="h-6 w-6" width="50" height="50" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                        <path fill="#ffffff" d="M476 40c-19.299 0-35 15.701-35 35v103.065c6.709 3.121 12.996 7.447 18.532 12.982 25.388 25.383 25.389 66.542.004 91.927l-56.674 56.674c-5.858 5.858-15.355 5.858-21.213 0s-5.858-15.355 0-21.213l56.673-56.673c13.669-13.669 13.668-35.831-.002-49.499-13.669-13.666-35.827-13.665-49.495.002l-84.146 84.15c-21.719 21.721-33.68 50.6-33.68 81.316l.001 134.269h125c8.284 0 15-6.716 15-15v-53.897c0-8.172 2.881-16.129 8.112-22.407l65.233-78.279c17.189-20.627 26.655-46.773 26.655-73.622v-193.795c0-19.299-15.701-35-35-35zM207.32 296.415l-84.146-84.15c-13.667-13.667-35.826-13.668-49.495-.002-13.67 13.668-13.671 35.83-.002 49.499l56.673 56.673c5.858 5.858 5.858 15.355 0 21.213s-15.355 5.858-21.213 0l-56.674-56.674c-25.385-25.385-25.384-66.544.004-91.927 5.536-5.535 11.823-9.862 18.532-12.982l.001-103.065c0-19.299-15.701-35-35-35s-35 15.701-35 35v193.795c0 26.849 9.466 52.995 26.654 73.621l65.233 78.279c5.231 6.278 8.112 14.235 8.112 22.407v53.898c0 8.284 6.716 15 15 15h125v-134.27c.001-30.715-11.96-59.594-33.679-81.315zM361.964 22.311c-29.11-29.11-76.087-29.734-105.964-1.871-29.876-27.863-76.853-27.239-105.964 1.871-29.749 29.748-29.749 78.153 0 107.901l95.357 95.357c5.858 5.858 15.355 5.858 21.213 0l95.357-95.357c29.749-29.748 29.749-78.153.001-107.901z" />
                                    </svg>
                            </div>
                            <div className="text-center">
                                <p className="text-4xl font-bold">550</p>
                                <p className="text-sm">Supplies Food</p>
                            </div>
                        </div>
                     
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </>

    );
};

export default HealthyFood;
