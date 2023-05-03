import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Post() {

  const [heading, Setheading]=useState()
  const [discription,Setdiscription]=useState()
  const [image,Setimage]=useState()
  const [blog,Setblog]=useState()

  const handlesubmit = (event)=>{
    event.preventdefault()

  }


  return (
    <main>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight">
            Post your Blog
          </h2>
        <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6">
                Heading
              </label>
              <div className="mt-2">
                <input
                  id="heading"
                  name="heading"
                  type="text"
                  autoComplete="text"
                  required
                  placeholder='Heading' maxLength={30}
                  value={heading} onChange={(e)=>Setheading(e.target.value)}
                  className="block w-full text-left rounded-md outline-none border-0 p-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6">
                  description
                </label>
              </div>
              <div className="mt-2">
                <input
                  id="description"
                  name="description"
                  type="description"
                  autoComplete="description"
                  required
                  placeholder='description' maxLength={50}
                  value={discription} onChange={(e)=>Setdiscription(e.target.value)}
                  className="block w-full rounded-md outline-none border-0 p-1.5 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className='space-y-2'>
              <h1 className='text-sm font-semibold text-gray-500'>Upload Image for blog</h1>
                <input type='file' id='image' name='image'
                  value={image} onChange={(e)=>Setimage(e.target.value)}
                required accept='image/png , image/jpeg' />
            </div>
            <div>
                <textarea placeholder='write your blog here' 
                  value={blog} onChange={(e)=>Setblog(e.target.value)} minLength={200}
                className='block w-full rounded-md outline-none border-0 py-1.5 px-1 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 resize-none overflow-hidden h-60' />
            </div>
            <div>
              <button
                type="submit"
                onClick={handlesubmit}
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Post
              </button>
            </div>
            
          </form>
        </div>
      </div>
    </main>
  )
}

export default Post