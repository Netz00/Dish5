import * as api from '../api/index.js';

export const getMenus = () => async (dispatch) => {
  try {
    const data = await api.fetchMenus();

    console.log(data);
    dispatch({
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
