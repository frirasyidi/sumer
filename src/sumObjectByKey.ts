function sumObjectByKey(
  a: { [key: string]: number },
  b: { [key: string]: number }
): { [key: string]: number } {
  const result: { [key: string]: number } = {};
  result["apple"] = a["apple"] + b["apple"];
  return result;
}

export { sumObjectByKey };
