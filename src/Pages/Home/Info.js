import React from 'react';
import InfoCart from './InfoCart';
import clock from '../../assets/icons/clock.svg';
import map from '../../assets/icons/marker.svg';
import phone from '../../assets/icons/phone.svg'
const Info = () => {
    return (
       <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 px-12'>
           <InfoCart  cardTitle="Opening Hours" bgClassName="bg-gradient-to-r from-secondary to-primary" img={clock}></InfoCart>
           <InfoCart cardTitle="Our Location" bgClassName="bg-accent" img={map}></InfoCart>
           <InfoCart cardTitle="Contract us" bgClassName="bg-gradient-to-r from-secondary to-primary" img={phone}></InfoCart>
       </div>
    );
};

export default Info;