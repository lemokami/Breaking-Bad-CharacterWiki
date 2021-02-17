import React from 'react';
import Link from 'next/link';
export const Card = ({ character }) => {
  return (
    <div className='card  text-green-500 font-bold w-96 md:w-72 p-3 m-6'>
      <img
        src={character.img}
        alt={character.name}
        className='w-full h-96 md:h-72 top-0 bg-contain object-cover rounded object-top'
      />
      <div className='p-3 bg-gray-100 w-full h-full rounded my-3'>
        <h3>Name: {character.name}</h3>
        <p>Actor: {character.portrayed}</p>
      </div>
      <Link href={`/character/${character.char_id}`}>
        <button className='btn-filled md:btn-outline font-bold p-3 w-full rounded'>
          <a>Character Profile</a>
        </button>
      </Link>
    </div>
  );
};
