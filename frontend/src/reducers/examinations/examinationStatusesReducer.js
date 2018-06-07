import initialState from '../initialState';
import * as types from '../../actions/actionTypes';

export default function examinationStatusesReducer(state = initialState.examinationStatuses, action) {
  switch (action.type) {
    case types.FETCH_EXAMINATION_STATUSES_SUCCESS:
      return action.data;

    case types.FETCH_EXAMINATION_STATUSES_FAILURE:
      return state;

    default:
      return state;
  }
}
