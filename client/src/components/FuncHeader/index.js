import React,{useContext} from 'react';
import { LightMode, DarkMode } from '@mui/icons-material';
import cx from 'classnames';
import {ThemeContext } from '../../contexts';
import styles from './FuncHeader.module.scss';
import CONSTANTS from '../../constants';
const{ THEMES }= CONSTANTS;

const FuncHeader = () => {

const [theme, setTheme]= useContext(ThemeContext);
const handlerTheme=()=>{
  const newTheme=theme===THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT;
  setTheme(newTheme);
}

const classNames=cx(styles.header,
  {
    [styles.light]: theme === THEMES.LIGHT,   //boolean
    [styles.dark]: theme === THEMES.DARK      //boolean
  }
  );
  
  return (
    <header className={classNames}>
 
    <span onClick={handlerTheme}>
      {theme === THEMES.LIGHT ? <DarkMode /> : <LightMode />}</span>
  </header>
  );
}

export default FuncHeader;
