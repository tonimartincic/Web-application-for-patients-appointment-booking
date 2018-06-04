import axios from 'axios';
import * as types from '../../actions/actionTypes';

export default async function fetchDepartments() {
  try {
    const response = await axios.get('/api/departments');

    return {
      type: types.FETCH_DEPARTMENTS_SUCCESS,
      data: response.data,
    };
  } catch (err) {
    return {
      type: types.FETCH_DEPARTMENTS_FAILURE,
      data: err,
    };
  }
}

export async function addDepartment(department) {
  try {
    const response = await axios.post('/api/departments', department);

    return {
      type: types.ADD_DEPARTMENT_SUCCESS,
      data: response.data,
    };
  } catch (err) {
    return {
      type: types.ADD_DEPARTMENT_FAILURE,
      data: err,
    };
  }
}

export async function editDepartment(department) {
  try {
    const response = await axios.put('/api/departments', department);

    return {
      type: types.EDIT_DEPARTMENT_SUCCESS,
      data: response.data,
    };
  } catch (err) {
    return {
      type: types.EDIT_DEPARTMENT_FAILURE,
      data: err,
    };
  }
}

export async function deleteDepartment(id) {
  try {
    await axios.delete('/api/departments/' + id);

    return {
      type: types.DELETE_DEPARTMENT_SUCCESS,
      data: id,
    };
  } catch (err) {
    return {
      type: types.DELETE_DEPARTMENT_FAILURE,
      data: err,
    };
  }
}
