import axios from 'axios';
import * as types from '../../actions/actionTypes';

export default async function fetchExaminations() {
  try {
    const user = JSON.parse(localStorage.getItem('user'));

    const userId = user.id;
    const userType = user.type;

    const response = await axios.get(`/api/examinations/${userId}/${userType}`);

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

export async function addExamination(examination) {
  try {
    const response = await axios.post('/api/examinations', examination);

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

export async function editExamination(examination) {
  try {
    const response = await axios.put('/api/examinations', examination);

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
