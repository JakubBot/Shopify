import types from './actionTypes';

export function saveUser(name) {
  return {
    type: types.SAVE_NAME,
    name,
  };
}
