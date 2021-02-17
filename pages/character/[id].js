import React from 'react';

export default function CharacterPage({ character, quotes }) {
  return (
    <div className='card flex flex-col md:flex-row overflow-hidden p-6 w-96 md:w-auto mx-auto'>
      <img
        src={character.img}
        alt={`${character.name}-Breaking bad`}
        className='w-64 md:w-96 rounded'
      />
      <div className='mx-auto my-3 md:my-auto md:ml-6 bg-gray-100 w-full h-full p-6 rounded'>
        <h5 className='font-bold italic text-green-500'>Name:</h5>
        <p>{character.name}</p>
        <h5 className='font-bold italic text-green-500'>Nickname:</h5>
        <p>{character.nickname}</p>
        <h5 className='font-bold italic text-green-500'>Portrayed By:</h5>
        <p>{character.portrayed}</p>
        <h5 className='font-bold italic text-green-500'>Occupation:</h5>
        {character.occupation.map((job, index) => (
          <p key={index}>{job}</p>
        ))}
        <h5 className='font-bold italic text-green-500'>Birthday:</h5>
        <p>{character.birthday}</p>
        <h5 className='font-bold italic text-green-500'>Quotes:</h5>
        {quotes.map((quote) => {
          return (
            <div
              className='w-full p-3 my-3 rounded bg-green-300 text-green-500 font-bold italic'
              key={quote.quote_id}
            >
              "{quote.quote}"
            </div>
          );
        })}
      </div>
    </div>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;
  const res_1 = await fetch(`https://breakingbadapi.com/api/characters/${id}`);
  const data = await res_1.json();

  let queryName = data[0].name.split(' ').join('+');
  const res_2 = await fetch(
    `https://breakingbadapi.com/api/quote?author=${queryName}`
  );
  const quotes = await res_2.json();

  return {
    props: {
      character: data[0],
      quotes: quotes.slice(0, 3),
    },
  };
}
