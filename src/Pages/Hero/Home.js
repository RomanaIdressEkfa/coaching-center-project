import React from 'react';
import pic from './../../assets/images/pic.jpg';
import './Home.css';

const Home = () => {
    return (
        <div class="hero min-h-screen max-h-10 img" style={{
            backgroundImage: `url(${pic})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover'
        }}>
            <div class="hero-overlay bg-opacity-60"></div>
            <div class="hero-content text-center">
                <div class="max-w-md">
                    <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
                    <p class="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button class="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Home;