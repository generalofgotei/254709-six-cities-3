const AUTH_TOKEN_KEY = 'six-cities';

export type TokenType = string;

export const getToken = (): TokenType => localStorage.getItem(AUTH_TOKEN_KEY) ?? '';
export const saveToken = (token: TokenType) => localStorage.setItem(AUTH_TOKEN_KEY, token);
export const dropToken = () => localStorage.removeItem(AUTH_TOKEN_KEY);
