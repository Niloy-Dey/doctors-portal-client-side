import React from 'react';
import Banner from './Banner';
import Info from './Info';
import MakeApoiment from './MakeApoiment';
import Services from './Services';

const Home = () => {
    return (
        <div className='px-16'>
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <MakeApoiment></MakeApoiment>
        </div>
    );
};

export default Home;