/**
 * formValidationRules Module
 * @author Javier Alejandro Corra
 */

import { string } from "yup";
import errorMessages from "./errorMessages.json";

//------------------------------------------------------------------------------------------------------------------
// ::: CONSTANTS
//------------------------------------------------------------------------------------------------------------------

const Locale = errorMessages;


//------------------------------------------------------------------------------------------------------------------
// ::: PUBLIC VARIABLES
//------------------------------------------------------------------------------------------------------------------


//------------------------------------------------------------------------------------------------------------------
// ::: PRIVATE VARIABLES
//------------------------------------------------------------------------------------------------------------------


//------------------------------------------------------------------------------------------------------------------
// ::: PUBLIC FUNCTIONS
//------------------------------------------------------------------------------------------------------------------


function getEmailSchema() {
    return string()
        .email(Locale.MSG_INVALID_EMAIL)
        .required(Locale.MSG_REQUIRED);
}

function getPasswordSchema() {
    return string()
        .min(6, Locale.MSG_PASSWORD_TOO_SHORT)
        .matches(/[a-zA-Z0-9]/, Locale.MSG_PASSWORD_FORMAT)
        .required(Locale.MSG_REQUIRED);
}

function getNameSchema(min = 2, max = 20) {
    return string()
        .min(min, Locale.MSG_MINIMUM)
        .max(max, Locale.MSG_MAXIMUM)
        .required(Locale.MSG_REQUIRED);
}

function getAddressSchema(min = 2, max = 50) {
    return string()
        .min(min, Locale.MSG_MINIMUM)
        .max(max, Locale.MSG_MAXIMUM)
        .required(Locale.MSG_REQUIRED);
}

function getPhoneSchema() {
    return string()
        .min(2, Locale.MSG_PHONE_MINIMUM)
        .max(13, Locale.MSG_PHONE_MAXIMUM);
}

function getMessageSchema(max = 100) {
    return string()
        .max(max, Locale.MSG_MAXIMUM)
        .required(Locale.MSG_REQUIRED);
}


//------------------------------------------------------------------------------------------------------------------
// ::: PRIVATE FUNCTIONS
//------------------------------------------------------------------------------------------------------------------



export {
    getEmailSchema,
    getPasswordSchema,
    getNameSchema,
    getAddressSchema,
    getPhoneSchema,
    getMessageSchema,
};
