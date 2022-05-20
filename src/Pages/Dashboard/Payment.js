import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from './CheckoutForm';

const Payment = () => {

    const stripePromise = loadStripe('pk_test_51L1TBvKBCH3RVVMg0tuXfOuf7eeU5CWWeE60MVx3alE2gM1XuFwuffe4l7sNDgUR9GqrK2kzT7cANLBENNxIfXHp00q4rx8ELC');

    const { id } = useParams();
    const url = `http://localhost:5000/booking/${id}`;

    const { data: booking, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

// console.log(booking);
    if (isLoading) { 
        return <Loading></Loading>
    }
    return (
        <div className='mt-10'>
            <div>
            <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div className="card-body">
                    <p className="text-success font-bold">Hello, {booking.patientName}</p>
                    <h2 className="card-title">Please Pay for {booking.treatment}</h2>
                    <p>Your Appointment: <span className='text-orange-700'>{booking.date}</span> at {booking.slot}</p>
                    <p>Please pay: ${booking.price}</p>
                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div className="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm booking={booking} />
                    </Elements>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Payment;