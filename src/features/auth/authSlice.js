import { createSlice } from "@reduxjs/toolkit";
import { auth } from "@/firebase";
import {
  signInWithPopup,
  GoogleAuthProvider,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const provider = new GoogleAuthProvider();

const initialState = {
  user: null,
  success: false,
  error: null,
  loading: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    setSuccess: (state, action) => {
      state.success = action.payload;
    },
  },
});

export const { login, logout, setSuccess } = authSlice.actions;

export const userSelector = (state) => state.auth.user;
export const successSelector = (state) => state.auth.success;

export const loginWithGoogle = async (dispatch) => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    let { displayName, email, photoURL, uid } = user;
    dispatch(login({ displayName, email, photoURL, uid }));
  } catch (error) {
    console.error(error);
  }
};

export const logoutUser = async (dispatch) => {
  try {
    await signOut(auth);
    dispatch(logout());
  } catch (error) {
    console.error(error);
  }
};

console.log("how many times");
export const checkUserSession = async (dispatch) => {
  console.log("is this running");
  try {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("user is", user);
        let { displayName, email, photoURL, uid } = user;
        dispatch(login({ displayName, email, photoURL, uid }));
      } else {
        console.log("user is null");
        dispatch(logout());
      }
    });
  } catch (error) {
    console.error(error);
  }
};

export default authSlice.reducer;
