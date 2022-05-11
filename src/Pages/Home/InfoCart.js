import React from 'react';

const InfoCart = ({img, cardTitle, bgClass}) => {
    return (
        <div class={`card lg:card-side bg-base-100 shadow-xl  text-white ${bgClass}`}>
            <figure className='p-5'>
                <img src={img} alt="Album"></img>
            </figure>
            <div class="card-body px-5">
                <h2 class="card-title">{cardTitle}</h2>
                <p>Click the button to listen on Spotiwhy app.</p>
            </div>
        </div>
    );
};

export default InfoCart;