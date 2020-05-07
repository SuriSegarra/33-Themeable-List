import React from 'react';
import Toggle from '../Toggle/Toggle';
import { useToggle, useDarkLight } from '../Hook/Provider';

const Header = () => {
  const toggle = useToggle();
  const lightDark = useDarkLight();
    

  return (
    <header>
      <h1>Rick And Morty Characters</h1>
      <Toggle value={lightDark === 'light'} toggle={toggle} />
    </header>
  );
};

export default Header;
