import types from './actionTypes';

export function saveUser(user) {
  return {
    type: types.SAVE_USER,
    payload: user,
  };
}
