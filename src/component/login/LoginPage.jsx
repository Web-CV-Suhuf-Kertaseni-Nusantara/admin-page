import React, { useState } from 'react';

export default function LoginPage({ onLoginClick, onCreateAccountClick }) {
  const [showPassword, setShowPassword] = useState(false);

  const handleLoginClick = () => {
    onLoginClick();
  };

  const handleCreateAccountClick = () => {
    onCreateAccountClick(); 
  };

  return (
    <section className='bg-gray-50 min-h-screen flex items-center justify-center'>
      {/* Login container */}
      <div className='bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center'>
        {/* Left side */}
        <div className='md:w-1/2 px-16'>
          <h2 className='font-bold text-3xl text-green-500'>Login</h2>
          <form action='' className='flex flex-col gap-4'>
            <input
              className='p-2 mt-8 rounded-xl border'
              type='text'
              name='email'
              placeholder='Email'
            />
            <div className='relative'>
                <input
                    className='p-2 rounded-xl border w-full'
                    type={showPassword ? 'text' : 'password'}
                    name='password'
                    placeholder='Password'
                />
                <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='16'
                    height='16'
                    fill='gray'
                    onClick={() => setShowPassword(!showPassword)}
                    className='bi bi-eye absolute top-1/2 right-3 -translate-y-1/2 cursor-pointer'
                    viewBox='0 0 16 16'
                >
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
              </svg>
            </div>
            <button className='bg-green-500 text-white px-4 py-2 rounded-xl hover:scale-110 duration-300'  onClick={handleLoginClick}>
              Login
            </button>
            <div className='mt-3 text-xs flex border-t py-4 border-gray-400 justify-between items-center'>
                <p>Don't have an account?</p>
                <button className='py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300' onClick={handleCreateAccountClick}>Register</button>
            </div>
          </form>
        </div>

        {/* Right side */}
        <div className='md:block hidden w-1/2 p-5'>
          <img
            className='rounded-2xl'
            src='src/assets/login.JPG'
            alt=''
          />
        </div>
      </div>
    </section>
  );
}
