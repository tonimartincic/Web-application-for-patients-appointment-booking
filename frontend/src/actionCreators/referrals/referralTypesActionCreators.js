import axios from 'axios';
import * as types from '../../actions/actionTypes';

export default async function fetchReferralTypes() {
  try {
    const response = await axios.get('/api/referrals/types');

    return {
      type: types.FETCH_REFERRAL_TYPES_SUCCESS,
      data: response.data,
    };
  } catch (err) {
    return {
      type: types.FETCH_REFERRAL_TYPES_FAILURE,
      data: err,
    };
  }
}
