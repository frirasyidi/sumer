function sumer(...toAdd: (number | number[])[]): number | number[] {
  let result: number | number[] = 0;
  toAdd.forEach((each) => {
    if (Array.isArray(each)) result = each;
    if (typeof each === "number") {
      if (Array.isArray(result)) result[0] += each;
      else result += each;
    }
  });
  return result;
}

export { sumer };
