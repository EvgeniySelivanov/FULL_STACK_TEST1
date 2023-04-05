import React, { useContext, useRef, useEffect } from 'react';
import cx from 'classnames';
import { NavLink } from 'react-router-dom';
import { DisabledByDefault } from '@mui/icons-material';
import styles from './NavMenu.module.scss';
import { MenuContext } from '../../contexts';
const NavMenu = () => {
  const [state, closeMenu] = useContext(MenuContext);
  const classNames = cx(styles.container,
    {
      [styles.open]: state.isMenuOpen === true,
    }

  );
  const navMenuRef = useRef(null);
  useEffect(() => {
    const handlerClick = ({ target }) => {

      if (navMenuRef.current.contains(target) === false && state.isMenuOpen) {
        closeMenu();
      }
    };
    window.addEventListener("click", handlerClick);
    return () => window.removeEventListener("click", handlerClick);
    // eslint-disable-next-line
  }, [state.isMenuOpen]);
  const keyCloseMenu = (event) => {
    console.log(event.keyCode);
    closeMenu();
  }
  return (
    <nav className={classNames} ref={navMenuRef}>
      <DisabledByDefault className={styles.closeBtn} onClick={closeMenu} tabIndex='0' onKeyDown={keyCloseMenu} />

      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/users'>Users</NavLink>
        </li>
        <li>
          <NavLink to='/groups'>Groups</NavLink>
        </li>
        <li>
          <NavLink to='/tasks'>Tasks</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavMenu;
