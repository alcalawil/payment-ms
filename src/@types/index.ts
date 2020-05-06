export interface IHTTPError {
  code: number;
  message: string;
  customCode?: number;
}

export interface IPaypalCreateOrderOptions {
  amount: number;
}
