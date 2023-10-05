/**
 * Will add numbers and arrays
 * @param toAdd number | number[]
 * @returns number | number[]
 */
function sumer(...toAdd: (number | number[])[]): number | number[] {
  let result: number[] = [];

  toAdd.forEach((each) => {
    const array = turnToArray(each);
    result = sumArrayByIndex(array, result);
  });

  // Returns number when contains no array, otherwise return array
  if (result.length === 1) return result[0];
  return result;
}

/**
 * Turn number to array when necessary. Will do nothing given an array.
 * @param item number | number[]
 * @returns number[]
 */
function turnToArray(item: number | number[]) {
  if (Array.isArray(item)) return item;
  return [item];
}

/**
 * Adds each index of array a to array b.
 * @param a number[]
 * @param b number[]
 * @returns number[]
 */
function sumArrayByIndex(a: number[], b: number[]): number[] {
  let result: number[] = [];
  let maxArrayLength = Math.max(a.length, b.length);

  for (let i = 0; i < maxArrayLength; i++) {
    const total = (a[i] || 0) + (b[i] || 0);
    result.push(total);
  }
  return result;
}

export { sumer };
