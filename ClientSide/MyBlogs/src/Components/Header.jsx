import React from 'react'
import { Link } from 'react-router-dom'
import {FiUser} from 'react-icons/fi'
function Header() {
    return (
        <div className='w-full p-4 shadow-sm shadow-slate-800'>
            <div className='w-full flex justify-between items-center'>
                <div>
                    <Link to="/">
                    <h1 className='font-bold text-xl'>MyBlogs</h1>
                    </Link>
                </div>
                <div className='flex flex-row space-x-4'>
                    <Link to="Login">
                        <FiUser className='text-indigo-600 text-2xl'/>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default Header