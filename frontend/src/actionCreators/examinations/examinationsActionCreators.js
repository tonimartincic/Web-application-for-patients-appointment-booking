import axios from 'axios';
import * as types from '../../actions/actionTypes';

export default async function fetchExaminations() {
  try {
    const response = await axios.get('/api/examinations');

    return {
      type: types.FETCH_EXAMINATIONS_SUCCESS,
      data: response.data,
    };
  } catch (err) {
    return {
      type: types.FETCH_EXAMINATIONS_FAILURE,
      data: err,
    };
  }
}

export async function addNewExamination(department) {
  try {
    const response = await axios.post('/api/examinations', department);

    return {
      type: types.ADD_EXAMINATION_SUCCESS,
      data: response.data,
    };
  } catch (err) {
    return {
      type: types.ADD_EXAMINATION_FAILURE,
      data: err,
    };
  }
}

export async function editExamination(department) {
  try {
    const response = await axios.put('/api/examinations', department);

    return {
      type: types.EDIT_EXAMINATION_SUCCESS,
      data: response.data,
    };
  } catch (err) {
    return {
      type: types.EDIT_EXAMINATION_FAILURE,
      data: err,
    };
  }
}

export async function deleteExamination(id) {
  try {
    await axios.delete('/api/examinations/' + id);

    return {
      type: types.DELETE_EXAMINATION_SUCCESS,
      data: id,
    };
  } catch (err) {
    return {
      type: types.DELETE_EXAMINATION_FAILURE,
      data: err,
    };
  }
}
