import React from 'react';

const Review = ({ review }) => {
    return (
        <div className=''>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl">
                <div className="card-body">
                    <p>If a dog chews shoes whose shoes does he choose?If a dog chews shoes whose shoes does he choose?</p>
                </div>
                <div className='flex  items-center px-5 py-2'>
                    <div className="avatar">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100  mr-3">
                            <img src={review.image} alt="" />
                        </div>
                    </div>
                    <div>
                        <h2 className='text-xl'>{review.name}</h2>
                        <p>{review.location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Review;