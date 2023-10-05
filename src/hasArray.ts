function hasArray(...toCheck: (number | number[])[]): boolean {
  let found: boolean = false;
  toCheck.forEach((each) => {
    if (Array.isArray(each)) return (found = true);
  });
  return found;
}

export { hasArray };
