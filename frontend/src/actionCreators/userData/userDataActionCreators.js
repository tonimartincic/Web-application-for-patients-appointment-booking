import axios from 'axios';
import * as types from '../../actions/actionTypes';
import {history} from '../../ui/components/history/history';
import * as constants from '../../constants/values';

export default async function fetchUserData() {
  try {
    const user = JSON.parse(localStorage.getItem('user'));
    const response = await axios.get(`/api/users/${user.id}/${user.type}`);

    return {
      type: types.FETCH_USER_DATA_SUCCESS,
      data: response.data,
    };
  } catch (err) {
    return {
      type: types.FETCH_USER_DATA_FAILURE,
      data: err,
    };
  }
}

export async function validateUser(user) {
  try {
    const response = await axios.post('/api/login', user);
    if (response.data !== '') {
      localStorage.setItem('user', JSON.stringify(response.data));

      if(response.data.type === constants.ADMINISTRATOR) {
        history.push('/administrators');
      } else {
        history.push('/referrals');
      }
    }

    return {
      type: types.VALIDATE_USER_SUCCESS,
      data: response.data,
    };
  } catch (err) {
    return {
      type: types.VALIDATE_USER_FAILURE,
      data: err,
    };
  }
}

export async function changePassword(user) {
  try {
    const response = await axios.put('/api/users/change-password', user);
    if (response.data !== '') {
      localStorage.setItem('user', JSON.stringify(response.data));
    }

    return {
      type: types.CHANGE_PASSWORD_SUCCESS,
      data: response.data,
    };
  } catch (err) {
    return {
      type: types.CHANGE_PASSWORD_FAILURE,
      data: err,
    };
  }
}
