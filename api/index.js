import axios from "axios";
import { URL } from "../config/serverUrl";

// *** Fetch Home ***

// fetch contact details
export const fetchHomePage = () => axios.get(`${URL}/website-content/home`);

// CITIES
export const fetchHoustonLimoPage = () =>
  axios.get(`${URL}/website-content/houston-limo-service`);

export const fetchGalvestonLimoPage = () =>
  axios.get(`${URL}/website-content/galveston-limo-service`);

export const fetchMontgomeryLimoPage = () =>
  axios.get(`${URL}/website-content/montgomery-limo-service`);

export const fetchConroeLimoPage = () =>
  axios.get(`${URL}/website-content/conroe-limo-service`);

export const fetchTomballLimoPage = () =>
  axios.get(`${URL}/website-content/tomball-limo-service`);

export const fetchCypressLimoPage = () =>
  axios.get(`${URL}/website-content/cypress-limo-service`);

export const fetchBeamountLimoPage = () =>
  axios.get(`${URL}/website-content/beaumant-limo-service`);

export const fetchSugarlandLimoPage = () =>
  axios.get(`${URL}/website-content/sugarland-limo-service`);

export const fetchRichmondLimoPage = () =>
  axios.get(`${URL}/website-content/richmond-limo-service`);

export const fetchKatyLimoPage = () =>
  axios.get(`${URL}/website-content/katy-limo-service`);

// Services
export const fetchGalvestonCruisePage = () =>
  axios.get(`${URL}/website-content/galveston-cruise-transfer`);

export const fetchServicePageDetail = (id) =>
  axios.get(`${URL}/admin/services/${id}`);

export const fetchHoustonToCollegePage = () =>
  axios.get(`${URL}/website-content/houston-to-college-station`);

export const fetchHoustonToAustinPage = () =>
  axios.get(`${URL}/website-content/houston-to-austin`);

export const fetchHoustonToDallasPage = () =>
  axios.get(`${URL}/website-content/houston-to-dallas`);

export const fetchHoustonToSanantonioPage = () =>
  axios.get(`${URL}/website-content/houston-to-sanantonio`);

export const fetchHoustonToLakecharlesPage = () =>
  axios.get(`${URL}/website-content/houston-to-lake-charles`);

export const fetchHoustonToLafayattePage = () =>
  axios.get(`${URL}/website-content/houston-to-lafayette`);

export const fetchBusinessConventionPage = () =>
  axios.get(`${URL}/website-content/business-convention`);

export const fetchSportsEventsPage = () =>
  axios.get(`${URL}/website-content/astro-game`);

export const fetchConcertsPage = () =>
  axios.get(`${URL}/website-content/concert-and-theaters`);

export const fetchHoustonRodeoPage = () =>
  axios.get(`${URL}/website-content/houston-radeo-transportation`);

export const fetchPartyTransferPage = () =>
  axios.get(`${URL}/website-content/party-transfer`);

export const fetchGraduationTransferPage = () =>
  axios.get(`${URL}/website-content/graduation-transfer`);

export const fetchBirthdayPartyTransferPage = () =>
  axios.get(`${URL}/website-content/bachelors-party`);

export const fetchGeorgeBushPage = () =>
  axios.get(`${URL}/website-content/george-bush-airpot`);

export const fetchHobbyAirportPage = () =>
  axios.get(`${URL}/website-content/houstan-hobby-airport`);

export const fetchPrivateJetPage = () =>
  axios.get(`${URL}/website-content/private-aviation-&-regional-airport`);

export const fetchFleetPage = () => axios.get(`${URL}/website-content/fleets`);

export const fetchFaqsPage = () => axios.get(`${URL}/website-content/faqs`);

export const fetchTestimonials = () => axios.get(`${URL}/website-content/testimonials`);

export const fetchAboutPage = () =>
  axios.get(`${URL}/website-content/about-us-page`);

export const fetchBlogPage = () => axios.get(`${URL}/website-content/blogs`);
export const fetchNews = () => axios.get(`${URL}/website-content/getnews/news`);

