// src/redux/authOperations.js

import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  loginUser as apiLoginUser,
  logoutUser as apiLogoutUser,
  getCurrentUser,
  signupUser,
} from "../API/api";

// Rejestracja użytkownika
export const registerUser = createAsyncThunk(
  "auth/register",
  async (userData, { rejectWithValue }) => {
    try {
      const response = await signupUser(userData);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Logowanie użytkownika
export const loginUser = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await apiLoginUser(credentials);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Wylogowanie użytkownika
export const logoutUser = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await apiLogoutUser();
      return;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Pobranie aktualnego użytkownika
export const fetchCurrentUser = createAsyncThunk(
  "auth/current",
  async (_, { rejectWithValue }) => {
    try {
      const response = await getCurrentUser();
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);
