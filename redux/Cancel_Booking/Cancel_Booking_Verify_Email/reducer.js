import { CmsActionTypes } from "./types";

const cancelBookingVerifyEmailReducer =(state = {}, action) => {
  switch (action.type) {
    case CmsActionTypes.CANCEL_BOOKING_VERIFY_EMAIL_REQUEST:
      return { loading: true };
    case CmsActionTypes.CANCEL_BOOKING_VERIFY_EMAIL_SUCCESS:
      return { loading: false, verify_email: action.payload };
    case CmsActionTypes.CANCEL_BOOKING_VERIFY_EMAIL_ERROR:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};
export default cancelBookingVerifyEmailReducer;