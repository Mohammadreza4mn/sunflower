interface ILogin {
  userName: string;
  passWord: string;
}

interface IRefreshToken {
  userName: string;
  refreshToken: string;
}

export type { ILogin, IRefreshToken };
