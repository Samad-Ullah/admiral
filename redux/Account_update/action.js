import * as api from "../../api";
import { CmsActionTypes } from "./types";

import axios from "axios";
import { URL } from "../../config/serverUrl";

export const accountDetailUpdateAction = (token, data) => async (dispatch) => {
  dispatch({ type: CmsActionTypes.UPDATE_ACCOUNT_DETAILS_LOADING });
  try {
    // const response = await api.accountDetailUpdateAPI(data);
    const config = {
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      },
    };

    await axios.post(`${URL}/website/users/update-profile`, data, config);
    dispatch({
      type: CmsActionTypes.UPDATE_ACCOUNT_DETAILS_SUCCESS,
    });
  } catch (error) {
    
    dispatch({
      type: CmsActionTypes.UPDATE_ACCOUNT_DETAILS_ERROR,
      payload: error.message,
    });
  }
};

export const accountPasswordUpdateAction = (
  token,
  id,
  currentPassword,
  newPassword
) => async (dispatch) => {
  dispatch({ type: CmsActionTypes.UPDATE_ACCOUNT_PASSWORD_LOADING });
  try {
    // const response = await api.accountDetailUpdateAPI(data);
    const config = {
      headers: {
        "content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    await axios.post(
      `${URL}/website/users/update/password`,
      { id, currentPassword, newPassword },
      config
    );
    dispatch({ type: CmsActionTypes.UPDATE_ACCOUNT_PASSWORD_SUCCESS });
  } catch (error) {
    
    dispatch({
      type: CmsActionTypes.UPDATE_ACCOUNT_PASSWORD_ERROR,
      payload: error.message,
    });
  }
};
