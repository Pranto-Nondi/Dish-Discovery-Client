import React from 'react';
import { Link } from 'react-router-dom';

const ChefDetails = ({ chef }) => {
    // console.log(chef)
    const { id, chefName, chefPicture, yearsOfExperience, likes, recipes } = chef
    return (
        <div>
            {/* <div className="card card-side w-[100%] h-80 bg-base-100 shadow-xl  ps-8 ">
                <figure className='w-[80%]'><img className='w-[100%]' src={chefPicture && chefPicture} alt="chefPicture" /></figure>
                <div className="card-body ">
                    <h2 className="card-title ">{chefName}</h2>
                    <p className='text-md'>Experience: {yearsOfExperience}yr </p>
                    <p className='text-md'>Recipe Items : {recipes?.length} </p>
                    <p className='text-sm'>likes people :{likes} </p>
                    <div className="card-actions justify-start">
                        <Link to={`/recipeDetails/${id}`} className="btn btn-primary">Recipe Details</Link>
                    </div>
                </div>
            </div> */}
            <div className="card w-96 card-compact bg-base-100 shadow-xl">
                <figure  ><img className='w-[100%]' src={chefPicture && chefPicture} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl ">{chefName}</h2>
                    <p className='text-lg font-semibold'>Experience: {yearsOfExperience}yr </p>
                    <p className='text-md font-semibold'>Recipe Items : {recipes?.length} </p>
                    <p className='text-sm font-semibold'>likes people :{likes} </p>
                    <div className="card-actions justify-center">
                        <Link to={`/recipeDetails/${id}`} className="btn btn-primary">Recipe Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefDetails;