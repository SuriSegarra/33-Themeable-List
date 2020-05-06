import React, { useState, useEffect } from 'react';
import Characters from '../components/List/CharacterList';
import { fetchCharacters } from '../services/apifetch';

const CharacterViewer = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetchCharacters()
      .then(characters => setCharacters(characters));
  }, []);

  return (
    <>
      <Characters characters={characters}/>
    </>
  );
};

export default CharacterViewer;
