import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

//list component
const ListData = ({ label, data, isLoading }) => (
  <>
    {isLoading ? (
      <>
        <div className='w-16 rounded bg-gray-300 animate-pulse h-3 block my-2'></div>
        <div className='w-full rounded bg-gray-300 animate-pulse h-3 block'></div>
      </>
    ) : (
      <>
        <h5 className='font-bold italic text-green-500'>{label}:</h5>
        <p>{data}</p>{' '}
      </>
    )}
  </>
);

//main component
export default function CharacterPage() {
  //usestate hooks
  const [character, setCharacter] = useState({
    name: '',
    nickname: '',
    portrayed: '',
    occupation: [],
    birthday: '',
  });
  const [quotes, setQuotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  useEffect(async () => {
    const { id } = router.query;
    const res_1 = await fetch(
      `https://breakingbadapi.com/api/characters/${id}`
    );
    const data = await res_1.json();

    let queryName = data[0].name.split(' ').join('+');
    const res_2 = await fetch(
      `https://breakingbadapi.com/api/quote?author=${queryName}`
    );
    const quotes = await res_2.json();

    setCharacter(data[0]);
    setQuotes(quotes.slice(0, 3));
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, [router.query]);

  return (
    <div className='card flex flex-col md:flex-row overflow-hidden p-6 w-96 md:w-auto mx-auto'>
      {loading ? (
        <div className='animate-pulse w-full md:w-64 h-96 rounded bg-gray-300'></div>
      ) : (
        <img
          src={character.img}
          alt={`${character.name}-Breaking bad`}
          className='w-full md:w-64  rounded'
        />
      )}
      <div className='mx-auto my-3 md:my-auto md:ml-6 bg-gray-100 w-full h-full p-6 rounded'>
        <ListData label='Name' data={character.name} isLoading={loading} />
        <ListData
          label='Nickname'
          data={character.nickname}
          isLoading={loading}
        />
        <ListData
          label='Portrayed by'
          data={character.portrayed}
          isLoading={loading}
        />
        {loading ? (
          <>
            <div className='w-16 rounded bg-gray-300 animate-pulse h-3 block my-2'></div>
            <div className='w-full rounded bg-gray-300 animate-pulse h-3 block'></div>
          </>
        ) : (
          <>
            <h5 className='font-bold italic text-green-500'>Occupation:</h5>
            {character.occupation.map((job, index) => (
              <p key={index}>{job}</p>
            ))}
          </>
        )}

        <ListData
          label='Birthday'
          data={character.birthday}
          isLoading={loading}
        />
        {quotes.length > 0 && !loading ? (
          <h5 className='font-bold italic text-green-500'>Quotes:</h5>
        ) : (
          <></>
        )}
        {quotes.length > 0 && !loading ? (
          quotes.map((quote) => {
            return (
              <div
                className='w-full p-3 my-3 rounded bg-green-300 text-green-500 font-bold italic'
                key={quote.quote_id}
              >
                "{quote.quote}"
              </div>
            );
          })
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}
