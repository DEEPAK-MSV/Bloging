import React, { useState } from 'react'
import { Link } from 'react-router-dom'


function Register() {
  const [email, Setemail] = useState('');
  const [password, SetPassword] = useState('');
  const [f_name, Setfname] = useState('');
  const [l_name, Setlname] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const userData = {
      email,
      password,
      f_name,
      l_name,
    };
  
    fetch('http://localhost:3000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    })
      .then(response => response.json())
      .then(data => {
        // Handle response data here
        if (data.success) {
          console.log('User registered successfully!');
        } else {
          // Registration failed
          console.error(data.message);
        }
      })
      .catch(error => console.error(error));
  };
  

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center items-center px-6 lg:px-8">
        <div className='bg-white shadow-lg mt-20 py-5 lg:px-0 px-3 rounded-lg w-full lg:w-2/4'>
          <h2 className="text-center text-2xl font-bold leading-9 tracking-tight">
            Sign up to create account
          </h2>
          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="#" method="POST">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6">
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    placeholder='Email'
                    value={email} onChange={(e) => Setemail(e.target.value)}
                    className="block w-full text-center rounded-md outline-none border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className='flex flex-row justify-between'>
                <div>
                  <label className="block text-sm font-medium leading-6">
                    First name
                  </label>
                  <div className='mt-2'>
                    <input type='text' id='f_name' name='f_name' required placeholder='Firstname'
                      className="block w-full text-center rounded-md outline-none border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={f_name} onChange={(e) => { Setfname(e.target.value) }}
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium leading-6">
                    Last name
                  </label>
                  <div className='mt-2'>
                    <input type='text' id='l_name' name='l_name' required placeholder='Lastname'
                      className="block w-full text-center rounded-md outline-none border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      value={l_name} onChange={(e) => { Setlname(e.target.value) }}
                    />
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6">
                    Password
                  </label>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    placeholder='Password'
                    value={password} onChange={(e) => SetPassword(e.target.value)}
                    className="block w-full rounded-md outline-none border-0 py-1.5 text-center text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <button
                  type="submit"
                  onClick={handleSubmit}
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign up
                </button>
              </div>
              <div className="text-sm space-x-2 flex felx-row items-center justify-center">
                <h1>Have an account?</h1>
                <Link to="/login">
                  <p className="font-bold text-lg text-indigo-500 hover:text-indigo-600">Login</p>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register