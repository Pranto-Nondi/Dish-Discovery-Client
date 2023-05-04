import React from 'react';

const Services = () => {
    return (
        <div>
            <h3 className='mt-10 mb-5 text-center text-4xl font-semibold'>Svcs Features</h3>
            <div className='grid grid-cols-1 lg:grid-cols-3 mt-5'>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/5K2V5qy/p.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            24 Hrs All Time Service
                        </h2>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/qststM6/online.jpg" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                            OnLine Order Service

                        </h2>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure><img src="https://i.ibb.co/t3zCDFX/tru.webp" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">
                             Home Services
                        </h2>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;