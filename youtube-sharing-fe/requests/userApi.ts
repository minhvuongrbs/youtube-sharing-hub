import axios from 'axios';
import Router from 'next/router';
import { isBrowser } from '../utils/isBrowser';

export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    const res = await axios.post(`/api/auth/login`, {
      email,
      password,
    });
    if (isBrowser()) {
      localStorage.setItem('user', JSON.stringify(res.data));
      Router.replace('/');
    }
  } catch (error) {
    console.log('login err', error);
  }
};

export const register = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  try {
    const res = await axios.post(`/api/auth/signup`, {
      email,
      password,
    });
    login({ email, password });
  } catch (error) {
    console.log('login err', error);
  }
};

export const getCurrentUser = () => {
  return isBrowser()
    ? JSON.parse(localStorage.getItem('user') || '{}')?.data
    : null;
};

export const isLoggedIn = () => {
  return !!getCurrentUser();
};

export const logout = () => {
  isBrowser() ? localStorage.removeItem('user') : null;
};
