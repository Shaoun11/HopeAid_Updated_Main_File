import React from 'react';
import AppLayout from "../layout/AppLayout.jsx";
import Hero from "../components/Hero.jsx";
import Navbar from "../components/Navbar.jsx";
import Services from "../components/Services.jsx";
import Donation from "../components/Donation.jsx";
import Features from "../components/Features.jsx";
import Goal from "../components/Goal.jsx";
import Volunteer from "../components/Volunteer.jsx";
import Testimonial from "../components/Testimonial.jsx";
import Blog from "../components/Blog.jsx";
import FAQ from "../components/FAQ.jsx";
import AdvertiseBanner from "../components/AdvertiseBanner.jsx";
import Footer from "../components/Footer.jsx";






const HomePage = () => {
    return (
        <AppLayout>
            <Navbar></Navbar>
            <Hero></Hero>
            <Services></Services>
            <Donation></Donation>
            <Features></Features>
            <Goal></Goal>
            <Volunteer></Volunteer>
            <Testimonial></Testimonial>
            <Blog></Blog>
            <FAQ></FAQ>
            <AdvertiseBanner></AdvertiseBanner>
            <Footer></Footer>
         
        </AppLayout>
    );
};

export default HomePage;