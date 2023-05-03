import React from 'react'
import { AiOutlineSend } from 'react-icons/ai'

function SinglePost() {
    return (
        <main className='flex flex-col justify-center items-center w-full h-full overflow-auto'>
            <div className='mt-16'></div>
            <div className='w-full h-full flex justify-center items-center flex-col'>
                <div>
                    <h1 className='font-bold text-lg font-serif'>The emergence and growth of blogs</h1>
                </div>
                <div>
                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/Radio._CBC_Offices_BAnQ_P48S1P23108_%28cropped%29.jpg/375px-Radio._CBC_Offices_BAnQ_P48S1P23108_%28cropped%29.jpg' />
                    <div className='flex w-full justify-end'>
                        <h1 className='text-sm text-gray-400 font-mono'>-post by Deepak</h1>
                    </div>
                </div>
                <div className='w-full md:w-4/6 lg:w-4/6 h-full px-5'>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum laboriosam quae numquam laborum perferendis maiores odit labore repudiandae debitis placeat laudantium, quibusdam a aperiam, quia nam reprehenderit, exercitationem blanditiis explicabo? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatem ab rem sequi! Optio nisi illum itaque a architecto nam quae et, amet pariatur inventore voluptatem! Pariatur voluptatibus a eligendi omnis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed voluptatibus inventore sit nostrum odit, minima placeat aliquam maiores iure laboriosam accusamus accusantium deleniti ab numquam ducimus perspiciatis cupiditate? Cupiditate, assumenda?</p>
                </div>
            </div>
        </main>
    )
}

export default SinglePost