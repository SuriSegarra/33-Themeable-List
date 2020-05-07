export const fetchCharacters = (page) => {
  return fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
    .then(res => res.json())
    .then(res => res.results.map(character => ({
      id: character.id,
      image: character.image,
      name: character.name,
      species: character.species,
      status: character.status,
      origin: character.origin.name
    })));
};
