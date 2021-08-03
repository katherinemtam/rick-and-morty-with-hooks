import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';

const CharacterList = ({ characters }) => {
  console.log('list', characters);

  return (<ul>
    {characters.map(character => (
      <li key={character.id}>
        <Character 
          name={character.name}
          image={character.image}
          species={character.species}
        />
      </li>
    ))}
  </ul>);
};


CharacterList.propTypes = {
  characters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.int,
      name: PropTypes.string,
      status: PropTypes.string,
      species: PropTypes.string,
      type: PropTypes.string,
      gender: PropTypes.string,
      origin: PropTypes.object,
      location: PropTypes.object,
      image: PropTypes.string,
      episode: PropTypes.arrayOf(
        PropTypes.string
      ),
    })
  ).isRequired,
};

export default CharacterList;
