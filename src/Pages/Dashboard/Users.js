import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import UserRow from './UserRow';

const Users = () => {

    const { data: users, isLoading, refetch } = useQuery('users', () =>
        fetch(`https://doctors-portal-n.herokuapp.com/user`, {
            method: 'GET',
            headers:{
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
               return  res.json()
            }
            
            ));
            // console.log
console.log(users);
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h1>user {users.length} </h1>


            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map(user => <UserRow key={user._id} refetch={refetch} user={user}></UserRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Users;