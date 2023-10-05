import { objectify } from "./objectify";
import { sumObjectByKey } from "./sumObjectByKey";

/**
 * Will add numbers and arrays
 * @param toAdd number | number[]
 * @returns number | number[]
 */
function sumer(
  ...toAdd: (number | number[] | { [key: string]: number })[]
): number | number[] | { [key: string]: number } {
  // let result: number[] = [];
  let result: { [key: string]: number } = {};

  toAdd.forEach((each) => {
    const object = objectify(each);
    result = sumObjectByKey(object, result);
    // const array = turnToArray(each);
    // result = sumArrayByIndex(array, result);
  });

  // Returns number when contains no array, otherwise return array
  if (Object.keys(result).length === 1) return result[0];
  if (isArrayObject(result)) return turnObjectToArray(result);
  return result;
}

/*
*
*
*
THESE BELOW ARE HELPERS
*
*
*
*/

function turnObjectToArray(object: { [key: string]: number }): number[] {
  let array: number[] = [];
  Object.keys(object).forEach((key) => {
    console.log(key, object[key]);
    array.push(object[key]);
  });
  return array;
}

function isArrayObject(object: { [key: string]: number }): boolean {
  let isArray: boolean = true;
  let i = 0;
  Object.keys(object).forEach((key) => {
    if (key !== `${i}`) isArray = false;
    i++;
  });
  return isArray;
}

export { sumer };
