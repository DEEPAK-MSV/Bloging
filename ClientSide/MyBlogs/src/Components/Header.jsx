import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FiUser } from 'react-icons/fi'
import { TfiWrite } from 'react-icons/tfi'
import { ImBlogger } from 'react-icons/im'
import {BiSearch} from 'react-icons/bi'


function Header() {

    const [search,Setsearch]=useState()

    return (
        <div className='w-full px-4 py-2 bg-white fixed shadow-sm shadow-slate-600'>
            <div className='w-full flex flex-row justify-between items-center'>
                <div>
                    <Link to="/">
                        <div className='flex flex-row space-x-1 items-center'>
                            <ImBlogger className='text-indigo-600' />
                            <h1 className='font-bold text-xl'>MyBlogs</h1>
                        </div>
                    </Link>
                </div>
                <div className='w-2/6 invisible lg:visible md:visible flex flex-row justify-center border-2 rounded-lg items-center space-x-2'>
                    <input className='w-full flex-1 flex rounded-md px-2 py-1.5 outline-none'
                    placeholder='Search' value={search} onChange={(e)=>Setsearch(e.target.value)}
                    type='search'/>
                    <BiSearch className='text-xl'/>
                </div>
                <div className='flex flex-row justify-between items-center space-x-10'>
                    <Link to="post">
                        <div className='text-black cursor-pointer px-4 py-1 rounded space-x-1 flex flex-row items-center font-semibold'>
                            <h1 className='font-semibold text-lg space-x-1'>Post</h1>
                        </div>
                    </Link>
                    <div>
                        <Link to="Login">
                            <FiUser className='text-indigo-600 text-2xl' />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header