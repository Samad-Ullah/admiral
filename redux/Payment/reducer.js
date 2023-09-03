import { PaymentActionTypes } from "./types";

const INITIAL_STATE = {
 
  loading: false,
  error: null,
  clientToken:null,
  execute_error:null,
  execute_loading:false,
  execute_success:null
 
};

const paymentReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PaymentActionTypes.INITIALIZATION_LOADING:
      return {
        ...state,
        loading: true,
        error: null,
        clientToken: null,
      };
    case PaymentActionTypes.INITIALIZATION_SUCCESS:
      return {
        ...state,
        loading: false,
        clientToken: action.payload,
      };
    case PaymentActionTypes.INITIALIZATION_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

      case PaymentActionTypes.EXECUTE_PAYMENT_LOADING:
        return {
          ...state,
          execute_loading: true,
          execute_error: null,
          execute_success: null,
        };
      case PaymentActionTypes.EXECUTE_PAYMENT_SUCCESS:
        return {
          ...state,
          execute_loading: false,
          execute_success: action.payload,
        };
      case PaymentActionTypes.EXECUTE_PAYMENT_ERROR:
        return {
          ...state,
          execute_loading: false,
          execute_error: action.payload,
        };
  

    default:
      return state;
  }
};

export default paymentReducer;
