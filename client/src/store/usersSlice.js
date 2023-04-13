import { createSlice } from "@reduxjs/toolkit";
import * as httpClient from "../api";
import { decarateAsyncThunk, pendingReducer, rejectedReducer } from "./helpers";

export const getAllUsers = decarateAsyncThunk(
  {
    type: 'users/getAllUsers',
    thunk: httpClient.getAllUsers
  }
);
export const deleteUser = decarateAsyncThunk(
  {
    type: 'users/deleteUser',
    thunk: httpClient.deleteUser
  }
)
  export const updateUser = decarateAsyncThunk(
   
    {
      type: 'users/updateUser',
      thunk: httpClient.updateUser
    }


)
export const getUser = decarateAsyncThunk(
  {
    type: 'users/getUser',
    thunk: httpClient.getUser
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
    currentUser:{},
  },
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(getAllUsers.pending, pendingReducer);
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      const { payload: { data: { data } } } = action;
      state.error = null;
      state.isFetching = false;
      state.users = data;
    });
    builder.addCase(getAllUsers.rejected, rejectedReducer);
    //



    builder.addCase(getUser.pending, pendingReducer);
    builder.addCase(getUser.fulfilled, (state, action) => {
      const { payload: { data: { data } } } = action;
      state.error = null;
      state.isFetching = false;
      state.currentUser = data;
    });
    builder.addCase(getUser.rejected, rejectedReducer);

    //delete user
    builder.addCase(deleteUser.pending, pendingReducer);
    builder.addCase(deleteUser.fulfilled, (state) => {
      state.error = null;
      state.isFetching = false;
    });
    builder.addCase(deleteUser.rejected, rejectedReducer);


    builder.addCase(getAllUsersMore.pending, pendingReducer);
    builder.addCase(getAllUsersMore.fulfilled, (state, action) => {
      const { payload: { data: { data } } } = action;
      state.error = null;
      state.isFetching = false;
      state.users.push(...data);
    });
    builder.addCase(getAllUsersMore.rejected, rejectedReducer);


    //for create user
    builder.addCase(createUser.pending, pendingReducer);
    builder.addCase(createUser.fulfilled, (state, action) => {
      const { payload: { data: { data } } } = action;
      state.error = null;
      state.isFetching = false;
      state.users.push(data);
    });
    builder.addCase(createUser.rejected, rejectedReducer);
    //


    builder.addCase(updateUser.pending, pendingReducer);
    builder.addCase(updateUser.fulfilled, (state,action) => {
      console.log('reducer',action);
      const { meta:{arg} } = action;
      state.error = null;
      state.isFetching = false;
      state.users=[];
      state.users.push(arg);
      
    });
    builder.addCase(updateUser.rejected, rejectedReducer);
  }
});


export default userSlice.reducer;