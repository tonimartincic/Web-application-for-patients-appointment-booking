import initialState from './initialState';
import * as types from '../actions/actionTypes';

export default function patientsReducer(state = initialState.patients, action) {
  const newPatients = [];

  switch (action.type) {
    case types.FETCH_PATIENTS_SUCCESS:
      return action.data;

    case types.FETCH_PATIENTS_FAILURE:
      return state;

    case types.ADD_PATIENT_SUCCESS:
      return [...state, action.data];

    case types.ADD_PATIENT_FAILURE:
      return state;

    case types.EDIT_PATIENT_SUCCESS:
      for (let i = 0; i < state.length; i += 1) {
        if (state[i].id === action.data.id) {
          newPatients[i] = Object.assign(
            {},
            action.data,
          );
        } else {
          newPatients[i] = Object.assign(
            {},
            state[i]
          );
        }
      }

      return newPatients;

    case types.EDIT_PATIENT_FAILURE:
      return state;

    case types.DELETE_PATIENT_SUCCESS:
      const patientsWithoutDeletedOne = [];
      for (let i = 0, j = 0; i < state.length; i++) {
        if (state[i].id === action.data) {
          continue;
        }

        patientsWithoutDeletedOne[j] = state[i];
        j++;
      }

      return patientsWithoutDeletedOne;

    case types.DELETE_PATIENT_FAILURE:
      return state;

    default:
      return state;
  }
}
