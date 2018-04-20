import axios from 'axios';
import * as types from '../actions/actionTypes';

export default async function fetchGeneralPractitioners() {
  try {
    const response = await axios.get('/api/general-practitioners');

    return {
      type: types.FETCH_GENERAL_PRACTITIONERS_SUCCESS,
      data: response.data,
    };
  } catch (err) {
    return {
      type: types.FETCH_GENERAL_PRACTITIONERS_FAILURE,
      data: err,
    };
  }
}

export async function addGeneralPractitioner(generalPractitioner) {
  try {
    const response = await axios.post('/api/general-practitioners', generalPractitioner);

    return {
      type: types.ADD_GENERAL_PRACTITIONER_SUCCESS,
      data: response.data,
    };
  } catch (err) {
    return {
      type: types.ADD_GENERAL_PRACTITIONER_FAILURE,
      data: err,
    };
  }
}

export async function editGeneralPractitioner(generalPractitioner) {
  try {
    const response = await axios.put('/api/general-practitioners', generalPractitioner);

    return {
      type: types.EDIT_GENERAL_PRACTITIONER_SUCCESS,
      data: response.data,
    };
  } catch (err) {
    return {
      type: types.EDIT_GENERAL_PRACTITIONER_FAILURE,
      data: err,
    };
  }
}

export async function deleteGeneralPractitioner(id) {
  try {
    await axios.delete('/api/general-practitioners/' + id);

    return {
      type: types.DELETE_GENERAL_PRACTITIONER_SUCCESS,
      data: id,
    };
  } catch (err) {
    return {
      type: types.DELETE_GENERAL_PRACTITIONER_FAILURE,
      data: err,
    };
  }
}
