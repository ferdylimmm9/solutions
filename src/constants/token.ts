export const TokenKey = "token";


// this class for handle token
export class Token {
  static setToken(token: string) {
    localStorage.setItem(TokenKey, token);
  }
  static clearToken() {
    localStorage.removeItem(TokenKey);
  }
  static getToken() {
    const token = localStorage.getItem(TokenKey);

    if (token) {
      return token;
    }

    return undefined;
  }
}
