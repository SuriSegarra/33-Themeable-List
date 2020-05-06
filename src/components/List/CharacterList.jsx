import React from 'react';
import Character from '../Detail/Character';
import PropTypes from 'prop-types';

const Characters = ({ characters }) => {
  const charactersElement = characters.map(character => (
    <li key={character.id}>
      <Character {...character}/>
    </li>
  ));
  return (
    <ul>
      {charactersElement}
    </ul>
  );
};

Characters.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    origin: PropTypes.string.isRequired
  })).isRequired
};

export default Characters;
