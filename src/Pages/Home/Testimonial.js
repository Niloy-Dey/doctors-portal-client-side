import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png'
import people2 from '../../assets/images/people2.png'
import people3 from '../../assets/images/people3.png'
import Review from './Review';
const Testimonial = () => {
    const reviews = [
        {
            _id: 1,
            name: 'winson heri',
            review: '',
            image:people1,
            location:'califonia'
        },
        {
            _id: 2,
            name: 'nikolas ',
            review: '',
            image:people2,
            location:'califonia'
        },
        {
            _id: 3,
            name: 'newton galli',
            review: '',
            image:people3,
            location:'califonia'
        }
    ]
    return (
       <div>
            <section className='my-28 mx-20'>
            <div className='flex justify-between'>
                <div>
                    <h4 className="text-xl text-primary font-bold">Testimonials</h4>
                    <h2 className='text-3xl'>What our Patients say</h2>
                </div>
                <div>
                    <img src={quote} className="w-24 lg:w-48" alt="" />
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review =><Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
       </div>
   
    );
};

export default Testimonial;

