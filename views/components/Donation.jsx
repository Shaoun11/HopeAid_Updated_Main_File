import React, { useEffect, useState } from 'react';
import donation_image_1 from '../../public/Donation_Image/3b74cfffe449fd4446c9247b07c95860.png'
import donation_image_2 from '../../public/Donation_Image/558690cccd9233f7ec4b68dda1ad30b4.png'
import donation_image_3 from '../../public/Donation_Image/e85c5935fe77bc4a5675868613904cbb.png'
import DonationCard from './DonationCard';
import DonationCardLoader from '../loader/DonationCardLoader';
const Donation = () => {
    const [data, setData] = useState([]);
    const [visibleData, setVisibleData] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Replace with your actual API endpoint
        fetch('http://localhost:5001/api/donationCard')
          .then(response => response.json())
          .then(responseData => {
            console.log('Fetched data:', responseData);
            const dataArray = responseData.data;// Directly access the data array
            setData(dataArray);
            setVisibleData(dataArray.slice(0, 3)); // Show only the first 3 items initially
            setLoading(false);
          })
          .catch(error => {
            console.error('Error fetching data:', error);
            setLoading(false);
          });
      }, []);

      console.log(visibleData);
      
      const handleViewAll = () => {
        setVisibleData(data);
        setShowAll(true);
      };

      if (loading) {
        return <DonationCardLoader/>
      }
      else{
        return (
        
            // HoperAid Donation Section Code Start
            <div id='donation' className='max-w-7xl mt-10  mx-auto'>
                {/* HoperAid Donation Section Text */}
                <div className='lg:ml-0 md:ml-8 md:mr-8 ml-4 lg:mr-0 mr-4 md:flex justify-between'>
                    <h1 className='lg:text-[37px] md:text-[30px] text-[24px] font-semibold text-[#171717]'>
                        Explore The Numerous <span className='md:block '></span> Programmes
                    </h1>
                    <p className='mt-3 text-[#525252] font-medium text-[15px]'>
                        Your assistance is essential to us completing our <span className='md:block '></span> mission. You can help and change things in a lot of <span className='md:block '></span> different ways.
                    </p>
                </div>
                {/* HoperAid Donation Section Cards */}
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 mt-14 lg:ml-0 md:ml-6  ml-4 lg:mr-0 mr-4'>
                {
                visibleData?.map(donation=><DonationCard key={donation._id} data={donation} ></DonationCard>)
                }
                </div>
                {/* HoperAid Donation Section Button */}
                {visibleData?.length < data?.length && (
                <div className='mt-5 text-center mb-[60px]'>
                    <button onClick={handleViewAll} className="bg-[#068278] hover:border-[#068278] hover:border text-[#FFF] hover:bg-[#FFF] btn rounded-3xl px-12 py-4 hover:text-[#068278] border-transparent">
                        View all
                    </button>
                </div>
            )}
            </div>
    
     
            // HoperAid Donation Section Code End
        );
      }
  
   
};

export default Donation;