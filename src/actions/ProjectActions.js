import axios from "axios";
import { GET_ERRORS } from "./Types";

export const createWallet = (newWallet, history) => async dispatch => {
  try {
    const response = await axios.post('http://localhost:8080/wallet', newWallet);
    if (response.status === 201) {
      alert("Wallet created successfully!");
      history('/dashboard');
    } else {
      alert("Oops! Unexpected response status: " + response.status);
    }
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data
    });
  }
};
