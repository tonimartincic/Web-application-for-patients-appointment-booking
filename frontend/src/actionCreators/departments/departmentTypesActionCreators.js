import axios from 'axios';
import * as types from '../../actions/actionTypes';

export default async function fetchDepartmentTypes() {
  try {
    const response = await axios.get('/api/departments/types');

    return {
      type: types.FETCH_DEPARTMENT_TYPES_SUCCESS,
      data: response.data,
    };
  } catch (err) {
    return {
      type: types.FETCH_DEPARTMENT_TYPES_FAILURE,
      data: err,
    };
  }
}
