import React from 'react';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';
import botAvatar from '../../public/message.png';


const SimpleChatbot = () => {
 
    const theme = {
        background: '#f5f8fb',
        fontFamily: 'Roboto, sans-serif',
        headerBgColor: '#068278',
        headerFontColor: '#fff',
        headerFontSize: '15px',
        botBubbleColor: '#068278',
        botFontColor: '#fff',
        userBubbleColor: '#fff',
        userFontColor: '#4a4a4a',
        width: "300px",
        height: "400px",
    };
    const handlePayment = () => {
        // Simulate generating a transaction ID
        const transactionId = `TXN${Math.floor(Math.random() * 1000000)}`;
        
        // Return the transaction ID
        return transactionId;
    };

    const steps = [
        {
            id: 'welcome',
            message: 'Welcome to HopeAid! How can we assist you today?',
            trigger: 'options',
        },
        {
            id: 'options',
            options: [
                { value: 'donation', label: 'I want to donate', trigger: 'donation_start' },
                { value: 'info', label: 'Tell me about HopeAid', trigger: 'info_start' },
                { value: 'owner', label: 'Who owns HopeAid?', trigger: 'owner_info' },
                { value: 'contact', label: 'Contact us', trigger: 'contact_info' },
                { value: 'other', label: 'I have another question', trigger: 'custom_query' },
            ],
        },
        {
            id: 'donation_start',
            message: 'Thank you for your interest in donating! What type of donation would you like to make?',
            trigger: 'donation_type',
        },
        {
            id: 'donation_type',
            options: [
                { value: 'one_time', label: 'One-time donation', trigger: 'one_time_donation' },
                { value: 'monthly', label: 'Monthly donation', trigger: 'monthly_donation' },
                { value: 'large', label: 'Large gift donation', trigger: 'large_gift_donation' },
                { value: 'specific', label: 'Donate to a specific cause', trigger: 'specific_cause' },
            ],
        },
        {
            id: 'one_time_donation',
            message: 'Great! How much would you like to donate as a one-time gift?',
            trigger: 'donation_amount',
        },
        {
            id: 'monthly_donation',
            message: 'Monthly donations make a big difference! How much would you like to donate each month?',
            trigger: 'donation_amount',
        },
        {
            id: 'large_gift_donation',
            message: 'Thank you for considering a large gift donation! What amount are you thinking of?',
            trigger: 'donation_amount',
        },
        {
            id: 'specific_cause',
            message: 'Please specify the cause you want to support:',
            trigger: 'custom_cause',
        },
        {
            id: 'donation_amount',
            user: true,
            trigger: 'donation_payment',
        },
        {
            id: 'custom_cause',
            user: true,
            trigger: 'custom_cause_confirmation',
        },
        {
            id: 'custom_cause_confirmation',
            message: 'You’ve chosen to support {previousValue}. How much would you like to donate?',
            trigger: 'donation_amount',
        },
        {
            id: 'donation_payment',
            message: 'Processing your donation...',
            trigger: 'generate_invoice',
        },
        {
            id: 'generate_invoice',
            message: () => {
                const transactionId = handlePayment();
                return `Transaction successful! Your transaction ID is ${transactionId}. We will email you an invoice shortly.`;
            },
            trigger: 'donation_end',
        },
        {
            id: 'donation_end',
            message: 'Thank you for your donation! Would you like to do anything else?',
            trigger: 'options',
        },
        {
            id: 'info_start',
            message: 'HopeAid is a non-profit organization focused on providing education and resources to those in need. What would you like to know more about?',
            trigger: 'info_options',
        },
        {
            id: 'info_options',
            options: [
                { value: 'mission', label: 'Our mission', trigger: 'info_mission' },
                { value: 'projects', label: 'Our projects', trigger: 'info_projects' },
                { value: 'team', label: 'Our team', trigger: 'info_team' },
                { value: 'impact', label: 'Our impact', trigger: 'info_impact' },
            ],
        },
        {
            id: 'info_mission',
            message: 'Our mission is to empower communities through education and sustainable development. What else can we help with?',
            trigger: 'options',
        },
        {
            id: 'info_projects',
            message: 'We are involved in various projects, including building schools, providing clean water, and offering scholarships. Want to know more?',
            trigger: 'info_projects_options',
        },
        {
            id: 'info_projects_options',
            options: [
                { value: 'schools', label: 'Our school projects', trigger: 'info_schools' },
                { value: 'water', label: 'Clean water initiatives', trigger: 'info_water' },
                { value: 'scholarships', label: 'Scholarships', trigger: 'info_scholarships' },
            ],
        },
        {
            id: 'info_schools',
            message: 'Our school projects focus on building and renovating schools in underserved areas. Want details on specific projects?',
            trigger: 'options',
        },
        {
            id: 'info_water',
            message: 'Our clean water initiatives aim to provide access to safe drinking water in areas with scarce resources. Learn more?',
            trigger: 'options',
        },
        {
            id: 'info_scholarships',
            message: 'We offer scholarships to students with financial need to support their education. Need more information?',
            trigger: 'options',
        },
        {
            id: 'info_team',
            message: 'Our dedicated team is passionate about making a difference. Would you like to meet them or know more about their roles?',
            trigger: 'info_team_options',
        },
        {
            id: 'info_team_options',
            options: [
                { value: 'meet', label: 'Meet our team', trigger: 'info_team_meet' },
                { value: 'roles', label: 'Learn about their roles', trigger: 'info_team_roles' },
            ],
        },
        {
            id: 'info_team_meet',
            message: 'Meet our team members and learn about their contributions to HopeAid. What specific team member are you interested in?',
            trigger: 'options',
        },
        {
            id: 'info_team_roles',
            message: 'Our team members play various roles including project management, outreach, and administration. Need details on a specific role?',
            trigger: 'options',
        },
        {
            id: 'info_impact',
            message: 'We measure our impact through the number of people served, successful projects completed, and feedback from beneficiaries. Interested in specific impact metrics?',
            trigger: 'options',
        },
        {
            id: 'owner_info',
            message: 'HopeAid is proudly owned by Devgenius Technologies Ltd. How else can we assist you today?',
            trigger: 'options',
        },
        {
            id: 'contact_info',
            message: 'You can reach us via email at support@hopeaid.org or call us at (123) 456-7890. Is there anything else you need help with?',
            trigger: 'options',
        },
        {
            id: 'custom_query',
            message: 'Please type your question, and we’ll do our best to help!',
            trigger: 'custom_response',
        },
        {
            id: 'custom_response',
            user: true,
            trigger: 'custom_query_options',
        },
        {
            id: 'custom_query_options',
            message: 'Thank you for your question! Would you like to ask something else or explore more options?',
            trigger: 'options',
        },
        {
            id: 'final',
            message: 'Thank you for using HopeAid’s support system. If you have more questions, feel free to ask!',
            end: true,
        },
    ];
    

    const avatarStyle = {
        bot: {
            border: '2px solid #068278',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            boxShadow: '0 0 5px rgba(0,0,0,0.5)',
        },
        user: {
            border: '2px solid #068278',
            borderRadius: '50%',
            width: '50px',
            height: '50px',
            boxShadow: '0 0 5px rgba(0,0,0,0.5)',
        },
    };

    return (
        <ThemeProvider theme={theme}>
            <ChatBot 
                floating={true} 
                steps={steps} 
                avatarStyle={avatarStyle} 
                userAvatar={botAvatar} 
                headerTitle="HopeAid Support"
            />
        </ThemeProvider>
    );
};

export default SimpleChatbot;
