import React, { useState } from 'react';
import {  Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import toast from 'react-hot-toast';

const SingleChefDetails = ({ recipe }) => {
    const { recipeName, ingredients, cookingMethod, rating } = recipe
    const [showFullMethod, setShowFullMethod] = useState(false);
    const [isFavorited, setIsFavorited] = useState(false);
    const methodPreview = cookingMethod.slice(0, 50);
    const methodFull = cookingMethod.slice(50);

    const toggleShowFullMethod = () => {
        setShowFullMethod(!showFullMethod);
    };
    const handleFavoriteClick = () => {
        setIsFavorited(true);
        toast.success("Successfully Recipe added to favorites!", {
            duration: 2000,
            
            });
    };
    return (
        <div>
            <div className="card w-96 card-compact bg-base-100 shadow-xl">
                {/* <figure  ><img className='w-[100%]' src={chefPicture && chefPicture} alt="Shoes" /></figure> */}
                <figure className="h-60 md:h-80">
                    <img className="object-cover w-full h-full" src='https://i.ibb.co/F5VVVFp/f1.jpg' alt="Chef" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title text-2xl ">{recipeName}</h2>
                    <p className='text-xl font-semibold '>Ingredients </p>
                    <ul className=" list-disc list-inside">
                        {ingredients.map((ingredient, index) => (
                            <li key={index} className="my-2 text-md font-semibold">
                                {ingredient}
                            </li>
                        ))}
                    </ul>

                    <p className="text-lg">
                        <span className='font-semibold'>Cooking Method </span>:{" "}
                        {showFullMethod ? cookingMethod : methodPreview + "..."}
                        <button onClick={toggleShowFullMethod} className="text-red-500 hover:text-red-700">
                            {showFullMethod ? "Read Less" : "Read More"}
                        </button>
                    </p>
                    <div className=' flex justify-center align-bottom'>
                        <Rating style={{ maxWidth: 140 }} value={(rating)} readOnly />

                        <p className='text-xl pb-1'>&nbsp;&nbsp;{rating} </p>
                    </div>
                    <div className="card-actions justify-center">
                        {/* <Link className="btn btn-primary">Favorite</Link> */}
                        <button
                            disabled={isFavorited}
                            onClick={handleFavoriteClick}
                            className="btn-primary btn"
                        >
                            {isFavorited ? "Favorited" : "Add to Favorite"}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleChefDetails;