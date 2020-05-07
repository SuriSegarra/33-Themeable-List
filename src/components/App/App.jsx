import React from 'react';
import CharacterViewer from '../../Containers/CharactersViewer';
import Header from '../Header/Header';
import { LightDarkProvider } from '../Hook/Provider';

export default function App() {
  return (
    <>
      <LightDarkProvider>
        <Header/>
        <CharacterViewer/>
      </LightDarkProvider>
    </>
  );
}
