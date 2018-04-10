import axios from 'axios';
import * as types from '../actions/actionTypes';

export default async function fetchPatients() {
  try {
    const response = await axios.get('/api/patients');

    return {
      type: types.FETCH_PATIENTS_SUCCESS,
      data: response.data,
    };
  } catch (err) {
    return {
      type: types.FETCH_PATIENTS_FAILURE,
      data: err,
    };
  }
}

export async function addPatient(patient) {
  try {
    const response = await axios.post('/api/patients', patient);

    return {
      type: types.ADD_PATIENT_SUCCESS,
      data: response.data,
    };
  } catch (err) {
    return {
      type: types.ADD_PATIENT_FAILURE,
      data: err,
    };
  }
}

export async function editPatient(patient) {
  try {
    const response = await axios.put('/api/patients', patient);

    return {
      type: types.EDIT_PATIENT_SUCCESS,
      data: response.data,
    };
  } catch (err) {
    return {
      type: types.EDIT_PATIENT_FAILURE,
      data: err,
    };
  }
}

export async function deletePatient(id) {
  try {
    await axios.delete('/api/patients' + id);

    return {
      type: types.DELETE_PATIENT_SUCCESS,
      data: id,
    };
  } catch (err) {
    return {
      type: types.DELETE_PATIENT_FAILURE,
      data: err,
    };
  }
}
