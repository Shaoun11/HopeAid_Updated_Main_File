import React from 'react';

const FAQ = () => {
    return (
        // FAQ Code Start
        <div className='max-w-7xl 2xl:ml-auto 2xl:mr-auto lg:ml-32 lg:mr-32 md:ml-6 md:mr-6 ml-0 mx-auto pt-[20px] pb-[60px]'>
             <div className='lg:ml-4 ml-4 lg:mr-0 mr-4'>
                <h1 className='lg:text-[37px] md:text-[30px] text-[24px] font-semibold text-[#171717]'>
                Frequently Asked Questions
                </h1>
                <p className='mt-3 text-[#525252] font-medium text-[15px]'>
                Your assistance is essential to us completing our mission. You can help and change things in a lot of<span className='md:block '></span> different ways.
                </p>
            </div>
            <div>   
            {/* Faq first question */}
            <div>
            <div className="collapse collapse-plus  bg-[#FFF] ">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title lg:text-2xl text-lg text-[#171717] font-medium">How can I make a donation to your company?</div>
                <div className="collapse-content lg:text-[15px] text-sm font-normal text-[#525252]">
                    <p>Making a donation is simple! By selecting the "Donate Now" button on our website, you can donate money straight to us. We take a number of payment options, including online payment gateways and credit/debit cards. You can reach out to our staff using the contact details provided on the website if you would rather make a donation offline.</p>
                </div>
            </div>
            </div>
             {/* Faq second question */}
            <div className="collapse collapse-plus bg-[#FFF] ">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title lg:text-2xl text-lg text-[#171717] font-medium">Can I choose the recipient of my donation?</div>
                <div className="collapse-content lg:text-[15px] text-sm font-normal text-[#525252]">
                    <p>Making a donation is simple! By selecting the "Donate Now" button on our website, you can donate money straight to us. We take a number of payment options, including online payment gateways and credit/debit cards. You can reach out to our staff using the contact details provided on the website if you would rather make a donation offline.</p>
                </div>
            </div>
            {/* Faq third question */}
            <div className="collapse collapse-plus backdrop-blur-none bg-[#FFF] ">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title lg:text-2xl text-lg text-[#171717] font-medium ">Are there tax deductions for my donations?</div>
                <div className="collapse-content lg:text-[15px] text-sm font-normal text-[#525252]">
                    <p>Making a donation is simple! By selecting the "Donate Now" button on our website, you can donate money straight to us. We take a number of payment options, including online payment gateways and credit/debit cards. You can reach out to our staff using the contact details provided on the website if you would rather make a donation offline.</p>
                </div>
            </div>
            {/* Faq fourth question */}
            <div className="collapse collapse-plus bg-[#FFF] ">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title lg:text-2xl text-lg text-[#171717] font-medium">What other ways can I help besides giving money?</div>
                <div className="collapse-content lg:text-[15px] text-sm font-normal text-[#525252]">
                    <p>Making a donation is simple! By selecting the "Donate Now" button on our website, you can donate money straight to us. We take a number of payment options, including online payment gateways and credit/debit cards. You can reach out to our staff using the contact details provided on the website if you would rather make a donation offline.</p>
                </div>
            </div>
            {/* Faq fifth question */}
            <div className="collapse collapse-plus bg-[#FFF] ">
                <input type="radio" name="my-accordion-3" defaultChecked />
                <div className="collapse-title lg:text-2xl text-lg text-[#171717] font-medium">How open is your organisation about how it uses money?</div>
                <div className="collapse-content lg:text-[15px] text-sm font-normal text-[#525252]">
                    <p>Making a donation is simple! By selecting the "Donate Now" button on our website, you can donate money straight to us. We take a number of payment options, including online payment gateways and credit/debit cards. You can reach out to our staff using the contact details provided on the website if you would rather make a donation offline.</p>
                </div>
            </div>
        </div>
        </div>
        // FAQ Code End
    );
};

export default FAQ;