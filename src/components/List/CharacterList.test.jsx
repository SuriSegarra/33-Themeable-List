import React from 'react';
import { shallow } from 'enzyme';
import CharactersList from './CharacterList';

const characters = [
  {
    id:'2',
    image: 'someimage.jpeg',
    name: 'Rick Sanchez',
    species:'human',
    status: 'alive',
    origin: 'earth'
  }
];

describe('Characters', () => {
  it('renders Characters List', () => {
    const wrapper = shallow(<CharactersList characters={characters}/>);
    expect(wrapper).toMatchSnapshot();
  });
});
