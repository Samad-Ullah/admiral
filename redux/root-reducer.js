import { combineReducers } from "redux";
import CmsReducer from "./CMS/reducer";
import QuoteReducer from "./Bookings/Quote/reducer";
import PreBookingReducer from "./Bookings/PreBooking/reducer";
import BookingReducer from "./Bookings/Booking/reducer";
import paymentReducer from "./Payment/reducer";

// cities
import houstonLimoReducer from "./Cities/Hounston_Limo_Service/reducer";
import galvestonLimoReducer from "./Cities/Galveston_Limo_Service/reducer";
import montgomeryLimoReducer from "./Cities/Montgomery_Limo_Service/reducer";
import conroeLimoReducer from "./Cities/Conroe_Limo_Service/reducer";
import tomballLimoReducer from "./Cities/Tomball_Limo_Service/reducer";
import cypressLimoReducer from "./Cities/Cypress_Limo_Service/reducer";
import beamountLimoReducer from "./Cities/Beamount_Limo_Service/reducer";
import sugarlandLimoReducer from "./Cities/Sugarland_Limo_Service/reducer";
import richmondLimoReducer from "./Cities/Richmond_Limo_Service/reducer";
import katyLimoReducer from "./Cities/Katy_Limo_Service/reducer";

// services
import galvestonCruiseReducer from "./Services/Galveston_cruise_transportation/reducer";
import houstonToCollegeReducer from "./Services/City_To_City/Houston_to_College/reducer";
import houstonToAustinReducer from "./Services/City_To_City/Houston_to_austin/reducer";
import houstonToDallasReducer from "./Services/City_To_City/Houston_to_dallas/reducer";
import houstonToSanantonioReducer from "./Services/City_To_City/Houston_to_sanantonio/reducer";
import houstonToLakecharlesReducer from "./Services/City_To_City/Houston_to_lakecharles/reducer";
import houstonToLafayatteReducer from "./Services/City_To_City/Houston_to_lafayatte/reducer";
import BusinessConventionReducer from "./Services/Events_Transfer/Business_Convention/reducer";
import astroGameReducer from "./Services/Events_Transfer/Sports_Events/reducer";
import concertsReducer from "./Services/Events_Transfer/Concerts/reducer";
import houstonRodeoReducer from "./Services/Events_Transfer/Houston_Rodeo/reducer";
import partyTransferReducer from "./Services/Celebrations_Transfer/Party_Transfer/reducer";
import graduationTransferReducer from "./Services/Celebrations_Transfer/Graduation_Transfer/reducer";
import birthdayPartyTransferReducer from "./Services/Celebrations_Transfer/Birthday_Party_Transfer/reducer";
import georgeBushReducer from "./Services/Houston_Airport/George_bush/reducer";
import hobbyAirportReducer from "./Services/Houston_Airport/Hobby_airport/reducer";
import privateJetReducer from "./Services/Houston_Airport/Private_jet/reducer";
import fleetReducer from "./Fleet/reducer";
import faqsReducer from "./Faqs/reducer";
import newsReducer from "./News/reducer";
import aboutReducer from "./About_us/reducer";
import contactReducer from "./Contact_us/reducer";
import contactDetailsReducer from "./Contact_details/reducer";
import blogReducer from "./Blog/reducer";
import blogIdReducer from "./BlogId/reducer";

// Auth
import loginReducer from "./Auth2/Login/reducer/Login";
import registerReducer from "./Auth2/Register/reducer/reducer";
import verifyOTPReducer from "./Auth2/verifyOTP/reducer/reducer";
import forgotEmailReducer from "./Auth2/ForgotEmail/reducer/reducer";
import forgotOTPReducer from "./Auth2/forgotOTP/reducer/reducer";
import confirmPasswordReducer from "./Auth2/ConfirmPassword/reducer/reducer";

// Cancel Booking
import cancelBookingReducer from "./Cancel_Booking/Cancel_Booking/reducer";
import cancelBookingVerifyEmailReducer from "./Cancel_Booking/Cancel_Booking_Verify_Email/reducer";
import refundRequestReducer from "./Refund_Request/reducer";

// Account update
import {
  updateAccountDetailsReducer,
  updateAccountPasswordReducer,
} from "./Account_update/reducer";

export default combineReducers({
  cmsReducer: CmsReducer,

  // cities
  houstonLimo: houstonLimoReducer,
  galvestonLimo: galvestonLimoReducer,
  montgomeryLimo: montgomeryLimoReducer,
  conroeLimo: conroeLimoReducer,
  tomballLimo: tomballLimoReducer,
  cypressLimo: cypressLimoReducer,
  beamountLimo: beamountLimoReducer,
  sugarlandLimo: sugarlandLimoReducer,
  richmondLimo: richmondLimoReducer,
  katyLimo: katyLimoReducer,

  // services
  galvestonCruise: galvestonCruiseReducer,

  //city-to-city
  houstonToCollege: houstonToCollegeReducer,
  houstonToAustin: houstonToAustinReducer,
  houstonToDallas: houstonToDallasReducer,
  houstonToSanantonio: houstonToSanantonioReducer,
  houstonToLakecharles: houstonToLakecharlesReducer,
  houstonToLafayatte: houstonToLafayatteReducer,

  // Events Transfer
  BusinessConvention: BusinessConventionReducer,
  astroGame: astroGameReducer,
  concerts: concertsReducer,
  houstonRodeo: houstonRodeoReducer,

  // Celebrations Transfer
  partyTransfer: partyTransferReducer,
  graduationTransfer: graduationTransferReducer,
  birthdayPartyTransfer: birthdayPartyTransferReducer,

  // Houston Airport
  georgeBush: georgeBushReducer,
  hobbyAiport: hobbyAirportReducer,
  privateJet: privateJetReducer,

  fleet: fleetReducer,

  faq: faqsReducer,
  news: newsReducer,
  about: aboutReducer,

  contact: contactReducer,

  contactDetails: contactDetailsReducer,

  blog: blogReducer,
  QuoteReducer,
  PreBookingReducer,
  BookingReducer,
  paymentReducer,
  blogId: blogIdReducer,

  // Auth
  login: loginReducer,
  register: registerReducer,
  verifyOTP: verifyOTPReducer,
  forgotEmail: forgotEmailReducer,
  forgotOTP: forgotOTPReducer,
  confirmPassword: confirmPasswordReducer,

  // Cancel_Booking
  cancelBooking: cancelBookingReducer,
  cancelBookingVerifyEmail: cancelBookingVerifyEmailReducer,

  // Refund
  RefundRequest: refundRequestReducer,

  // Account update
  updateAccountDetails: updateAccountDetailsReducer,
  updateAccountPassword: updateAccountPasswordReducer,
});
