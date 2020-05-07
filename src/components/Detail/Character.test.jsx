import React from 'react';
import { shallow } from 'enzyme';
import Character from './Character';

describe('Character component', () => {
  it('renders Character', () => {
    const wrapper = shallow(<Character 
      name= 'Rick Sanchez'
      image='https://rickandmortyapi.com/api/character/avatar/1.jpeg'
      species='human'
      status='alive'
      origin='earth'/>);
    expect(wrapper).toMatchSnapshot();
  });
});
