import { IConfirmCodeResponse } from '@/shared/api/auth/types';
import { RejectedDataType } from '@/shared/types/errorTypes';

export interface IUserState {
  email: string;
  isAuth: boolean;

  error?: RejectedDataType | null;
  success?: { success: boolean; message: string } | IConfirmCodeResponse | null;
  isLoading: boolean;
}
