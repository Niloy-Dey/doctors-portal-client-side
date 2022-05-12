import React from 'react';
import doctor from '../../assets/images/doctor.png'
import appointment from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';
const MakeApoiment = () => {
    return (
        <div style={{
            background: `url(${appointment})`
        }}
            className='flex justify-center items-center'>
            <div className='flex-1 hidden lg:block'>
                <img className='mt-[-150px]' src={doctor} alt="" />
            </div>
            <div className='flex-1 text-white p-4'>
                <h3 className='text-xl text-primary '>Appointment</h3>
                <h2 className='text-3xl py-2'>Make an Appointment Today</h2>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere nisi unde expedita alias eveniet velit libero voluptatum asperiores, incidunt nam architecto nulla dignissimos repellendus excepturi exercitationem necessitatibus a! Ipsum, necessitatibus!</p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </div>
    );
};

export default MakeApoiment;