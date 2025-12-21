import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { User } from "../services/types";

// Define a type for the slice state
type AuthState = {
  user: User | null;
};

export default createSlice({
  name: "auth",
  initialState: {
    user: null,
  } as AuthState,
  reducers: {
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
});
