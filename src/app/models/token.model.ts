export interface IToken {
  accessToken: string;
  expiresIn?: number;
  refreshToken: string;
  idToken: string;
  tokenType?: string;
}

export class Token implements IToken {
  accessToken: string = '';
  expiresIn?: number;
  refreshToken: string = '';
  idToken: string = '';
  tokenType?: string;

  constructor(res?: any) {
    if (res) {
      Object.assign(this, res);
    }
  }
}
