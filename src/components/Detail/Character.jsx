import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ image, name, species, status, origin }) => (
  <figure>
    <img src={image} alt={name}/>
    <figcaption>
      <h1>{name}</h1>
      <p>Specie:{species}</p>
      <p>Status:{status}</p>
      <p>origin:{origin}</p>
    </figcaption>
  </figure>
);

Character.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired
};

export default Character;
