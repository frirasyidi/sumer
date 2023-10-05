function sumObjectByKey(
  a: { [key: string]: number },
  b: { [key: string]: number }
): { [key: string]: number } {
  let result: { [key: string]: number } = a;
  Object.keys(b).forEach((key) => {
    if (result[key]) result[key] += b[key];
    else result[key] = b[key];
  });
  return result;
}

export { sumObjectByKey };
