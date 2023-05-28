import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FiUser } from 'react-icons/fi';
import { ImBlogger } from 'react-icons/im';
import { BiSearch } from 'react-icons/bi';

function Header() {
    const [search, setSearch] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false); // State to track user login status

    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        // Check if the authtoken exists in local storage
        const authtoken = localStorage.getItem('authtoken');
        if (authtoken) {
            setIsLoggedIn(true);
        }
    }, []);

    const handleLogout = () => {
        // Clear the authtoken from local storage and update login status
        localStorage.removeItem('authtoken');
        console.log('loggedout')
        setIsLoggedIn(false);
        navigate('/login');
    };

    const isLoginPage = location.pathname === '/login';
    const isRegisterPage = location.pathname === '/register';

    return (
        <div className="w-full px-4 py-2 bg-white fixed shadow-sm shadow-slate-600">
            <div className="w-full flex flex-row justify-between items-center">
                <div>
                    <Link to="/">
                        <div className="flex flex-row space-x-1 items-center">
                            <ImBlogger className="text-indigo-600" />
                            <h1 className="font-bold text-xl">MyBlogs</h1>
                        </div>
                    </Link>
                </div>
                <div className="w-2/6 invisible lg:visible md:visible flex flex-row justify-center border-2 rounded-lg items-center space-x-2">
                    <input
                        className="w-full flex-1 flex rounded-md px-2 py-1.5 outline-none"
                        placeholder="Search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        type="search"
                    />
                    <BiSearch className="text-xl" />
                </div>
                <div className="flex flex-row justify-between items-center space-x-6">
                    {isLoggedIn && !isLoginPage && !isRegisterPage ? (
                        <div>
                            <Link to="/profile">
                                <FiUser className="text-indigo-600 text-2xl" />
                            </Link>
                        </div>
                    ) : !isLoginPage && !isRegisterPage ? (
                        <div>
                            <Link to="/login">
                                <h1 className="font-bold text-lg space-x-1">Login</h1>
                            </Link>
                        </div>
                    ) : null}
                    {isLoggedIn ? (
                        <div className='flex flex-row space-x-2'>
                            <button onClick={handleLogout}>
                                <h1 className="font-bold text-lg space-x-1">Logout</h1>
                            </button>
                            <div className="text-black cursor-pointer px-4 py-1 rounded space-x-1 flex flex-row items-center font-semibold">
                                <Link to="/post">
                                    <h1 className="font-bold text-lg space-x-1">Post</h1>
                                </Link>
                            </div>
                        </div>
                    ) : null}
                </div>
            </div>
        </div>
    );
}

export default Header;
