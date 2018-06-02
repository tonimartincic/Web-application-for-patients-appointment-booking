import axios from 'axios';
import * as types from '../../actions/actionTypes';

export default async function fetchExaminationStatuses() {
  try {
    const response = await axios.get('/api/examinations/statuses');

    return {
      type: types.FETCH_EXAMINATION_STATUSES_SUCCESS,
      data: response.data,
    };
  } catch (err) {
    return {
      type: types.FETCH_EXAMINATION_STATUSES_FAILURE,
      data: err,
    };
  }
}
