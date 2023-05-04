import React from 'react';

import Chefs from '../Chef/Chefs';

const Home = () => {
   
    return (
        <>
            <div className="flex items-center justify-center h-screen bg-cover bg-center bg-no-repeat p-3" style={{ backgroundImage: `url(${'https://i.ibb.co/54JFnLQ/bgImg.jpg'})` }}>
                <div className="max-w-xl w-full px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight text-center">Welcome to US Master Chef</h1>
                    <p className="mt-4 sm:mt-6 lg:mt-8 text-xl sm:text-2xl lg:text-3xl font-medium text-white leading-tight text-center">American Master Chef is the world wide famous to cook the serve of best products and world class food </p>
                    <div className="mt-8 sm:mt-10 lg:mt-12 flex justify-center">
                        <button className="px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 font-medium rounded-full bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50">Explore Now</button>
                    </div>
                </div>
               
            </div>
           
            <Chefs></Chefs>
        </>
    );
};

export default Home;
