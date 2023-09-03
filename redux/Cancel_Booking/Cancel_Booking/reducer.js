import { CmsActionTypes } from "./types";

const cancelBookingReducer = (state = {}, action) => {
  switch (action.type) {
    case CmsActionTypes.CANCEL_BOOKING_PAGE_REQUEST:
      return { loading: true };
    case CmsActionTypes.CANCEL_BOOKING_PAGE_SUCCESS:
      return { loading: false, success: true, cancel: action.payload };
    case CmsActionTypes.CANCEL_BOOKING_PAGE_ERROR:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
export default cancelBookingReducer;
