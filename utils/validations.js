import Joi from "joi";

export const userDetailValidation = Joi.object({
  isPassengerNBookedPersonSame: Joi.boolean().optional(),
  type: Joi.boolean().optional(),
  bookByName: Joi.string()
    .when("isPassengerNBookedPersonSame", {
      is: true,
      then: Joi.string().required(),
      otherwise: Joi.string().allow("").optional(),
    })
    .messages({
      "string.empty": "Booked by name is required",
      "string.required": "Booked by Name is required",
    }),
  bookByEmail: Joi.string()
    .when("isPassengerNBookedPersonSame", {
      is: true,
      then: Joi.string().required(),
      otherwise: Joi.string().allow("").optional(),
    })
    .pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    .messages({
      "string.empty": "Email is required",
      "string.base": "Email is required",
      "string.pattern.base": "Email must be valid",
    }),
  bookByPhone: Joi.string()
    .when("isPassengerNBookedPersonSame", {
      is: true,
      then: Joi.string().required(),
      otherwise: Joi.string().allow("").optional(),
    })
    .messages({
      "string.empty": "Phone number is required",
      "string.required": "Phone number is required",
      "string.length": "Phone number length must be 7 digits",
    }),
  cardHolderName: Joi.string()
    .when("isPassengerNBookedPersonSame", {
      is: true,
      then: Joi.string().required(),
      otherwise: Joi.string().allow("").optional(),
    })
    .messages({
      "string.empty": "Card holder name is required",
      "string.required": "Card holder Name is required",
    }),
  passangerEmail: Joi.string()
    .pattern(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    .messages({
      "string.empty": "Email is required",
      "string.required": "Email is required",
      "string.base": "Email is required",
      "string.pattern.base": "Email must be valid",
    }),
  passangerName: Joi.string().required().messages({
    "string.empty": "Passanger name is required",
    "string.required": "Passanger Name is required",
  }),
  passangerPhone: Joi.string().required().messages({
    "string.empty": "Phone number is required",
    "string.required": "Phone number is required",
    "string.length": "Phone number length must be 7 digits",
  }),
  flightNCuriseDetail: Joi.string().allow("").optional(),
  returnFlightNCuriseDetail: Joi.string().allow("").optional(),
  pickUpSign: Joi.string().required().messages({
    "string.empty": "Pick up sign is required",
    "string.required": "Pick up sign is required",
  }),
  notes: Joi.string().allow("").optional(),
  numberOfPassangers: Joi.string().allow("").optional(),
  returnPickUpdate: Joi.string()
    .when("type", {
      is: false,
      then: Joi.string().allow("").optional(),
      otherwise: Joi.string().required(),
    })
    .messages({
      "string.empty": "return pick up date is required",
      "string.required": "return pick up date is required",
    }),
  returnPickUpTime: Joi.string()
    .when("type", {
      is: false,
      then: Joi.string().allow("").optional(),
      otherwise: Joi.string().required(),
    }).messages({
      "string.empty": "return pick up time is required",
      "string.required": "return pick up time is required",
    }),
});
