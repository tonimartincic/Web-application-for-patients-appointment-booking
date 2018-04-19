import * as types from '../actions/actionTypes';
import initialState from './initialState';

export default function userInfoReducer(state = initialState.showingUserData, action) {
  switch (action.type) {
    case types.SET_SHOWING_USER_DATA:
      return action.value;
    default:
      return state;
  }
}
