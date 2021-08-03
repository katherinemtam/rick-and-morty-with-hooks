import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ name, species, image }) => {
  return (
    <>
      <h2>{name}</h2>
      <img src={image} />
      <p>{species}</p>
    </>
  );
};

Character.propTypes = {
  name: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

export default Character;
