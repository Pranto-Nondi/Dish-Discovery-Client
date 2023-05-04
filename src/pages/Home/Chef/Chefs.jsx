import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ChefDetails from '../ChefDetails/ChefDetails';
import Services from '../Services/Services';

import FavourFood from '../FavouriteFood/FavourFood';

const Chefs = () => {
    const chefs = useLoaderData()
    // console.log(chefs)
    return (
        <div>
            <>
                <h3 className='mt-10 mb-5 text-center text-4xl font-semibold'>Our Master Chef Special Features</h3>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 mt-5 mx-auto container  '>
                    {chefs.map(chef => <ChefDetails key={chef.id} chef={chef} ></ChefDetails>)}
                </div>

                <div>
                    <FavourFood></FavourFood>
                </div>
                <div>
                    <Services></Services>

                </div>

            </>
        </div>
    );
};

export default Chefs;