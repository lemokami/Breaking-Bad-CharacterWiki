import React from 'react';

export const Card = ({ character }) => {
  return (
    <div className='card relative text-green-500 font-bold w-72 p-3  md:transform origin-top-left md:hover:-rotate-2 md:transition-all hover:shadow-2xl cursor-pointer'>
      <div className='absolute bg-gray-700 shadow-2xl transform top-3 left-2 w-4 h-4 rounded-full border-yellow-300 border-2'></div>
      <img
        src={character.img}
        alt={character.name}
        className='w-full h-72 top-0 bg-contain object-cover rounded object-top'
      />
      <div className='p-3 bg-gray-100 w-full h-full rounded my-3'>
        <h3>Name: {character.name}</h3>
        <p>Actor: {character.portrayed}</p>
      </div>
      <button className='bg-green-500 text-white font-bold p-3 w-full rounded'>
        Character Profile
      </button>
    </div>
  );
};
