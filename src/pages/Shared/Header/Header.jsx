import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='sticky top-0 z-10'>
            <div className="navbar bg-gray-300 py-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-xl ">
                        <Link to='/' > <li><a>Home</a></li></Link>
                            <li><a>Our Chef</a></li>
                            <li><a>Recipes</a></li>
                            <li><a>Blog</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl md:text-4xl lg:text-4xl">Modern Chef Recipe</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-2xl">
                        <Link to='/' > <li><a>Home</a></li></Link>
                        <li><a>Our Chef</a></li>
                        <li><a>Recipes</a></li>
                        <li><a>Blog</a></li>
                    </ul>
                </div>

                <div className="navbar-end">
                    <div className="flex items-center space-x-4">
                        <a className="btn text-sm md:text-lg lg:text-lg">Login</a>
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className=" w-12 h-12 rounded-full">
                                <img src="https://i.ibb.co/sg60Hz8/1.jpg" className="w-full h-full rounded-full" alt="User Avatar" />
                            </div>
                        </label>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Header;