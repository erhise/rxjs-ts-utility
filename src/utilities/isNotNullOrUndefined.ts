/**
 * Used to check if value is not null or undefined.
 * @param {*} [value] A value of some type.
 * @returns {*} Returns value with type separated from both null and undefined.
 */
export function isNotNullOrUndefined<T>(value: null | undefined | T): value is T {
  return value != null;
}