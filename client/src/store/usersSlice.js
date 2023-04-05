import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as httpClient from "../api";

export const getAllUsers = createAsyncThunk(
  'users/getAllUsers',
  async (params = {}, thunkAPI) => {
    try {
      //const { dispatch } = thunkAPI;
      const { data: { data } } = await httpClient.getAllUsers(params);
      console.log(data);
      return data;
      // dispatch(loadUsers(data.results));
    } catch (error) {
      const { rejectWithValue } = thunkAPI;
      return rejectWithValue(error);
    }
  });

export const createUser = createAsyncThunk('users/createUser', async (values, { rejectWithValue }) => {
  try {
    const { data: { data } } = await httpClient.postUser(values)
    return data;
  } catch (error) {
    return rejectWithValue(error);
  }
});


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
    builder.addCase(getAllUsers.pending, (state, action) => {
      state.isFetching = true;
      state.error=null;

    });
    builder.addCase(getAllUsers.fulfilled, (state, action) => {
      state.error=null;
      state.isFetching = false;
      state.users = action.payload;
    });
    builder.addCase(getAllUsers.rejected, (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    });


    //for create user
    builder.addCase(createUser.pending, (state, action) => {
      state.error=null;
      state.isFetching = true;
    });
    builder.addCase(createUser.fulfilled, (state, action) => {
      state.error=null;
      state.isFetching = false;
      state.users.push(action.payload);
    });
    builder.addCase(createUser.rejected, (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    })
  }
});
// const { loadUsers } = userSlice.actions;

export default userSlice.reducer;