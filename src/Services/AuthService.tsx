import axios from 'axios';
import { handleError } from '../Helpers/ErrorHandler';
import { UserProfileToken } from '../Models/User';

const api = 'http://localhost:5162';

export const loginAPI = async (username: string, password: string) => {
  try {
    const response = await axios.post<UserProfileToken>(api + 'account/login', {
      username,
      password,
    });
    return response;
  } catch (loginError) {
    handleError(loginError);
  }
};

export const registerAPI = async (
  email: string,
  username: string,
  password: string
) => {
  try {
    const response = await axios.post<UserProfileToken>(api + 'account/login', {
      email,
      username,
      password,
    });
    return response;
  } catch (loginError) {
    handleError(loginError);
  }
};
