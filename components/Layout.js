import React from 'react';
import Link from 'next/link';
export const Layout = ({ children }) => {
  return (
    <div className='bg-gradient-to-br from-green-800 to-green-500 min-h-screen'>
      <nav className='flex flex-col md:flex-row md:justify-between py-6 container mx-auto items-center'>
        <Link href='/'>
          <a>
            <h1 className='font-bold text-3xl text-gray-50'>
              Breaking Bad Charater List
            </h1>
          </a>
        </Link>
        <a
          href='https://github.com/lemokami/Breaking-Bad-CharacterWiki'
          className='mt-4 md:my-0 text-gray-50 font-medium lg:hover:underline'
        >
          {' '}
          Github
        </a>
      </nav>
      <div className='container mx-auto'>{children}</div>
      <footer className='text-gray-200  py-4 mx-auto text-center'>
        &copy;lemokami | Made with ❤ by lemokami
      </footer>
    </div>
  );
};
