import axios from 'axios';
import * as types from '../../actions/actionTypes';

export default async function fetchReferrals() {
  try {
    const user = JSON.parse(localStorage.getItem('user'));

    const userId = user.id;
    const userType = user.type;

    const response = await axios.get(`/api/referrals/${userId}/${userType}`);

    return {
      type: types.FETCH_REFERRALS_SUCCESS,
      data: response.data,
    };
  } catch (err) {
    return {
      type: types.FETCH_REFERRALS_FAILURE,
      data: err,
    };
  }
}

export async function addReferral(referral) {
  try {
    const response = await axios.post('/api/referrals', referral);

    return {
      type: types.ADD_REFERRAL_SUCCESS,
      data: response.data,
    };
  } catch (err) {
    return {
      type: types.ADD_REFERRAL_FAILURE,
      data: err,
    };
  }
}

export async function editReferral(referral) {
  try {
    const response = await axios.put('/api/referrals', referral);

    return {
      type: types.EDIT_REFERRAL_SUCCESS,
      data: response.data,
    };
  } catch (err) {
    return {
      type: types.EDIT_REFERRAL_FAILURE,
      data: err,
    };
  }
}

export async function deleteReferral(id) {
  try {
    await axios.delete('/api/referrals/' + id);

    return {
      type: types.DELETE_REFERRAL_SUCCESS,
      data: id,
    };
  } catch (err) {
    return {
      type: types.DELETE_REFERRAL_FAILURE,
      data: err,
    };
  }
}
