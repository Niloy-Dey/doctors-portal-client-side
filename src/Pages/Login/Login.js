import React from 'react';
import {useSignInWithGoogle} from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const Login = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    if(user){
        console.log(user);
    }

    return (
        <div className='pt-20 '>
            <h1 class="text-5xl font-bold text-center text-secondary">Login now!</h1>
            <div class="hero ">
                <div class="hero-content w-full flex-col lg:flex-row-reverse">
                    <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div class="card-body">
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" class="input input-bordered" />
                            </div>
                            <div class="form-control">
                                <label class="label">
                                    <span class="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" class="input input-bordered" />
                                <label class="label">
                                    <a href="#" class="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div class="form-control mt-6">
                                <button class="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-secondary to-primary ">Login</button>
                            </div>


                                <p>New to Doctors Portal ? <a href=" " className='text-secondary'>Create a New Account</a>  </p>


                            <div className='divider'>OR</div>
                            <button onClick={() => signInWithGoogle()} className='btn btn-outline '>Continue With Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;