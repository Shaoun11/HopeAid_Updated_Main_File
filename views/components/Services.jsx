import React from 'react';

const Services = () => {
    return (
        // HoperAid Services Section Code Start
        <div className='max-w-7xl mt-16 mb-28 mx-auto'>
            {/* HoperAid Services Section text */}
            <div className='lg:ml-0 ml-4 lg:mr-0 mr-4'>
                <h1 className='lg:text-[37px] md:text-[30px] text-center text-[24px] font-semibold text-[#171717]'>
                    How You May Assist
                </h1>
                <p className='mt-3 text-[#525252] text-center font-medium text-[15px]'>
                    Your assistance is essential to us completing our mission. You can help and<span className='md:block '></span> change things in a lot of different ways.
                </p>
            </div>
            {/* HoperAid Services Section Services Card */}
            <div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8'>
                {/* HoperAid Services Section Services Card 1 */}
                    <div className=' p-8 rounded-lg'>
                        <div className='flex justify-center'>
                            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="16" cy="16" r="16" fill="#068278" />
                                <path d="M16.0533 57.96C21.54 65.2467 30.23 70 40 70C56.5 70 70 56.5 70 40C70 23.5 56.5 10 40 10" stroke="#525252" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M16.0533 57.96C12.2733 52.94 10 46.73 10 40C10 23.5 23.5 10 40 10" stroke="#525252" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M39.1667 23.3333V27.5" stroke="#525252" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M39.1667 56.6667V52.5" stroke="#525252" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M47.4567 33.3333C47.24 30.08 44.5567 27.5 41.25 27.5H36.6834C33.45 27.5 30.8334 30.12 30.8334 33.35C30.8334 36.0333 32.66 38.3733 35.26 39.0267L43.07 40.9867C45.6734 41.64 47.4967 43.98 47.4967 46.6633C47.4967 49.8967 44.8767 52.5133 41.6467 52.5133H37.08C33.7667 52.5133 31.0834 49.9267 30.87 46.6667" stroke="#525252" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </div>
                        <h1 className='text-center text-[#171717] font-semibold text-xl mt-4'>Donate Funds</h1>
                        <p className='text-center text-[#525252] font-normal text-[15px] mt-4'>
                        You have the option to make a cash contribution, which will go directly towards supporting our activities and programmes.
                        </p>
                    </div>
                    {/* HoperAid Services Section Services Card 2 */}
                    <div className=' p-8 rounded-lg'>
                        <div className='flex justify-center'>
                            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="16" cy="64" r="16" fill="#D75084" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M20 70H13.3333C11.4933 70 10 68.5067 10 66.6667V46.6667C10 44.8267 11.4933 43.3333 13.3333 43.3333H20C21.84 43.3333 23.3333 44.8267 23.3333 46.6667V66.6667C23.3333 68.5067 21.84 70 20 70Z" stroke="#525252" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M43.3334 56.6667H51.11C52.5534 56.6667 53.9567 56.2 55.11 55.3333L63.1634 49.2933C65.1734 47.7867 67.9867 47.9867 69.7634 49.7633V49.7633C71.7367 51.7367 71.7367 54.9333 69.7634 56.9033L62.8534 63.8133C60.9934 65.6733 58.62 66.9433 56.04 67.46L46.2734 69.4133C44.3367 69.8 42.34 69.7533 40.4234 69.2733L31.59 67.0667C30.5334 66.8 29.45 66.6667 28.36 66.6667H23.3334" stroke="#525252" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M43.3334 56.6667H48.2834C51.0734 56.6667 53.3334 54.4067 53.3334 51.6167V50.6067C53.3334 48.29 51.7567 46.27 49.51 45.71L41.87 43.8C40.6267 43.49 39.3534 43.3333 38.0734 43.3333V43.3333C34.9834 43.3333 31.96 44.2467 29.39 45.9633L23.3334 50" stroke="#525252" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M62.9633 11.74C67.8499 12.45 70.5033 17.2267 69.9199 21.2333C68.7399 29.3633 54.1633 34.04 53.9166 34.0067C53.6699 33.97 41.0299 25.3367 42.2099 17.21C42.7933 13.2033 46.6933 9.38001 51.5799 10.09C54.3733 10.4967 56.0199 12.07 56.9099 13.3867C58.1433 12.3733 60.1699 11.3333 62.9633 11.74V11.74Z" stroke="#525252" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </div>
                        <h1 className='text-center text-[#171717] font-semibold text-xl mt-4'>Volunteer</h1>
                        <p className='text-center text-[#525252] font-normal text-[15px] mt-4'>
                            You can take an active part in our campaigns, events, and initiatives by contributing your knowledge, abilities, and time.
                        </p>
                    </div>
                    {/* HoperAid Services Section Services Card 3 */}
                    <div className=' p-8 rounded-lg'>
                        <div className='flex justify-center'>
                            <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="64" cy="16" r="16" fill="#ED9039" />
                                <path d="M46.6666 16.6667H60C63.6833 16.6667 66.6666 19.65 66.6666 23.3333V66.6667C66.6666 70.35 63.6833 73.3333 60 73.3333H20C16.3166 73.3333 13.3333 70.35 13.3333 66.6667V23.3333C13.3333 19.65 16.3166 16.6667 20 16.6667H33.3333" stroke="#525252" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M45.3034 35.53C48.2323 38.4589 48.2323 43.2077 45.3034 46.1366C42.3744 49.0655 37.6257 49.0655 34.6968 46.1366C31.7678 43.2077 31.7678 38.4589 34.6968 35.53C37.6257 32.6011 42.3744 32.6011 45.3034 35.53" stroke="#525252" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                <path d="M51.9833 63.3333C51.4 61.87 50.5 60.5567 49.3433 59.4867V59.4867C47.3867 57.6733 44.82 56.6667 42.1533 56.6667H37.8467C35.18 56.6667 32.6133 57.6733 30.6567 59.4867V59.4867C29.5 60.5567 28.6 61.87 28.0167 63.3333" stroke="#525252" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M43.3333 23.3333H36.6666C34.8266 23.3333 33.3333 21.84 33.3333 20V9.99999C33.3333 8.15999 34.8266 6.66666 36.6666 6.66666H43.3333C45.1733 6.66666 46.6666 8.15999 46.6666 9.99999V20C46.6666 21.84 45.1733 23.3333 43.3333 23.3333Z" stroke="#525252" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </div>
                        <h1 className='text-center text-[#171717] font-semibold text-xl mt-4'>Fundraising Events</h1>
                        <p className='text-center text-[#525252] font-normal text-[15px] mt-4'>
                        You can take the lead and plan events for our cause if you have a strong fundraising passion.
                        </p>
                    </div>
                </div>
            </div>
        </div>
        // HoperAid Services Section Services Code End
    );
};

export default Services;