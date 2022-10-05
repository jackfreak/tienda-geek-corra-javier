/**
 * formValidationRules Module
 * @author Javier Alejandro Corra
 */

import { string } from "yup";


//------------------------------------------------------------------------------------------------------------------
// ::: CONSTANTS
//------------------------------------------------------------------------------------------------------------------

const MSG_REQUIRED = 'Campo requerido.';

// eslint-disable-next-line
const MSG_MINIMUM = 'El campo debe contener mas de ${min} caracteres.';
// eslint-disable-next-line
const MSG_MAXIMUM = 'El campo debe contener como máximo ${max} caracteres.';
// eslint-disable-next-line
const MSG_PHONE_MINIMUM = 'El número debe contener como mínimo ${min} digitos.';
// eslint-disable-next-line
const MSG_PHONE_MAXIMUM = 'El número debe contener como máximo ${max} digitos.';


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
    return string().email('Mail inválido').required(MSG_REQUIRED);
}

function getNameSchema() {
    return string().min(2, MSG_MINIMUM).max(15, MSG_MAXIMUM).required(MSG_REQUIRED);
}

function getPhoneSchema() {
    return string().min(2, MSG_PHONE_MINIMUM).max(13, MSG_PHONE_MAXIMUM);
}

function getMessageSchema(max=100) {
    return string().max(max, MSG_MAXIMUM).required(MSG_REQUIRED);
}


//------------------------------------------------------------------------------------------------------------------
// ::: PRIVATE FUNCTIONS
//------------------------------------------------------------------------------------------------------------------



export {
    getEmailSchema,
    getNameSchema,
    getPhoneSchema,
    getMessageSchema,
};
