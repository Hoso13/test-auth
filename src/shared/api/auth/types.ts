export interface IAuthResponse {
  auth_token: string;
  refresh_token: string;
  continue_uri: string;
}

export interface IRegistrationResponse {
  success: boolean;
  message: string;
}

export interface IConfirmCodeResponse {
  success: boolean;
  message: string;
  result: {
    email: string;
    email_verified: boolean;
  };
}
