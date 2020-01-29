import { Reducer } from 'redux';
import * as constants from '../constants';
import { StoreState } from '../../types';

const initialHawkState: StoreState = {
  hawks: []
};

export const hawkReducer: Reducer = (state = initialHawkState, action) => {
  switch (action.type) {
    case constants.GET_ALL_HAWKS: {
      return {
        ...state,
        hawks: action.hawks
      };
    }
    default: {
      return state;
    }
  }
};
