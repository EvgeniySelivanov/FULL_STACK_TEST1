import {  createSlice } from "@reduxjs/toolkit";
import * as httpClient from "../api";
import { decarateAsyncThunk, pendingReducer,rejectedReducer} from "./helpers";



export const getAllGroups = decarateAsyncThunk(
  {
    type: 'groups/getAllGroups',
    thunk: httpClient.getAllGroups
  }
);

export const getAllGroupsMore = decarateAsyncThunk(
  {
    type: 'groups/getAllGroupsMore',
    thunk: httpClient.getAllGroups
  }
);
const groupSlice = createSlice({
  name: 'groups',
  initialState: {
    groups: [],
    error: null,
    isFetching: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllGroups.pending, pendingReducer);
    builder.addCase(getAllGroups.fulfilled, (state, action) => {
      const {payload:{data:{data}}}=action;
      state.error = null;
      state.isFetching = false;
      state.groups = data;
    });
    builder.addCase(getAllGroups.rejected, rejectedReducer);
   

    builder.addCase(getAllGroupsMore.pending, pendingReducer);
    builder.addCase(getAllGroupsMore.fulfilled, (state, action) => {
      const {payload:{data:{data}}}=action;
      state.error = null;
      state.isFetching = false;
      state.groups.push(...data);
    });
    builder.addCase(getAllGroupsMore.rejected, rejectedReducer);
  }
});


export default groupSlice.reducer;