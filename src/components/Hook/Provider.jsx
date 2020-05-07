import React, { createContext, useState, useContext } from 'react';
import PropTypes from 'prop-types';


const DarkOrLight = createContext();

export const LightDarkProvider = ({ children }) => {
  const [darkLight, setDarkLight] = useState('light');

  const toggle = ({ target }) => {
    if(target.checked) setDarkLight('light');
    if(!target.checked) setDarkLight('dark');
  };

  return (
    <DarkOrLight.Provider value={{ darkLight, toggle }}>
      {children}
    </DarkOrLight.Provider>
  );
};
//specify that anything renderable 
LightDarkProvider.propTypes = {
  children: PropTypes.node
};
//useContext hook allows passing data to children elements without using redux

export const useToggle = () => {
  const { toggle } = useContext(DarkOrLight);
  return toggle;
};

export const useDarkLight = () => {
  const { darkLight } = useContext(DarkOrLight);
  return darkLight;
};
