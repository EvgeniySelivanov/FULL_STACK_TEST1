import { combineReducers } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';
import todoReducer from './todoSlice';
import usersReducer from './usersSlice';
import groupsReducer from './groupsSlice';
import tasksReducer from './tasksSlice';



const rootReducer = combineReducers({
  counter: counterReducer,
  todo: todoReducer,
  users: usersReducer,
  groups:groupsReducer,
  tasks:tasksReducer,
});

export default rootReducer;