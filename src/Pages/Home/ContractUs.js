import React from 'react';
import contract from '../../assets/images/appointment.png'
import PrimaryButton from '../Shared/PrimaryButton';
const ContractUs = () => {
    return (
        <div className='pt-20 w-full mb-10' style={{
            background: `url(${contract})`
        }}>
            <div className='text-center p-4'>
                <h3 className='font-bold text-xl text-primary '>Contract Us</h3>
                <h1 className='text-2xl font-bold text-white'>Stay Connected With Us</h1>
            </div>
            <div className='flex align-center justify-center'>
                <form action="" className='text-center mb-5' >
                    <input className= ' p-3 outline-none w-80 rounded-md m-2' type="email" name="email" placeholder='Enter your Email Address' id="" />
                    <br />
                    <input className= ' p-3 outline-none w-80 rounded-md m-2'  type="text" name="subject" placeholder='Enter Your Subject' id="" />
                    <br />
                    <textarea className='p-3 outline-none w-80 rounded-md m-2' name="message" id="" cols="30" rows="5" placeholder='Your Message'></textarea>
                    <br />
                    <button className="  my-4 btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary ">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default ContractUs;