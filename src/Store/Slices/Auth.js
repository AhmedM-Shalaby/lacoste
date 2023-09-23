const { createSlice } = require("@reduxjs/toolkit");
let user = {};
if (localStorage.getItem("userData") !== null) {
  user = JSON.parse(localStorage.getItem("userData"));
} else {
  user = null;
}

const initialState = {
  isAuth: user ? true : false,
  user: JSON.parse(localStorage.getItem("userData")) || null,
  role: user ? user.role : false,
};

const AuthSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuth = true;
      state.user = action.payload;
      state.role = action.payload.role;
      localStorage.setItem("userData", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.isAuth = false;
      state.user = null;
      state.role = null;
      localStorage.removeItem("userData");
    },
  },
});

export const { login, logout } = AuthSlice.actions;
export const AuthReducers = AuthSlice.reducer;
