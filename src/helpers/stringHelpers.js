/**
 * stringHelpers module.
 * @author Javier Alejandro Corra
 */


//------------------------------------------------------------------------------------------------------------------
// ::: CONSTANTS
//------------------------------------------------------------------------------------------------------------------


//------------------------------------------------------------------------------------------------------------------
// ::: PUBLIC METHODS
//------------------------------------------------------------------------------------------------------------------

/**
 * Add thousand separator to a number string.
 * Format number 1234567 to 1,234,567
 * @param n
 * @param locale
 * @returns {string}
 */
function formatStringIntegerLocale(n, locale = 'es-AR') {
    let inputStr = '';

    if(typeof n === 'number') {
        inputStr = n.toString();
    }

    // Sanitize the value using RegEx by removing unnecessary characters such as spaces, underscores, dashes, and letters
    // eslint-disable-next-line
    let sanitizedStr = inputStr.replace(/[\D\s\._\-]+/g, '');

    // Make sure the value is an integer (a round number)
    sanitizedStr = sanitizedStr ? parseInt(sanitizedStr, 10) : 0;

    // Add the thousand separator with the toLocaleString() function
    // Note: The separator can either be , or . depending on the country code passed in the toLocaleString() function.
    // German, de-DE, and Indonesia, id-ID, for example, use . instead of ,
    //return ( input === 0 ) ? '' : input.toLocaleString(locale);
    return sanitizedStr.toLocaleString(locale);
}


/**
 *
 * @param num
 * @param locale
 * @returns {string}
 */
function formatInteger(num, locale = 'en-US') {
    // Make sure the value is an integer (a round number)
    const round = Math.round(num);


    // Add the thousand separator with the toLocaleString() function
    // Note: The separator can either be , or . depending on the country code passed in the toLocaleString() function.
    // German, de-DE, and Indonesia, id-ID, for example, use . instead of ,
    return round.toLocaleString(locale);
}

/**
 * Add thousand separator to a number string.
 * Format number 1234567 to 1,234,567
 * @param n
 * @param symbol
 */
function formatIntegerWith(n, symbol = ',') {
    return n.replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, symbol);
}


/**
 *
 * @param {*} str
 * @returns
 */
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}


//------------------------------------------------------------------------------------------------------------------
// ::: PRIVATE METHODS
//------------------------------------------------------------------------------------------------------------------


//------------------------------------------------------------------------------------------------------------------
// ::: CALLBACKS & EVENT HANDLERS
//------------------------------------------------------------------------------------------------------------------


//------------------------------------------------------------------------------------------------------------------
// ::: API
//------------------------------------------------------------------------------------------------------------------

export {
    formatStringIntegerLocale,
    formatInteger,
    formatIntegerWith,
    capitalize,
};
