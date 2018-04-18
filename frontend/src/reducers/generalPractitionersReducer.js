import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function generalPractitionersReducer(state = initialState.generalPractitioners, action) {
  const newGeneralPractitioners = [];

  switch (action.type) {
    case types.FETCH_GENERAL_PRACTITIONERS_SUCCESS:
      return action.data;

    case types.FETCH_GENERAL_PRACTITIONERS_FAILURE:
      return state;

    case types.ADD_GENERAL_PRACTITIONER_SUCCESS:
      return [...state, action.data];

    case types.ADD_GENERAL_PRACTITIONER_FAILURE:
      return state;

    case types.EDIT_GENERAL_PRACTITIONER_SUCCESS:
      for (let i = 0; i < state.length; i += 1) {
        if (state[i].id === action.data.id) {
          newGeneralPractitioners[i] = Object.assign(
            {},
            action.data,
          );
        } else {
          newGeneralPractitioners[i] = Object.assign(
            {},
            state[i]
          );
        }
      }

      return newGeneralPractitioners;

    case types.EDIT_GENERAL_PRACTITIONER_FAILURE:
      return state;

    case types.DELETE_GENERAL_PRACTITIONER_SUCCESS:
      const generalPractitionersWithoutDeletedOne = [];
      for (let i = 0, j = 0; i < state.length; i++) {
        if (state[i].id === action.data) {
          continue;
        }

        generalPractitionersWithoutDeletedOne[j] = state[i];
        j++;
      }

      return generalPractitionersWithoutDeletedOne;

    case types.DELETE_GENERAL_PRACTITIONER_FAILURE:
      return state;

    default:
      return state;
  }
}
