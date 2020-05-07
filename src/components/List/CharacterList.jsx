import React from 'react';
import Character from '../Detail/Character';
import PropTypes from 'prop-types';
import styleDark from './Dark.css';
import styleLight from './Light.css';


const themeFactory = {
  dark: styleDark,
  light: styleLight
};

const Characters = ({ characters }) => {
  // console.log(characters);
  const charactersElement = characters.map(character => (
    <li key={character.id}>
      <Character {...character}/>
    </li>
  ));
  return (
    //this ul is the ul we are targeting.
    <ul className={themeFactory[theme].CharacterList}>
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
