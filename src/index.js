/** @module insert-string-after */

import {isEmpty} from "has-content"

/**
 * @function
 * @param {string} haystack
 * @param {string} needle
 * @param {string} insertedString
 * @returns {number} Seconds passed since Unix epoch (01 January 1970)
 * @example
 * import insertStringAfter from "insert-string-after"
 * const result = insertStringAfter("I am Sanic!", "Sanic", " the Hedgehog")
 * result === "I am Sanic the Hedgehog!"
 */
export default (haystack, needle, insertedString) => {
  if (isEmpty(insertedString)) {
    return haystack
  }
  const needleString = String(needle)
  const index = haystack.indexOf(needleString)
  if (index === -1) {
    return haystack
  }
  const endIndex = index + needleString.length
  return haystack.slice(0, endIndex) + insertedString + haystack.slice(endIndex)
}