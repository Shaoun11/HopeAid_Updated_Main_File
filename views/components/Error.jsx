import React from 'react';
import Lottie from 'lottie-react';
import animationData from '../../public/Error.json'; // Adjust the path as needed


const Error = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-white flex items-center justify-center z-50 overflow-hidden">
        <Lottie
            animationData={animationData}
            loop={true}
            autoplay={true}
            className="w-full h-full max-w-full max-h-full object-contain"
        />
    </div>
    );
    
};

export default Error;