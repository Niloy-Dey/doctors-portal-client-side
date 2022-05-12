import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import ContractUs from './ContractUs';
import Info from './Info';
import MakeApoiment from './MakeApoiment';
import Services from './Services';
import Testimonial from './Testimonial';

const Home = () => {
    return (
        <div className=''>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <MakeApoiment></MakeApoiment>
            <Testimonial></Testimonial>
            <ContractUs></ContractUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;