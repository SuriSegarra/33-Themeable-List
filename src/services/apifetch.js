export const fetchCharacters = () => {
  return fetch('https://rickandmortyapi.com/api/character')
    .then(res => res.json())
    .then(res => ({
      image: res.image,
      name: res.name,
      species: res.species,
      status: res.status,
      origin: res.origin
    }));
};
