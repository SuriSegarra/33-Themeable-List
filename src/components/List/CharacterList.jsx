import React from 'react';
import Character from '../Detail/Character';
import PropTypes from 'prop-types';
import styleDark from './Dark.css';
import styleLight from './Light.css';
import { useDarkLight } from '../Hook/Provider';


const Characters = ({ characters }) => {
  
  
  const charactersElement = characters.map(character => (
    <li key={character.id}>
      <Character {...character}/>
    </li>
  ));
  
  const theme = useDarkLight();
  const stylesToUse = theme === 'light' ? styleLight : styleDark; 
  
  return (
    //this ul is the ul we are targeting.
    <ul className={stylesToUse.CharacterList}>
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
