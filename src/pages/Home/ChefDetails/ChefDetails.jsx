import React from 'react';
import { Link } from 'react-router-dom';
import { FaThumbsUp } from 'react-icons/fa';

const ChefDetails = ({ chef }) => {
    // console.log(chef)
    const { id, chefName, chefPicture, yearsOfExperience, likes, recipes } = chef
    return (

        <div>
            <div className="card w-96 card-compact bg-base-100 shadow-xl">
                {/* <figure  ><img className='w-[100%]' src={chefPicture && chefPicture} alt="Shoes" /></figure> */}
                <figure className="h-60 md:h-80">
                    <img className="object-cover w-full h-full" src={chefPicture && chefPicture} alt="Chef" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl ">{chefName}</h2>
                    <p className='text-xl '>Experience: {yearsOfExperience}yrs </p>
                    <p className='text-lg '>Recipe Items : {recipes?.length} </p>
                    {/* <p className='text-sm font-semibold'>likes people :{likes} </p> */}
                    <div className=' flex justify-center align-bottom'>
                        <FaThumbsUp className='text-blue-600 text-2xl'></FaThumbsUp>
                        <p className='text-xl pb-1'>&nbsp;&nbsp;{likes} </p>
                    </div>
                    <div className="card-actions justify-center">
                        <Link to={`/recipeDetails/${id}`} className="btn btn-primary">Recipe Details</Link>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default ChefDetails;