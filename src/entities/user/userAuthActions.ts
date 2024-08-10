import { ILoginValues } from '@/pages/login/types';
import { IConfirmationValues, IRegistrationValues } from '@/pages/registration/types';
import AuthService from '@/shared/api/auth/auth';
import {
  IAuthResponse,
  IConfirmCodeResponse,
  IRegistrationResponse,
} from '@/shared/api/auth/types';

import { ErrorType, RejectedDataType } from '@/shared/types/errorTypes';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosError } from 'axios';
import { setUser } from './userSlice';

export const login = createAsyncThunk<
  IAuthResponse,
  ILoginValues,
  { rejectValue: RejectedDataType }
>('user/login', async ({ email, password }, { rejectWithValue }) => {
  try {
    const response = await AuthService.login(email, password);
    localStorage.setItem('email', email);
    setUser(email);
    return response.data;
  } catch (error) {
    const err = error as AxiosError;
    return rejectWithValue({
      messageError: err.response?.data as ErrorType,
      status: err.response?.status,
    });
  }
});

export const registration = createAsyncThunk<
  IRegistrationResponse,
  IRegistrationValues,
  { rejectValue: RejectedDataType }
>(
  'user/registration',
  async ({ email, password, confirmPassword }, { rejectWithValue }) => {
    try {
      const response = await AuthService.registration(email, password, confirmPassword);
      return response.data;
    } catch (error) {
      const err = error as AxiosError;
      return rejectWithValue({
        messageError: err.response?.data as ErrorType,
        status: err.response?.status,
      });
    }
  },
);

export const confirmation = createAsyncThunk<
  IConfirmCodeResponse,
  IConfirmationValues,
  { rejectValue: RejectedDataType }
>('user/confirmation', async ({ confirmCode }, { rejectWithValue }) => {
  try {
    const response = await AuthService.confirmCode(confirmCode);
    return response.data;
  } catch (error) {
    const err = error as AxiosError;
    return rejectWithValue({
      messageError: err.response?.data as ErrorType,
      status: err.response?.status,
    });
  }
});
