import axios from "axios";

import { DELETE_WALLET, GET_ERRORS, GET_WALLETS, GET_WALLETS_DETAILS } from "./Types";

// create Wallet:
export const createWallet = (newWallet, history) => async dispatch => {
  try {
    const response = await axios.post('/wallet', newWallet);
    if (response.status === 201) {
      alert("Wallet created successfully!");
      history('/dashboard');
    } 
  } catch (error) {
    dispatch({
      type: GET_ERRORS, payload: error.response.data
    });
  }
};

// Update Wallet:
export const updateWalletDetails = (userId,updateWallet , history) => async dispatch => {
  try {
    const response = await axios.put(`/wallet/${userId}`, updateWalletDetails);
    if (response.status === 201) {
      alert("Wallet created successfully!");
      history('/dashboard');
    } 
  } catch (error) {
    dispatch({
      type: GET_ERRORS, payload: error.response.data
    });
  }
};


// Get wallet Details:
export const getWallets = () => async dispatch => {
  try {
    const response = await axios.get('/wallet');
    if (response.status === 200) { // Change this line
      dispatch({ type: GET_WALLETS, payload: response.data });
    }
  } catch (error) {
    dispatch({ type: GET_ERRORS, payload: error.response.data });
  }
};


// Update Wallet Details:
export const getWalletDetails = (userId) => async dispatch => {
  try {
    const response = await axios.get(`/wallet/${userId}`);
    if (response.status === 200) { // Change this line
      dispatch({ type: GET_WALLETS_DETAILS, payload: response.data });
    }
  } catch (error) {
    dispatch({ type: GET_ERRORS, payload: error.response.data });
  }
};

// Delete Existing Wallet:
export const deleteWallets = (walletId) => async (dispatch) => {
  try {
    const response = await axios.delete(`/wallet/${walletId}`);
    if (response.status === 200) {
      alert("Wallet deleted successfully!");
      dispatch({ type: DELETE_WALLET, payload: walletId });
    }
  } catch (error) {
    dispatch({ type: GET_ERRORS, payload: error.response.data });
  }
};

        
  // For Transaction Record
// new  Transaction:

export const createTransaction = (newTransaction, history, walletId) => async dispatch => {
  try {
    const response = await axios.post(`/transaction/${walletId}`,newTransaction)
    if (response.status === 200) {
      alert("New Transaction created successfully!");
      history.push(`/transaction/${walletId}`);
    } 
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error,
    });
  }
};

// Add other actions as needed




