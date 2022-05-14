import React from 'react';

const Service = ({service,setTreatment}) => {
    const {name, slots} = service;
    
    return (
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <div className="card-body text-center">
                    <h2 className="text-xl font-bold text-center text-secondary">{name}</h2>
                    <p>
                        {
                          slots.length > 0 
                          ? <span>{slots[0]} </span>
                          : <span className='text-red-500'>try another date</span>
                        }
                    </p>
                    <p>{slots.length} {slots.length>1 ? 'spaces' : "space"} available</p>
                    <div className="card-actions justify-center">
                        <label htmlFor="booking-modal"
                        className="btn modal-button btn btn-secondary text-white"   
                        disabled = { slots.length === 0 }
                        onClick={() => setTreatment(service)}>Book Appointment</label>
                    </div>
                </div>
            </div>
    );
};

export default Service;