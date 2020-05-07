import React, { useState, useEffect } from 'react';
import Characters from '../../components/List/CharacterList';
import { fetchCharacters } from '../../services/apifetch';

const CharactersPage = () => {
  //initializing state 
  const [page, setPage] = useState(1);
  const [characters, setCharacters] = useState([]);
  // component needs to do something after render. 
  useEffect(() => {
    fetchCharacters(page)
      .then(fetchCharacters => setCharacters(fetchCharacters));
  }, [page]);

  const decrement = () => setPage(prevPage => prevPage - 1);
  const increment = () => setPage(prevPage => prevPage + 1);

  return (
    <>
      <button onClick={() => decrement(-1)} disabled={page === 1}>&#60;</button>
      <button onClick={() => increment(+1)} disabled={characters.length < 5}>&#62;</button>
      <Characters characters={characters}/>
    </>
  );
};

export default CharactersPage;
