import React from 'react';

const InfoCart = ({img, cardTitle, bgClassName}) => {
    return (
        <div className={`card lg:card-side bg-base-100 shadow-xl  text-white ${bgClassName}`}>
            <figure className='p-5'>
                <img src={img} alt="Album"></img>
            </figure>
            <div className="card-body px-5">
                <h2 className="card-title">{cardTitle}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
            </div>
        </div>
    );
};

export default InfoCart;