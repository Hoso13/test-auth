import { createSlice } from '@reduxjs/toolkit';
import { IUserState } from './types';

import { confirmation, login, registration } from './userAuthActions';

const initialState: IUserState = {
  email: '',
  isAuth: false,
  error: null,
  success: null,
  isLoading: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,

  reducers: {
    setSuccess: (state, action) => {
      state.success = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setIsAuth: (state, action) => {
      state.isAuth = action.payload;
    },
    setUser: (state, action) => {
      state.email = action.payload;
    },
    logOut: (state) => {
      state.isAuth = false;
      localStorage.removeItem('isAuth');
      localStorage.removeItem('token');

      state.email = '';
      localStorage.removeItem('email');
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.success = {
          success: true,
          message: 'Login successful',
        };
        state.isAuth = true;
        state.email = localStorage.getItem('email') as string;
        localStorage.setItem('isAuth', 'true');
        localStorage.setItem('token', action.payload.auth_token);
      })
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;

        state.error = action.payload ?? null;
      })
      .addCase(registration.fulfilled, (state, action) => {
        state.isLoading = false;
        state.success = action.payload;
      })
      .addCase(registration.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(registration.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(confirmation.fulfilled, (state, action) => {
        state.isLoading = false;
        state.success = action.payload;
      })
      .addCase(confirmation.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(confirmation.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setError, setSuccess, setIsAuth, setUser, logOut } = userSlice.actions;

export default userSlice.reducer;
