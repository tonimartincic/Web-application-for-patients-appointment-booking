import initialState from '../initialState';
import * as types from '../../actions/actionTypes';

export default function administratorsReducer(state = initialState.administrators, action) {
  const newAdministrators = [];

  switch (action.type) {
    case types.FETCH_ADMINISTRATORS_SUCCESS:
      return action.data;

    case types.FETCH_ADMINISTRATORS_FAILURE:
      return state;

    case types.ADD_ADMINISTRATOR_SUCCESS:
      return [...state, action.data];

    case types.ADD_ADMINISTRATOR_FAILURE:
      return state;

    case types.EDIT_ADMINISTRATOR_SUCCESS:
      for (let i = 0; i < state.length; i += 1) {
        if (state[i].id === action.data.id) {
          newAdministrators[i] = Object.assign(
            {},
            action.data,
          );
        } else {
          newAdministrators[i] = Object.assign(
            {},
            state[i]
          );
        }
      }

      return newAdministrators;

    case types.EDIT_ADMINISTRATOR_FAILURE:
      return state;

    case types.DELETE_ADMINISTRATOR_SUCCESS:
      const administratorsWithoutDeletedOne = [];
      for (let i = 0, j = 0; i < state.length; i++) {
        if (state[i].id === action.data) {
          continue;
        }

        administratorsWithoutDeletedOne[j] = state[i];
        j++;
      }

      return administratorsWithoutDeletedOne;

    case types.DELETE_ADMINISTRATOR_FAILURE:
      return state;

    default:
      return state;
  }
}
