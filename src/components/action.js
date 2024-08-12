export const SET_NAME = 'SET_NAME';
export const SET_EMAIL = 'SET_EMAIL';

// Action Creators
export const setName = (name) => ({
  type: SET_NAME,
  payload: name,
});

export const setEmail = (email) => ({
  type: SET_EMAIL,
  payload: email,
});
