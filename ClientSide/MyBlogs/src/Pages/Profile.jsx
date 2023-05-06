import React from 'react'
import { BiUser } from 'react-icons/bi'
import { BsPencilSquare, BsTrash } from 'react-icons/bs'
import { FiDelete } from 'react-icons/fi'



function Profile() {
    return (
        <main className='flex flex-1 flex-col justify-center items-center w-full h-full overflow-auto'>
            <div className='mt-16'></div>
            <div className='w-full h-full px-8 flex justify-start items-start space-y-4 flex-col'>
                <div className='w-min rounded-lg h-full space-x-8 border-2 bg-white border-dashed border-indigo-600 p-10 flex justify-center items-center flex-row'>
                    <div className='bg-gray-400 rounded-full p-4'>
                        <BiUser className='text-4xl' />
                    </div>
                    <div className='flex flex-1 justify-start text-xl font-semibold items-start flex-col'>
                        <h1>Deepak</h1>
                        <h1>Deepak@gmail.com</h1>
                        <h1>Blogs-5</h1>
                    </div>
                </div>
                <div className='w-full rounded-lg h-full space-y-8 border-2 border-dashed border-indigo-600 p-10 flex justify-start items-start flex-col'>
                    <div className='w-full space-x-7 rounded-lg flex-col md:flex-row lg:flex-row flex justify-start items-start bg-white shadow-sm p-2'>
                        <div className='w-4/6'>
                            <img className='h-full w-full rounded-lg' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Radio._CBC_Offices_BAnQ_P48S1P23108_%28cropped%29.jpg/375px-Radio._CBC_Offices_BAnQ_P48S1P23108_%28cropped%29.jpg' />
                        </div>
                        <div className='flex flex-col justify-between items-start'>
                            <div className='pb-2'>
                                <h1 className='font-bold text-lg font-serif'>The emergence and growth of blogs</h1>
                                <p className='text-lg font-mono'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error natus aut repudiandae ad quam eligendi cupiditate odit ullam? Itaque dolorem harum architecto magni, minima molestias rem accusamus veniam exercitationem necessitatibus.</p>
                            </div>
                            <div className='flex justify-end space-x-6 text-2xl items-end'>
                                <button>
                                    <BsPencilSquare />
                                </button>
                                <button>
                                    <BsTrash />
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className='w-full space-x-7 rounded-lg flex-col md:flex-row lg:flex-row flex justify-start items-start bg-gray-300 p-2'>
                        <div className='w-4/6'>
                            <img className='h-full w-full rounded-lg' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Radio._CBC_Offices_BAnQ_P48S1P23108_%28cropped%29.jpg/375px-Radio._CBC_Offices_BAnQ_P48S1P23108_%28cropped%29.jpg' />
                        </div>
                        <div className='flex flex-col justify-between items-start'>
                            <div className='pb-2'>
                                <h1 className='font-bold text-lg font-serif'>The emergence and growth of blogs</h1>
                                <p className='text-lg font-mono'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error natus aut repudiandae ad quam eligendi cupiditate odit ullam? Itaque dolorem harum architecto magni, minima molestias rem accusamus veniam exercitationem necessitatibus.</p>
                            </div>
                            <div className='flex justify-end space-x-6 text-2xl items-end'>
                                <button>
                                    <BsPencilSquare />
                                </button>
                                <button>
                                    <BsTrash />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='w-full space-x-7 rounded-lg flex-col md:flex-row lg:flex-row flex justify-start items-start bg-gray-300 p-2'>
                        <div className='w-4/6'>
                            <img className='h-full w-full rounded-lg' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Radio._CBC_Offices_BAnQ_P48S1P23108_%28cropped%29.jpg/375px-Radio._CBC_Offices_BAnQ_P48S1P23108_%28cropped%29.jpg' />
                        </div>
                        <div className='flex flex-col justify-between items-start'>
                            <div className='pb-2'>
                                <h1 className='font-bold text-lg font-serif'>The emergence and growth of blogs</h1>
                                <p className='text-lg font-mono'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error natus aut repudiandae ad quam eligendi cupiditate odit ullam? Itaque dolorem harum architecto magni, minima molestias rem accusamus veniam exercitationem necessitatibus.</p>
                            </div>
                            <div className='flex justify-end space-x-6 text-2xl items-end'>
                                <button>
                                    <BsPencilSquare />
                                </button>
                                <button>
                                    <BsTrash />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='w-full space-x-7 rounded-lg flex-col md:flex-row lg:flex-row flex justify-start items-start bg-gray-300 p-2'>
                        <div className='w-4/6'>
                            <img className='h-full w-full rounded-lg' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Radio._CBC_Offices_BAnQ_P48S1P23108_%28cropped%29.jpg/375px-Radio._CBC_Offices_BAnQ_P48S1P23108_%28cropped%29.jpg' />
                        </div>
                        <div className='flex flex-col justify-between items-start'>
                            <div className='pb-2'>
                                <h1 className='font-bold text-lg font-serif'>The emergence and growth of blogs</h1>
                                <p className='text-lg font-mono'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error natus aut repudiandae ad quam eligendi cupiditate odit ullam? Itaque dolorem harum architecto magni, minima molestias rem accusamus veniam exercitationem necessitatibus.</p>
                            </div>
                            <div className='flex justify-end space-x-6 text-2xl items-end'>
                                <button>
                                    <BsPencilSquare />
                                </button>
                                <button>
                                    <BsTrash />
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className='w-full space-x-7 rounded-lg flex-col md:flex-row lg:flex-row flex justify-start items-start bg-gray-300 p-2'>
                        <div className='w-4/6'>
                            <img className='h-full w-full rounded-lg' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Radio._CBC_Offices_BAnQ_P48S1P23108_%28cropped%29.jpg/375px-Radio._CBC_Offices_BAnQ_P48S1P23108_%28cropped%29.jpg' />
                        </div>
                        <div className='flex flex-col justify-between items-start'>
                            <div className='pb-2'>
                                <h1 className='font-bold text-lg font-serif'>The emergence and growth of blogs</h1>
                                <p className='text-lg font-mono'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error natus aut repudiandae ad quam eligendi cupiditate odit ullam? Itaque dolorem harum architecto magni, minima molestias rem accusamus veniam exercitationem necessitatibus.</p>
                            </div>
                            <div className='flex justify-end space-x-6 text-2xl items-end'>
                                <button>
                                    <BsPencilSquare />
                                </button>
                                <button>
                                    <BsTrash />
                                </button>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
        </main>
    )
}

export default Profile