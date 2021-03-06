import React from 'react';
import Head from 'next/head';
import { Card } from '../components/Card';

export default function Home({ characters }) {
  return (
    <>
      <Head>
        <meta
          name='description'
          content='A list of the characters that acted in Breaking Bad. Uses Breaking Bad API'
        />
        <title>Breaking Bad Character List</title>
      </Head>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-items-center'>
        {characters.map((character) => (
          <Card character={character} key={character.char_id} />
        ))}
      </div>
    </>
  );
}

export async function getStaticProps(context) {
  const res = await fetch('https://breakingbadapi.com/api/characters?limit=28');
  const data = await res.json();
  return {
    props: {
      characters: data,
    },
  };
}
