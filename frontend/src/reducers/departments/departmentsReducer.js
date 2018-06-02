import initialState from '../initialState';
import * as types from '../../actions/actionTypes';

export default function departmentsReducer(state = initialState.departments, action) {
  const newDepartments = [];

  switch (action.type) {
    case types.FETCH_DEPARTMENTS_SUCCESS:
      return action.data;

    case types.FETCH_DEPARTMENTS_FAILURE:
      return state;

    case types.ADD_DEPARTMENT_SUCCESS:
      return [...state, action.data];

    case types.ADD_DEPARTMENT_FAILURE:
      return state;

    case types.EDIT_DEPARTMENT_SUCCESS:
      for (let i = 0; i < state.length; i += 1) {
        if (state[i].id === action.data.id) {
          newDepartments[i] = Object.assign(
            {},
            action.data,
          );
        } else {
          newDepartments[i] = Object.assign(
            {},
            state[i]
          );
        }
      }

      return newDepartments;

    case types.EDIT_DEPARTMENT_FAILURE:
      return state;

    case types.DELETE_DEPARTMENT_SUCCESS:
      const departmentsWithoutDeletedOne = [];
      for (let i = 0, j = 0; i < state.length; i++) {
        if (state[i].id === action.data) {
          continue;
        }

        departmentsWithoutDeletedOne[j] = state[i];
        j++;
      }

      return departmentsWithoutDeletedOne;

    case types.DELETE_DEPARTMENT_FAILURE:
      return state;

    default:
      return state;
  }
}
