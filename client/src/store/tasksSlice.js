import {  createSlice } from "@reduxjs/toolkit";
import * as httpClient from "../api";
import { decarateAsyncThunk, pendingReducer,rejectedReducer} from "./helpers";



export const getAllTasks = decarateAsyncThunk(
  {
    type: 'tasks/getAllTasks',
    thunk: httpClient.getAllTasks
  }
);
export const getAllTasksMore = decarateAsyncThunk(
  {
    type: 'tasks/getAllTasksMore',
    thunk: httpClient.getAllTasks
  }
);

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
    error: null,
    isFetching: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllTasks.pending, pendingReducer);
    builder.addCase(getAllTasks.fulfilled, (state, action) => {
      const {payload:{data:{data}}}=action;
      state.error = null;
      state.isFetching = false;
      state.tasks = data;
    });
    builder.addCase(getAllTasksMore.rejected, rejectedReducer);
    builder.addCase(getAllTasksMore.pending, pendingReducer);
    builder.addCase(getAllTasksMore.fulfilled, (state, action) => {
      const {payload:{data:{data}}}=action;
      state.error = null;
      state.isFetching = false;
      state.tasks.push(...data);
    });
    builder.addCase(getAllTasks.rejected, rejectedReducer);
    
  } 
});


export default tasksSlice.reducer;