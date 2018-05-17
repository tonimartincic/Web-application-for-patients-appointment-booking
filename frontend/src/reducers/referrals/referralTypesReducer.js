import initialState from '../initialState';
import * as types from '../../actions/actionTypes';

export default function referralTypesReducer(state = initialState.referralTypes, action) {
  switch (action.type) {
    case types.FETCH_REFERRAL_TYPES_SUCCESS:
      return action.data;

    case types.FETCH_REFERRAL_TYPES_FAILURE:
      return state;

    default:
      return state;
  }
}