export const postContactPage = (email, phoneNumber, message, config) => (
  axios.post(`${URL}/website-content/contact-us`, {
    email, phoneNumber, message
  },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  )
)
// export const postContactPage = (email, phoneNumber, message, config) =>
//   axios.post(
//     `${URL}/website-content/contact-us`,
//     { email, phoneNumber, message },
//     {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     }
//   );

export const fetchContactDetailsPage = () =>
  axios.get(`${URL}/website-content/contact-details`);

// *** Quotes ***

// Get Quote
export const getQuoteCityToCity = (data) =>
  axios.post(`${URL}/booking/quote/city-to-city`, data, {
    headers: {
      "content-type": "application/json",
    },
  });
export const getQuoteAirportTransfer = (data) =>
  axios.post(`${URL}/booking/quote/airport-transfer`, data, {
    headers: {
      "content-type": "application/json",
    },
  });
export const getQuoteHourly = (data) =>
  axios.post(`${URL}/booking/quote/hourly`, data, {
    headers: {
      "content-type": "application/json",
    },
  });
// Book A Ride
export const bookARide = (data) =>
  axios.post(`${URL}/booking/add-booking`, data, {
    headers: {
      "content-type": "application/json",
    },
  });
// fetch braintree token
export const fetchBraintreeToken = () =>
  axios.get(URL + "/payments/initialization-braintree");

// Execute payment braintree
export const executePayment = (data) =>
  axios.post(`${URL}/payments/execute-braintree`, data, {
    headers: {
      "content-type": "application/json",
    },
  });

// Login
export const login = (email, password) =>
  axios.post(
    `${URL}/login`,
    { email, password },
    {
      headers: {
        "content-type": "application/json",
      },
    }
  );

// Register
export const register = (fullName, email, password, home_address, billing_address, companyName, phone_number) =>
  axios.post(
    `${URL}/auth/register`,
    { fullName, email, password, home_address, billing_address, companyName, phone_number },
    {
      headers: {
        "content-type": "application/json",
      },
    }
  );

export const verifyEmail = (email) => {
  axios.post(
    `${URL}/verify/send/verification-email`,
    { email },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
};

// export const verifyOTP = (email, code) => {
//   axios.post(
//     `${URL}/verify/verify/email`,
//     { email, code },
//     {
//       headers: {
//         "Content-Type": "application/json",
//       },
//     }
//   );
// };

export const forgotEmail = (email) => {
  axios.post(
    `${URL}/auth/send/forgot-password/verification-email`,
    { email },
    {
      headers: {
        "content-type": "application/json",
      },
    }
  );
};

// export const forgotOTP = (email, code) => {
//   const config = {
//     headers: {
//       "Content-Type": "application/json",
//     },
//   };
//   axios.post(`${URL}/auth/reset-password/verify`, { email, code }, config);
// };

export const confirmPassword = (userId, newPassword) => {
  axios.post(
    `${URL}/auth/reset-password`,
    { userId, newPassword },
    {
      headers: {
        "content-type": "application/json",
      },
    }
  );
};

export const cancelBookingVerifyEmailAPI = (bookingId, email) => {
  axios.post(
    `${URL}/booking/send/verification-email`,
    { bookingId, email },
    {
      headers: {
        "content-type": "application/json",
      },
    }
  );
};

export const cancelBookingVerifyCodeAPI = (code, email) => {
  axios.post(
    `${URL}/booking/verify/email`,
    { code, email },
    {
      headers: {
        "content-type": "application/json",
      },
    }
  );
};

export const cancelBookingAPI = (bookingId) => {
  axios.post(
    `${URL}/booking/cancel-booking`,
    { bookingId },
    {
      headers: {
        "content-type": "application/json",
      },
    }
  );
};

export const RefundRequestAPI = (bookingId, phoneNumber, accountNumber) => {
  axios.post(
    `${URL}/booking/refund-request`,
    { bookingId, phoneNumber, accountNumber },
    {
      headers: {
        "content-type": "application/json",
      },
    }
  );
};

// export const accountDetailUpdateAPI = (data) => {
//   axios.post(`${URL}/website/users/update-profile`, data, {
//     headers: {
//       "content-type": "application/json",
//     },
//   });
// };
