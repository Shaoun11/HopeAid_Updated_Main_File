import React from 'react';
import { Toaster } from 'react-hot-toast';
import SimpleChatbot from '../components/SimpleChatBot';


const AppLayout = ({ children }) => {
    return (
        <>
            <Toaster position='top-center' />
            
            {children}
          <SimpleChatbot></SimpleChatbot>
        </>
    );
};

export default AppLayout;