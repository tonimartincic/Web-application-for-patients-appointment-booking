import axios from 'axios';
import * as types from '../actions/actionTypes';

export default async function fetchAdministrators() {
  try {
    const response = await axios.get('/api/administrators');

    return {
      type: types.FETCH_ADMINISTRATORS_SUCCESS,
      data: response.data,
    };
  } catch (err) {
    return {
      type: types.FETCH_ADMINISTRATORS_FAILURE,
      data: err,
    };
  }
}

export async function addNewAnnouncement(administrator) {
  try {
    const response = await axios.post('/api/administrators', administrator);

    return {
      type: types.ADD_ADMINISTRATOR_SUCCESS,
      data: response.data,
    };
  } catch (err) {
    return {
      type: types.ADD_ADMINISTRATOR_FAILURE,
      data: err,
    };
  }
}

export async function editAnnouncement(administrator) {
  try {
    const response = await axios.put('/api/administrators', administrator);

    return {
      type: types.EDIT_ADMINISTRATOR_SUCCESS,
      data: response.data,
    };
  } catch (err) {
    return {
      type: types.EDIT_ADMINISTRATOR_FAILURE,
      data: err,
    };
  }
}

export async function deleteAdministrator(id) {
  try {
    await axios.delete('/api/administrators/' + id);

    return {
      type: types.DELETE_ADMINISTRATOR_SUCCESS,
      data: id,
    };
  } catch (err) {
    return {
      type: types.DELETE_ADMINISTRATOR_FAILURE,
      data: err,
    };
  }
}
