import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function referralsReducer(state = initialState.referrals, action) {
  const newReferrals = [];

  switch (action.type) {
    case types.FETCH_REFERRALS_SUCCESS:
      return action.data;

    case types.FETCH_REFERRALS_FAILURE:
      return state;

    case types.ADD_REFERRAL_SUCCESS:
      return [...state, action.data];

    case types.ADD_REFERRAL_FAILURE:
      return state;

    case types.EDIT_REFERRAL_SUCCESS:
      for (let i = 0; i < state.length; i += 1) {
        if (state[i].id === action.data.id) {
          newReferrals[i] = Object.assign(
            {},
            action.data,
          );
        } else {
          newReferrals[i] = Object.assign(
            {},
            state[i]
          );
        }
      }

      return newReferrals;

    case types.EDIT_REFERRAL_FAILURE:
      return state;

    case types.DELETE_REFERRAL_SUCCESS:
      const referralsWithoutDeletedOne = [];
      for (let i = 0, j = 0; i < state.length; i++) {
        if (state[i].id === action.data) {
          continue;
        }

        referralsWithoutDeletedOne[j] = state[i];
        j++;
      }

      return referralsWithoutDeletedOne;

    case types.DELETE_REFERRAL_FAILURE:
      return state;

    default:
      return state;
  }
}
