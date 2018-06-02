import initialState from '../initialState';
import * as types from '../../actions/actionTypes';

export default function hospitalsReducer(state = initialState.hospitals, action) {
  const newHospitals = [];

  switch (action.type) {
    case types.FETCH_HOSPITALS_SUCCESS:
      return action.data;

    case types.FETCH_HOSPITALS_FAILURE:
      return state;

    case types.ADD_HOSPITAL_SUCCESS:
      return [...state, action.data];

    case types.ADD_HOSPITAL_FAILURE:
      return state;

    case types.EDIT_HOSPITAL_SUCCESS:
      for (let i = 0; i < state.length; i += 1) {
        if (state[i].id === action.data.id) {
          newHospitals[i] = Object.assign(
            {},
            action.data,
          );
        } else {
          newHospitals[i] = Object.assign(
            {},
            state[i]
          );
        }
      }

      return newHospitals;

    case types.EDIT_HOSPITAL_FAILURE:
      return state;

    case types.DELETE_HOSPITAL_SUCCESS:
      const hospitalsWithoutDeletedOne = [];
      for (let i = 0, j = 0; i < state.length; i++) {
        if (state[i].id === action.data) {
          continue;
        }

        hospitalsWithoutDeletedOne[j] = state[i];
        j++;
      }

      return hospitalsWithoutDeletedOne;

    case types.DELETE_HOSPITAL_FAILURE:
      return state;

    default:
      return state;
  }
}
