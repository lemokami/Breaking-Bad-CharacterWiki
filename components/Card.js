import React from 'react';

export const Card = ({ character }) => {
  return (
    <div className='card relative text-green-500 font-bold w-72 p-3 m-6'>
      <img
        src={character.img}
        alt={character.name}
        className='w-full h-72 top-0 bg-contain object-cover rounded object-top'
      />
      <div className='p-3 bg-gray-100 w-full h-full rounded my-3'>
        <h3>Name: {character.name}</h3>
        <p>Actor: {character.portrayed}</p>
      </div>
      <button className='btn-outline font-bold p-3 w-full rounded'>
        Character Profile
      </button>
    </div>
  );
};
