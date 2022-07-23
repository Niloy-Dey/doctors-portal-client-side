import React from 'react';
import format from 'date-fns/format';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { toast } from 'react-toastify';

const BookingModal = ({ treatment, date , setTreatment, refetch}) => {

    const [user, loading, error] = useAuthState(auth);

    const { _id,  name, slots, price, patientName } = treatment;
    console.log(user?.displayName);

    const formattedDate = format(date, 'PP');

    const handleBooking = event => {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(slot);

       const booking =   {
            treatmentId: _id,
            treatment: name,
            date:formattedDate,
            slot,
            price: price,
            patient: user.email,
            patientName: user.displayName,
            phone: event.target.phone.value,
        }


        fetch(`https://doctors-portal-n.herokuapp.com/booking`, {
            method: 'POST',
            headers:{
                'content-type': 'application/json'
            },
            body:JSON.stringify(booking)
        })
        .then(res =>res.json())
        .then(data => {
            // console.log(data);
            if(data.success){
                toast(`Appointment is set , ${formattedDate} at ${slot}` );
            }
            else{
                toast.error(`You all ready have an appointment , ${data.booking?.date} at ${data.booking?.slot}` );
            }
            refetch();
            // To close the modal
            setTreatment(null);
        })
         
        
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle " />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn  btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg text-secondary text-center">Booking For {name} </h3>
                    <form className='text-center' onSubmit={handleBooking} >
                        <input type="text" disabled value={format(date, 'PP')} className=" my-1 input input-bordered input-accent w-full max-w-xs" />
                        <select name="slot" className="select select-bordered w-full max-w-xs">
                            {
                                slots.map((slot, index) => <option  key={index} value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" name="name" disabled value={user?.displayName || ''} className=" my-1 input input-bordered input-accent w-full max-w-xs" />
                        <input type="email" name='email' disabled value={user?.email} className=" my-1 input input-bordered input-accent w-full max-w-xs" />
                        <input type="text" name='phone' placeholder="Your Phone" className=" my-1 input input-bordered input-accent w-full max-w-xs" />
                        <input type="submit" value="submit" className=" my-1 btn  bg-secondary text-white text-xl  w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;