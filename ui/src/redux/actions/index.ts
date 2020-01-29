import { ActionCreator, Dispatch, AnyAction } from 'redux';
import { ThunkAction } from 'redux-thunk';
import axios from 'axios';
import * as constants from '../constants';
import { Hawk, StoreState } from '../../types';

const proxyUrl = 'http://localhost:5280';

export interface GetAllHawksAction {
  type: constants.GET_ALL_HAWKS;
  hawks: Hawk[];
}

export const getAllHawks: any = () => {
  return async (dispatch: Dispatch) => {
    try {
      const response: any = await axios.get(proxyUrl);
      dispatch({
        hawks: response.data.hawks,
        type: constants.GET_ALL_HAWKS
      });
    } catch (err) {
      console.log(err);
    }
  };
};

export interface AddHawkAction {
  type: constants.ADD_HAWK;
  hawk: Hawk;
}

export const addHawk: any = (newHawk: Hawk) => {
  return async (dispatch: Dispatch) => {
    try {
      const response: any = await axios.post(proxyUrl, newHawk);
      dispatch(getAllHawks());
    } catch (err) {
      console.log(err);
    }
  };
};
