import { AxiosResponse } from 'axios';
import { IAuthResponse } from './types';
import $api from '../api';

export default class AuthService {
  static async login(
    email: string,
    password: string,
  ): Promise<AxiosResponse<IAuthResponse>> {
    return $api.post<IAuthResponse>('/auth/login', { email, password });
  }
  static async registration(
    email: string,
    password: string,
    confirmPassword: string,
  ): Promise<AxiosResponse<IAuthResponse>> {
    return $api.post<IAuthResponse>('/registration', {
      email,
      password,
      confirmPassword,
    });
  }
}
