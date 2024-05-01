/**
 * formats an integer to a string number with commas e.g. 1000 -> "1,000"
 * @param {number} x 
 * @returns {string} 
 */
export const numberWithCommas = (x: number): string => {
    return x.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}