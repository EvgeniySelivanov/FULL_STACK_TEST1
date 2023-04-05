import {  createSlice } from "@reduxjs/toolkit";
import * as httpClient from "../api";
import { decarateAsyncThunk, pendingReducer,rejectedReducer} from "./helpers";



export const getAllUsers = decarateAsyncThunk(
  {
    type: 'users/getAllUsers',
    thunk: httpClient.getAllUsers
  }
);

export const getAllUsersMore = decarateAsyncThunk(
  {
    type: 'users/getAllUsersMore',
    thunk: httpClient.getAllUsers
  }
);

export const createUser = decarateAsyncThunk(
  {
    type: 'users/createUser',
    thunk: httpClient.postUser
  }
);


const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    error: null,
    isFetching: false,
  },
  reducers: {
    // loadUsers(state, action) {
    //   state.users = action.payload
    // },
  },
  extraReducers: (builder) => {
    builder.addCase(getAllUsers.pending, pendingReducer);
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      const {payload:{data:{data}}}=action;
      state.error = null;
      state.isFetching = false;
      state.users = data;
    });
    builder.addCase(getAllUsers.rejected, rejectedReducer);


    //for create user
    builder.addCase(createUser.pending, pendingReducer);
    builder.addCase(createUser.fulfilled, (state, action) => {
      const {payload:{data:{data}}}=action;
      state.error = null;
      state.isFetching = false;
      state.users.push(data);
    });
    builder.addCase(createUser.rejected, rejectedReducer);
  }
});
// const { loadUsers } = userSlice.actions;

export default userSlice.reducer;