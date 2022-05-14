import React from 'react';
import banner from '../../assets/images/chair.png';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import bg from '../../assets/images/bg.png';
const AppointmentBanner = ({date , setDate}) => {

    return (
        <div style={{
            background: `url(${bg})`,
        }} className="hero min-h-screen ">
            <div className="hero-content flex-col lg:flex-row-reverse ">
                <img src={banner} alt="" className="max-w-md  rounded-lg shadow-2xl" />
                <div className='mx-10'>
                    <DayPicker
                    
                    mode='single'
                    selected={date}
                    onSelect={setDate}
                    
                    />
                    
                </div>
            </div>
            
        </div>
    );
};

export default AppointmentBanner;