import React from 'react';

export const Layout = ({ children }) => {
  return (
    <div className='bg-green-600 min-h-screen'>
      <nav className='flex justify-around md:justify-between py-6 container mx-auto items-center'>
        <h1 className='font-bold text-3xl text-gray-50'>
          Breaking Bad Charater List
        </h1>
        <ul className='hidden md:flex items-center text-gray-50 font-medium '>
          <li>Github</li>
        </ul>
      </nav>
      <div className='container mx-auto'>{children}</div>
      <footer className='text-gray-200  py-4 mx-auto text-center'>
        &copy;lemokami | Made with ❤ by lemokami
      </footer>
    </div>
  );
};
