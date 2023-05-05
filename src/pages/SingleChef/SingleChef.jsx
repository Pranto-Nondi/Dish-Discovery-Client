import React from 'react';
import { FaArrowLeft, FaThumbsUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazy-load';
import SingleChefDetails from '../SingleChefDetails/SingleChefDetails';
const SingleChef = ({ selectedChef }) => {

    const { chefName, chefPicture, yearsOfExperience, chefDescription, likes, recipes } = selectedChef || {}
    return (
        <div className='px-5 py-5 mx-auto my-auto' >
            <div className="card lg:card-side bg-base-100 shadow-xl mt-5 p-5 ">

                <figure className=' w-full md:w-[70%] h-full'>
                    <LazyLoad threshold={0.95} ><img className='' src={chefPicture} alt="Album" /></LazyLoad>
                </figure>

                <div className="card-body">
                    <h2 className="card-title text-4xl">{chefName}</h2>
                    <p className='text-3xl '>{chefDescription} </p>
                    <p className='text-2xl '>Experience: {yearsOfExperience}Yrs  </p>
                    <p className='text-xl '> Recipe Items: {recipes?.length}</p>
                    <div className=' flex justify-center align-center'>
                        <FaThumbsUp className='text-blue-600 text-2xl'></FaThumbsUp>
                        <p className='text-xl pb-1'>&nbsp;&nbsp;{likes} </p>
                    </div>
                    <div className="card-actions justify-start">
                        <Link to='/' className=' flex flex-row flex justify-center align-center' >
                            <FaArrowLeft className='text-blue-600 text-2xl pt-1'></FaArrowLeft>
                            <p className='text-xl pl-2 '>Go Back</p>
                        </Link>

                    </div>
                </div>
            </div>
            <div>
                <h3 className='mt-10 mb-10 text-center text-4xl font-semibold'>Master Chef Recipes</h3>
                <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-10 mt-5 mx-auto container  
                '>

                    {recipes?.map((recipe, index) => <SingleChefDetails key={index} recipe={recipe} ></SingleChefDetails>)}
                </div>
            </div>
        </div>
    );
};

export default SingleChef;