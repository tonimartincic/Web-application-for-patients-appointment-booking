import initialState from '../initialState';
import * as types from '../../actions/actionTypes';

export default function examinationsReducer(state = initialState.examinations, action) {
  const newExaminations = [];

  switch (action.type) {
    case types.FETCH_EXAMINATIONS_SUCCESS:
      return action.data;

    case types.FETCH_EXAMINATIONS_FAILURE:
      return state;

    case types.ADD_EXAMINATION_SUCCESS:
      return [...state, action.data];

    case types.ADD_EXAMINATION_FAILURE:
      return state;

    case types.EDIT_EXAMINATION_SUCCESS:
      for (let i = 0; i < state.length; i += 1) {
        if (state[i].id === action.data.id) {
          newExaminations[i] = Object.assign(
            {},
            action.data,
          );
        } else {
          newExaminations[i] = Object.assign(
            {},
            state[i]
          );
        }
      }

      return newExaminations;

    case types.EDIT_EXAMINATION_FAILURE:
      return state;

    case types.DELETE_EXAMINATION_SUCCESS:
      const examinationsWithoutDeletedOne = [];
      for (let i = 0, j = 0; i < state.length; i++) {
        if (state[i].id === action.data) {
          continue;
        }

        examinationsWithoutDeletedOne[j] = state[i];
        j++;
      }

      return examinationsWithoutDeletedOne;

    case types.DELETE_EXAMINATION_FAILURE:
      return state;

    default:
      return state;
  }
}
