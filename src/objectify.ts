/**
 * Turn number and array to object when necessary. Will do nothing given an object.
 * @param item number | number[]
 * @returns number[]
 */
function objectify(item: { [key: string]: number }): {
  [key: string]: number;
} {
  return item;
}

export { objectify };
