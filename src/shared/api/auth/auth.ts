import { AxiosResponse } from 'axios';
import { IAuthResponse, IConfirmCodeResponse, IRegistrationResponse } from './types';
import $api from '../api';

export default class AuthService {
  static async login(
    email: string,
    password: string,
  ): Promise<AxiosResponse<IAuthResponse>> {
    return $api.post<IAuthResponse>('/auth/login/', { email, password });
  }
  static async registration(
    email: string,
    password: string,
    confirmPassword: string,
  ): Promise<AxiosResponse<IRegistrationResponse>> {
    return $api.post<IRegistrationResponse>('/registration/', {
      email,
      password,
      repeat_password: confirmPassword,
    });
  }
  static async confirmCode(
    confirmCode: string,
  ): Promise<AxiosResponse<IConfirmCodeResponse>> {
    return $api.patch<IConfirmCodeResponse>(`/registration/${confirmCode}`, {});
  }
}
