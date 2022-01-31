import {
  createSlice,
  //   createSelector,
  createAsyncThunk,
} from "@reduxjs/toolkit";
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
  },
});
export const fetchUsers = createAsyncThunk("users/fetch", async () => {
  try {
    const response = await fetch("http://localhost:9000/users/");
    const users = await response.json();
    return users;
  } catch (err) {
    console.log(err);
  }
});
export const { login, logout, loadUsers, signup } = userSlice.actions;
export default userSlice.reducer;
