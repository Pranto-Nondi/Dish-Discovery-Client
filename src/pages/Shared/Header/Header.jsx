import React from 'react';
import { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AuthContext } from '../../../Provider/AuthProvider';
import { FaUserCircle } from 'react-icons/fa';

const Header = () => {
    const { user, loggedOut, loading } = useContext(AuthContext) || {}

    const activeStyle = { color: 'blue' };
    const location = useLocation()
    console.log(loading)
    console.log(user)
    const handelLogOut = () => {
        loggedOut()
            .then(() => {
                toast.success(`LogOut SuccessFull`)
            })
            .catch(err => {
                toast.error(err.message)
            })
    }

    return (
        <div className='sticky top-0 z-10'>
            <div className="navbar bg-gray-300 py-5">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-xl ">
                            <Link to='/' > <li><p>Home</p></li></Link>
                            <li><p>Blog</p></li>
                            <Link ><li><p>Contact</p></li></Link>
                            <li><p>About US</p></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost normal-case text-xl md:text-4xl lg:text-4xl">Modern Chef Recipe</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-2xl">
                        <Link to='/' > <li><p>Home</p></li></Link>
                        <li><p>Blog</p></li>
                        <Link ><li><p>Contact</p></li></Link>
                        <li><p>About US</p></li>

                    </ul>
                </div>

                <div className="navbar-end">
                    <div className="flex items-center space-x-4">
                        {!user && !loading && <>
                            <Link to='/login'><p className="btn text-sm md:text-lg lg:text-lg">Login</p></Link>
                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div className=" w-12 h-12 rounded-full">
                                    <img src="https://i.ibb.co/3YZNVgN/pro.png" className="w-full h-full rounded-full" alt="User Avatar" />

                                </div>
                            </label>
                        </>
                        }
                        {
                            !user || loading && <>

                                <button className="btn loading">loading</button>

                            </>
                        }
                        {
                            user && !loading && <>
                                <Link to='/login'><p onClick={handelLogOut} className="btn text-sm md:text-lg lg:text-lg">LogOut</p></Link>
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div className=" w-12 h-12 rounded-full">
                                        {
                                            user.photoURL == null && <img src="https://i.ibb.co/3YZNVgN/pro.png" className="w-full h-full rounded-full" alt="User Avatar" />
                                        }
                                        {user.photoURL && <img src={user.photoURL} className="w-full h-full rounded-full" alt="User Avatar" />}


                                    </div>
                                </label>
                            </>
                        }

                    </div>
                </div>

            </div>
        </div>
    );
};

export default Header;