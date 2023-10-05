/**
 * Turn number and array to object when necessary. Will do nothing given an object.
 * @param item number | number[]
 * @returns an object with string as key and number as value
 */
function objectify(item: number | number[] | { [key: string]: number }): {
  [key: string]: number;
} {
  if (typeof item === "number") return { "0": item };
  if (Array.isArray(item)) {
    let object: { [key: string]: number } = {};
    let i = 0;
    item.forEach((number) => {
      object[`${i}`] = number;
      i++;
    });
    return object;
  }
  return item;
}

export { objectify };
