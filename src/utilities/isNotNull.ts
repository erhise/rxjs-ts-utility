/**
 * Used to check if value is not null.
 * @param {*} [value] A value of some type.
 * @returns {*} Returns value with type separated from null.
 */
export function isNotNull<T>(value: null | T): value is T {
  return value !== null;
}