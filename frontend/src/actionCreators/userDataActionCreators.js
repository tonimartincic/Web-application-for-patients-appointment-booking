import axios from 'axios';
import * as types from '../actions/actionTypes';
import {history} from '../ui/components/history/history';

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
      history.push('/administrators');
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
