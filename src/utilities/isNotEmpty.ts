/**
 * *DRAFT* This needs some rework.
 * @param {Object} [obj] Object to check
 * @returns {boolean} Returns true if object is not empty.
 */
export function isNotEmpty<T extends object>(obj: T): obj is Required<T> {
    return Object.keys(obj).length > 0;
}