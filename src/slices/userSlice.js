import {
  createSlice,
  //   createSelector,
  createAsyncThunk,
} from "@reduxjs/toolkit";
import { server } from "../utils/variables";
const initialState = {
  users: [],
  currentUserId: null,
  isAuthorized: false,
  status: "loading",
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    login(state, action) {
      const { email, password } = action.payload;

      const userWithEmail = state.users.find((user) => user.email === email);
      if (!userWithEmail || userWithEmail.password !== password) return;
      state.isAuthorized = true;
      state.currentUserId = userWithEmail._id;
    },
    logout(state, action) {
      state.isAuthorized = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.status = "idle";
      state.users = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state) => {
      state.status = "error";
    });
    builder.addCase(editProfile.fulfilled, (state, action) => {
      const { _id } = action.payload;

      state.users = state.users.map((user) =>
        user._id === _id ? action.payload : user
      );
    });
  },
});
export const fetchUsers = createAsyncThunk("users/fetch", async () => {
  try {
    const response = await fetch(`${server}/users/`);
    const users = await response.json();
    return users;
  } catch (err) {
    console.log(err);
  }
});
export const editProfile = createAsyncThunk(
  "users/edit",
  async (updatedData) => {
    console.log(updatedData);

    const { id } = updatedData;

    try {
      const response = await fetch(`${server}/users/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json;charset=utf-8",
        },
        body: JSON.stringify(updatedData),
      });
      const user = await response.json();
      return user;
    } catch (err) {
      console.log(err);
    }
  }
);
export const { login, logout, loadUsers, signup } = userSlice.actions;
export default userSlice.reducer;
