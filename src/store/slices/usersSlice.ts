/* eslint-disable @typescript-eslint/no-explicit-any */
import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { User } from "../../types";
import axios from "axios";

export interface InitialState {
  users: null | string | User[];
  loading: "idle" | "loading";
  error: unknown | null;
}

const internalInitialState: InitialState = {
  users: null,
  loading: "idle",
  error: null,
};

export const fetchAllUsers = createAsyncThunk(
  "users/fetchAll",
  async (_, thunkAPI) => {
    try {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      return res.data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue({ error: error.response.data });
    }
  }
);

export const usersSlice = createSlice({
  name: "users",
  initialState: internalInitialState,
  reducers: {
    setUser: (state, action: PayloadAction<string>) => {
      state.users = action.payload;
    },
  },
  extraReducers: (builder) => {
    // fetch all users
    builder.addCase(fetchAllUsers.pending, (state) => {
      state.loading = "loading";
    });
    builder.addCase(fetchAllUsers.fulfilled, (state, action) => {
      state.loading = "idle";
      state.error = null;
      state.users = action.payload;
    });
    builder.addCase(fetchAllUsers.rejected, (state, action) => {
      state.error = action.payload;
    });
  },
});

export const { setUser } = usersSlice.actions;
