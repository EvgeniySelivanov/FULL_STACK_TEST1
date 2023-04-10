import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: [
          'users/getAllUsers/fulfilled',
          'users/getAllUsersMore/fulfilled',
          'users/getUser/fulfilled',
          'users/getUpdateUser/fulfilled',
          'users/deleteUser/fulfilled',
          'users/deleteUser/rejected',
          'users/updateUser/rejected',
          'groups/getAllGroups/fulfilled',
          'groups/getAllGroupsMore/fulfilled',
          'tasks/getAllTasks/fulfilled',
          'tasks/getAllTasksMore/fulfilled'],
        // Ignore these field paths in all actions
        ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
        // Ignore these paths in the state
        ignoredPaths: ['items.dates'],
      },
    }),
});
export default store;