import { sumObjectByKey } from "./sumObjectByKey";

describe("sumObjectByKey will sum values from the same key from two different objects", () => {
  it("should sum two same length object", () => {
    const result = sumObjectByKey({ apple: 1 }, { apple: 2 });
    expect(result).toEqual({ apple: 3 });
  });

  it("should sum the same length object but with different keys", () => {
    const result = sumObjectByKey({ apple: 1 }, { mango: 2 });
    expect(result).toEqual({ apple: 1, mango: 2 });
  });

  it("should sum the object with different length and keys", () => {
    const result = sumObjectByKey(
      { apple: 1, lychee: 29 },
      { mango: 2, papaya: 12 }
    );
    expect(result).toEqual({ apple: 1, lychee: 29, mango: 2, papaya: 12 });
  });
});
