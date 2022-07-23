import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link, useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';

const MyAppointments = () => {

    const [appointments, setAppointments] = useState([]);
    const [user, loading, error] = useAuthState(auth);
    const navigate = useNavigate()

    useEffect(() => {
        if (user) {
            fetch(`https://doctors-portal-n.herokuapp.com/booking?patient=${user.email}` , {
                method: 'GET',
                headers:{
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    // console.log('res', res);
                    if(res.status === 401 || res.status === 403){
                        navigate('/home');
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                    }
                    
                  return   res.json()
                })
                .then(data => 
                    {
                        setAppointments(data)
                    }
                    )
        }
    }, [user])
    return (
        <div className='pt-10 pl-10'>
            <h4>my appointment: {appointments.length} </h4>
            <div className="overflow-x-auto">
                <table className="table w-full">
 
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Treatment</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            appointments.map((a , index) =>  <tr>
                                <th>{index+1}</th>
                                <td>{a.patient} </td>
                                <td>{a.date}</td>
                                <td>{a.slot}</td>
                                <td>{a.treatment}</td>
                                <td>
                                    {(a.price && !a.paid) && <Link to={`/dashboard/payment/${a._id}`}><button className='btn btn-xs btn-success' > Pay</button></Link>}
                                    {(a.price && a.paid) && <div>
                                        <p><span className='text-success'> paid</span> </p>
                                        <p>Transaction Id : <span className='text-success'> {a.transactionId} </span> </p>
                                    </div> }
                                </td>
                            </tr> )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointments;