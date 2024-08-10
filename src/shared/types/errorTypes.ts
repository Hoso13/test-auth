export interface RejectedDataType {
  readonly messageError: ErrorType;
  readonly status?: number;
}

export interface ErrorType {
  success: boolean;
  message: string;
}
