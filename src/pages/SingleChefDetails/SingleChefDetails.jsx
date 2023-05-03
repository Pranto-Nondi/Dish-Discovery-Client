import React from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const SingleChefDetails = ({ recipe }) => {
    const { recipeName, ingredients, cookingMethod, rating } = recipe
    return (
        <div>
            <div className="card w-96 card-compact bg-base-100 shadow-xl">
                {/* <figure  ><img className='w-[100%]' src={chefPicture && chefPicture} alt="Shoes" /></figure> */}
                <figure className="h-60 md:h-80">
                    <img className="object-cover w-full h-full" src='https://i.ibb.co/F5VVVFp/f1.jpg' alt="Chef" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl ">{recipeName}</h2>
                    <p className='text-xl '>Experience: yrs </p>
                    <p className='text-lg '>Recipe Items :  </p>
                    {/* <p className='text-sm font-semibold'>likes people :{likes} </p> */}
                    <div className=' flex justify-center align-bottom'>
                        <FaThumbsUp className='text-blue-600 text-2xl'></FaThumbsUp>
                        <p className='text-xl pb-1'>&nbsp;&nbsp; </p>
                    </div>
                    <div className="card-actions justify-center">
                        <Link className="btn btn-primary">Favorite</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleChefDetails;