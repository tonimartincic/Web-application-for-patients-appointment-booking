import initialState from '../initialState';
import * as types from '../../actions/actionTypes';

export default function departmentTypesReducer(state = initialState.departmentTypes, action) {
  switch (action.type) {
    case types.FETCH_DEPARTMENT_TYPES_SUCCESS:
      return action.data;

    case types.FETCH_DEPARTMENT_TYPES_FAILURE:
      return state;

    default:
      return state;
  }
}
