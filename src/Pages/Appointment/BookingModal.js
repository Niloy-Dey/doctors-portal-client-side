import React from 'react';
import format from 'date-fns/format';
const BookingModal = ({ treatment, date , setTreatment}) => {
    const { name, slots } = treatment;

    const handleBooking = (event)=> {
        event.preventDefault();
        const slot = event.target.slot.value;
        console.log(slot);
        setTreatment(null);
    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" class="modal-toggle " />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <label for="booking-modal" class="btn  btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 class="font-bold text-lg text-secondary text-center">Booking For {name} </h3>
                    <form className='text-center' onSubmit={handleBooking} >
                        <input type="text" disabled value={format(date, 'PP')} class=" my-1 input input-bordered input-accent w-full max-w-xs" />
                        <select name="slot" class="select select-bordered w-full max-w-xs">
                            {
                                slots.map(slot => <option value={slot}>{slot}</option>)
                            }
                        </select>
                        <input type="text" placeholder="your name" class=" my-1 input input-bordered input-accent w-full max-w-xs" />
                        <input type="text" placeholder="Your Address" class=" my-1 input input-bordered input-accent w-full max-w-xs" />
                        <input type="text" placeholder="Your Phone" class=" my-1 input input-bordered input-accent w-full max-w-xs" />
                        <input type="submit" value="submit" class=" my-1 btn  bg-secondary text-white text-xl  w-full max-w-xs" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;