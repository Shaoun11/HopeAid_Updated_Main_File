import React, { useEffect, useState } from 'react';
import blog_image_2 from '../../public/Blog_Image/0b0555643bf80b36469c08c685d9fade.png'
import blog_image_1 from '../../public/Blog_Image/2bdc800d6244a6aaffa03dcdff9fa72e.png'
import blog_image_3 from '../../public/Blog_Image/eef964d5d3c9f596e6f5032c54a839b6.png'
import BlogCard from './BlogCard';
import BlogLoader from '../loader/BlogLoader';
const Blog = () => {
    const [data, setData] = useState([]);
    const [visibleData, setVisibleData] = useState([]);
    const [showAll, setShowAll] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Replace with your actual API endpoint
        fetch('http://localhost:5001/api/donationBlogData')
          .then(response => response.json())
          .then(responseData => {
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
      
      const handleViewAll = () => {
        setVisibleData(data);
        setShowAll(true);
      };
      if (loading) {
        return <BlogLoader></BlogLoader>
      }else{
        return (
            // HoperAid Blog Section Code Start
            <div id='blog' className='max-w-7xl mx-auto mt-[60px] mb-[60px]'>
                {/* HoperAid Blog Section Text */}
                 <div className='lg:ml-0 md:ml-6 md:mr-6 ml-4 lg:mr-0 mr-4 md:flex flex justify-between'>
                    <h1 className='lg:text-[37px] md:text-[30px] text-[24px] font-semibold text-[#171717]'>
                    Press Release
                    </h1>
                    {/* blog section button*/}
                    {visibleData?.length < data?.length && (
                         <p className='md:block hidden'>
                         <button onClick={handleViewAll} className="bg-[#FFF] border-[#068278] border text-[#068278] hover:bg-[#068278] btn rounded-3xl px-8 py-3 hover:text-white hover:border-transparent">
                            View all
                            </button>
                         </p>
                    )}
                </div>
    
                <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 md:mt-14 mt-8'>
                {
                    visibleData?.map(donationBlog=><BlogCard key={donationBlog._id} data={donationBlog} ></BlogCard>)
                    }
                </div>
               {/* blog section button responsive */}
               {visibleData?.length < data?.length && (
                <p className='md:hidden block text-center mt-8'>
                    <button onClick={handleViewAll} className="bg-[#FFF] border-[#068278] border text-[#068278] hover:bg-[#068278] btn rounded-3xl px-8 py-3 hover:text-white hover:border-transparent">
                       
                       View all
                       </button>
                    </p>
               )}
            </div>
        );
      }
   
};

export default Blog;