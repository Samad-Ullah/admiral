import { CmsActionTypes } from "./types";

const refundRequestReducer = (state = {}, action) => {
  switch (action.type) {
    case CmsActionTypes.REFUND_REQUEST_LOADING:
      return { loading: true };
    case CmsActionTypes.REFUND_REQUEST_SUCCESS:
      return { loading: false, refund_request_success: action.payload };
    case CmsActionTypes.REFUND_REQUEST_ERROR:
      return { loading: false, error: action.payload };
      case CmsActionTypes.REFUND_REQUEST_CONFIRM_LOADING:
        return { confirm_loading: true };
      case CmsActionTypes.REFUND_REQUEST_CONFIRM_SUCCESS:
        return { confirm_loading: false, refund_confirm_success: action.payload };
      case CmsActionTypes.REFUND_REQUEST_CONFIRM_ERROR:
        return { confirm_loading: false, confirm_error: action.payload };
    default:
      return state;
  }
};
export default refundRequestReducer;
