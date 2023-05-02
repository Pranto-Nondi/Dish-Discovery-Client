import React from 'react';
import { FaThumbsUp } from 'react-icons/fa';
const SingleChef = ({ selectedChef }) => {
    console.log(selectedChef)
    const { chefName, chefPicture, yearsOfExperience, chefDescription, likes } = selectedChef || {}
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure className='bg-red-200 w-[50%] h-auto'><img className='' src={chefPicture} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{chefName}</h2>
                    <p>{chefDescription} </p>
                    <p>{yearsOfExperience} Years Experience </p>
                    <div className=' flex justify-center align-bottom'>
                        <FaThumbsUp className='text-blue-600 text-2xl'></FaThumbsUp>
                        <p className='text-xl pb-1'>&nbsp;&nbsp;{likes} </p>
                    </div>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Listen</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleChef;