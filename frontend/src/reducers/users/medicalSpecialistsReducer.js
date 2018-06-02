import initialState from '../initialState';
import * as types from '../../actions/actionTypes';

export default function medicalSpecialistsReducer(state = initialState.medicalSpecialists, action) {
  const newMedicalSpecialists = [];

  switch (action.type) {
    case types.FETCH_MEDICAL_SPECIALISTS_SUCCESS:
      return action.data;

    case types.FETCH_MEDICAL_SPECIALISTS_FAILURE:
      return state;

    case types.ADD_MEDICAL_SPECIALIST_SUCCESS:
      return [...state, action.data];

    case types.ADD_MEDICAL_SPECIALIST_FAILURE:
      return state;

    case types.EDIT_MEDICAL_SPECIALIST_SUCCESS:
      for (let i = 0; i < state.length; i += 1) {
        if (state[i].id === action.data.id) {
          newMedicalSpecialists[i] = Object.assign(
            {},
            action.data,
          );
        } else {
          newMedicalSpecialists[i] = Object.assign(
            {},
            state[i]
          );
        }
      }

      return newMedicalSpecialists;

    case types.EDIT_MEDICAL_SPECIALIST_FAILURE:
      return state;

    case types.DELETE_MEDICAL_SPECIALIST_SUCCESS:
      const medicalSpecialistsWithoutDeletedOne = [];
      for (let i = 0, j = 0; i < state.length; i++) {
        if (state[i].id === action.data) {
          continue;
        }

        medicalSpecialistsWithoutDeletedOne[j] = state[i];
        j++;
      }

      return medicalSpecialistsWithoutDeletedOne;

    case types.DELETE_MEDICAL_SPECIALIST_FAILURE:
      return state;

    default:
      return state;
  }
}
