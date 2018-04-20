import axios from 'axios';
import * as types from '../actions/actionTypes';

export default async function fetchMedicalSpecialists() {
  try {
    const response = await axios.get('/api/medical-specialists');

    return {
      type: types.FETCH_MEDICAL_SPECIALISTS_SUCCESS,
      data: response.data,
    };
  } catch (err) {
    return {
      type: types.FETCH_MEDICAL_SPECIALISTS_FAILURE,
      data: err,
    };
  }
}

export async function addMedicalSpecialist(medicalSpecialist) {
  try {
    const response = await axios.post('/api/medical-specialists', medicalSpecialist);

    return {
      type: types.ADD_MEDICAL_SPECIALIST_SUCCESS,
      data: response.data,
    };
  } catch (err) {
    return {
      type: types.ADD_MEDICAL_SPECIALIST_FAILURE,
      data: err,
    };
  }
}

export async function editMedicalSpecialist(medicalSpecialist) {
  try {
    const response = await axios.put('/api/medical-specialists', medicalSpecialist);

    return {
      type: types.EDIT_MEDICAL_SPECIALIST_SUCCESS,
      data: response.data,
    };
  } catch (err) {
    return {
      type: types.EDIT_MEDICAL_SPECIALIST_FAILURE,
      data: err,
    };
  }
}

export async function deleteMedicalSpecialist(id) {
  try {
    await axios.delete('/api/medical-specialists/' + id);

    return {
      type: types.DELETE_MEDICAL_SPECIALIST_SUCCESS,
      data: id,
    };
  } catch (err) {
    return {
      type: types.DELETE_MEDICAL_SPECIALIST_FAILURE,
      data: err,
    };
  }
}
