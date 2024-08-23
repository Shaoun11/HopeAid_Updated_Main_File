import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePage from "../views/pages/HomePage.jsx";
import Login from "../views/components/Login.jsx";
import Register from '../views/components/Register.jsx';
import PaymentPage from '../views/pages/PaymentPage.jsx';
import PrivateRoute from '../views/pages/PrivateRoute.jsx';
import Success from '../views/components/Success.jsx';
import BlogDetails from "../views/components/BlogDetails.jsx";
import HelpContact from "../views/components/HelpContact.jsx";
import Error from '../views/components/Error.jsx';
import Education from '../views/components/Education.jsx';
import MedicalPage from '../views/components/Mediccale.jsx';
import HealthyFood from '../views/components/HealthyFood.jsx';
import CleanWater from '../views/components/CleanWater.jsx';
import AppLayout from '../views/layout/AppLayout.jsx';


const Web = () => {
    return (
        <BrowserRouter>
           <AppLayout>
           <Routes>
                <Route path="/" element={<HomePage/>}/>
                <Route path="/signin" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/paymentSuccess" element={<Success/>}/>
                <Route path="/checkout/:id" element={<PrivateRoute><PaymentPage/></PrivateRoute>}/>
                <Route path="/blogDetails/:id" element={<PrivateRoute><BlogDetails/></PrivateRoute>}/>
                <Route path="/checkout" element={<PrivateRoute><PaymentPage/></PrivateRoute>}/>
                <Route path="/help&Support" element={<HelpContact/>}/>
                <Route path="/education" element={<Education/>}/>
                <Route path="/medical" element={<MedicalPage/>}/>
                <Route path="/healthyFood" element={<HealthyFood/>}/>
                <Route path="/cleanWater" element={<CleanWater/>}/>
                {/* Catch-all route for 404 errors */}
                <Route path="*" element={<Error />} />
            </Routes>
           </AppLayout>
        </BrowserRouter>
    );
};
export default Web;