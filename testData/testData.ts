require('dotenv').config();

export const CorrectUser = {
  login: process.env.USER_LOGIN_CORRECT || '',
  password: process.env.USER_PASSWORD_CORRECT || ''
};

export const LockedUser = {
  login: process.env.USER_LOGIN_LOCKED || '',
  password: process.env.USER_PASSWORD_CORRECT || ''
};

export const ProblemUser = {
  login: process.env.USER_LOGIN_PROBLEM || '',
  password: process.env.USER_PASSWORD_CORRECT || ''
};

export const PerformanceUser = {
  login: process.env.USER_LOGIN_PERFORMANCE || '',
  password: process.env.USER_PASSWORD_CORRECT || ''
};

export const ErrorUser = {
  login: process.env.USER_LOGIN_ERROR || '',
  password: process.env.USER_PASSWORD_CORRECT || ''
};

export const VisualUser = {
  login: process.env.USER_LOGIN_VISUAL || '',
  password: process.env.USER_PASSWORD_CORRECT || ''
};