import React, { useState, useEffect } from 'react';
import { fetchCharacters } from '../services/rickAndMortyApi';
import CharacterList from '../components/characters/CharacterList';

const RickAndMorty = () => {
  const [loading, setLoading] = useState(true);
  const [characters, setCharacters] = useState([]);

  useEffect(async () => {
    const characters = await fetchCharacters();
    console.log(characters);
    setCharacters(characters);
    setLoading(false);
  }, []);

  if(loading) return <h1>Loading...</h1>;
  return (
    <>
      <h1>hello!</h1>
      <CharacterList characters={characters}/>
    </>
  );
};

export default RickAndMorty; 



