import React, { useReducer, Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MenuOpen } from '@mui/icons-material';
import { MenuContext } from './contexts';
import NavMenu from './components/NavMenu';

const HomePage = lazy(() => import("./pages/HomePage"));
const UsersPage = lazy(() => import("./pages/UsersPage"));
const GroupsPage = lazy(() => import("./pages/GroupsPage"));
const TasksPage = lazy(() => import("./pages/TasksPage"));
const UserProfilePage = lazy(() => import("./pages/UserProfilePage"));


const reducer = (state, action) => {
  switch (action.type) {
    case 'MENU_OPEN': {
      return {
        ...state,
        isMenuOpen: true
      };
    }
    case 'MENU_CLOSE': {
      return {
        ...state,
        isMenuOpen: false
      }
    }
    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, { isMenuOpen: false });

  const openMenu = (event) => {
    event.stopPropagation();
    return dispatch({ type: 'MENU_OPEN' });
  }

  const closeMenu = () => {
    return dispatch({ type: 'MENU_CLOSE' });
  }
  return (
    <MenuContext.Provider value={[state, closeMenu]}>
      <BrowserRouter>
        <MenuOpen onClick={openMenu} />
        <NavMenu />
        <Suspense fallback={'loading...'}>
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/users' element={<UsersPage />} />
            <Route path='/groups' element={<GroupsPage />} />
            <Route path='/tasks' element={<TasksPage />} />
            <Route path='/users/:idUser' element={<UserProfilePage />} />
          </Routes>
        </Suspense>

      </BrowserRouter>
    </MenuContext.Provider >
  );
}
export default App;
