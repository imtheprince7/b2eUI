import { DELETE_WALLET, GET_WALLETS,GET_WALLETS_DETAILS } from "../actions/Types";

const initialState = {
  wallets: [],
  wallet:''
};
const walletReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_WALLETS:
      return { ...state, wallets: action.payload }; 
    
    case GET_WALLETS_DETAILS:
      return { ...state, wallet: action.payload }; 

    case DELETE_WALLET:
      return {
        ...state,
        wallets: state.wallets.filter(wallet => wallet.id !== action.payload),
      };

    default:
      return state;
  }
};

export default walletReducer;


