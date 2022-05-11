import React from 'react';
import Service from './Service';
import cavity from '../../assets/images/cavity.png';
import whitening from '../../assets/images/whitening.png';
import fluoride from '../../assets/images/fluoride.png';
const Services = () => {
    const services = [
        {
            _id: 1,
            name: "cavity treatment",
            description: 'Lorem ipsum dolor sit amet.',
            img: cavity
        },
        {
            _id: 2,
            name: "Fluoride treatment",
            description: 'Lorem ipsum dolor sit amet.',
            img: fluoride
        },
        {
            _id: 3,
            name: "whitening treatment",
            description: 'Lorem ipsum dolor sit amet.',
            img: whitening
        }
    ]
  
    return (
        <div className='my-20 flex flex-col justify-center items-center'>
            <div className='text-center text-xl font-bold uppercase'>
                <h3 className='text-primary '>Our Services</h3>
                <h1 className='text-3xl'>Services We Provided</h1>
            </div>
            <div className='my-12 grid sm:grid-cols-1 md:grid-cols-2  lg:grid-cols-3 gap-10'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;