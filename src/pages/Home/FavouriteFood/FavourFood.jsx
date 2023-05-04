import React from 'react';


const FavourFood = () => {
    return (
        <div>
            <h3 className='mt-10 mb-5 text-center text-4xl font-semibold'>Favorite Food</h3>
            <div className='grid grid-cols-1 lg:grid-cols-3 mt-5'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/3Cg6jPJ/f3.webp" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            WOW ! First Item
                            <div className="badge badge-secondary">NEW</div>
                        </h2>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/6FywhnS/5.jpg" alt="Shoes" /></figure>

                    <div className="card-body">
                        <h2 className="card-title">
                            WOW ! Second Item

                        </h2>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img className='pt-5 py-5' src="https://i.ibb.co/QY2kndy/14.jpg" alt="Shoes" /></figure>

                    <div className="card-body">
                        <h2 className="card-title">

                            WOW ! Last  Item
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FavourFood;