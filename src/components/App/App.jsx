import React from 'react';
// import CharacterViewer from '../../Containers/CharactersViewer';
import Header from '../Header/Header';
import { LightDarkProvider } from '../Hook/Provider';
import CharactersPage from '../../Containers/Paging/Paging';

export default function App() {
  return (
    <>
      <LightDarkProvider>
        <Header/>
        <CharactersPage/>
        {/* <CharacterViewer/> */}
      </LightDarkProvider>
    </>
  );
}
