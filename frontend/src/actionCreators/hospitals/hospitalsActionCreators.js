import axios from 'axios';
import * as types from '../../actions/actionTypes';

export default async function fetchHospitals() {
  try {
    const response = await axios.get('/api/hospitals');

    return {
      type: types.FETCH_HOSPITALS_SUCCESS,
      data: response.data,
    };
  } catch (err) {
    return {
      type: types.FETCH_HOSPITALS_FAILURE,
      data: err,
    };
  }
}

export async function addHospital(hospital) {
  try {
    const response = await axios.post('/api/hospitals', hospital);

    return {
      type: types.ADD_HOSPITAL_SUCCESS,
      data: response.data,
    };
  } catch (err) {
    return {
      type: types.ADD_HOSPITAL_FAILURE,
      data: err,
    };
  }
}

export async function editHospital(hospital) {
  try {
    const response = await axios.put('/api/hospitals', hospital);

    return {
      type: types.EDIT_HOSPITAL_SUCCESS,
      data: response.data,
    };
  } catch (err) {
    return {
      type: types.EDIT_HOSPITAL_FAILURE,
      data: err,
    };
  }
}

export async function deleteHospital(id) {
  try {
    await axios.delete('/api/hospitals/' + id);

    return {
      type: types.DELETE_HOSPITAL_SUCCESS,
      data: id,
    };
  } catch (err) {
    return {
      type: types.DELETE_HOSPITAL_FAILURE,
      data: err,
    };
  }
}
