import { sumer } from "./sumer";

describe("sumer will add given numbers together", () => {
  it("should return the number when only a single number is given", () => {
    const result = sumer(25);
    expect(result).toBe(25);
  });

  it("should add two numbers together", () => {
    const result = sumer(40, 37);
    expect(result).toBe(77);
  });

  it("should add many numbers together", () => {
    const result = sumer(
      40,
      37,
      -8,
      29,
      1_100,
      394,
      -820,
      5,
      234,
      -2,
      1,
      0,
      -49,
      98,
      903
    );
    expect(result).toBe(1_962);
  });
});

describe("sumer will add numbers in the same index from given arrays", () => {
  it("should return the array when only a single array is given", () => {
    const result = sumer([1, 2, 3, 4, 5]);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  it("should add same-indexed number for two arrays", () => {
    const result = sumer([1, 2, 3], [4, 5]);
    expect(result).toEqual([5, 7, 3]);
  });

  it("should add same-indexed number for many arrays", () => {
    const result = sumer(
      [1, 2, 3],
      [4, 5],
      [18, 0, -9, 23, 13, 18, 20],
      [1],
      [12, 13, 8],
      [0, 0, 0, 28]
    );
    expect(result).toEqual([36, 20, 2, 51, 13, 18, 20]);
  });

  it("should add number as index 0 item in the array", () => {
    const result = sumer(1, [2, 3], 4, [5, 6, 7]);
    expect(result).toEqual([12, 9, 7]);
  });
});

describe("sumer will add numbers with the same key on an object", () => {
  it("should return the object if no others are given", () => {
    const result = sumer({ a: 1, b: 2, c: 3 });
    expect(result).toEqual({ a: 1, b: 2, c: 3 });
  });

  it("should return the sum when two objects are given", () => {
    const result = sumer({ a: 1, b: 2 }, { a: 3, c: 4 });
    expect(result).toEqual({ a: 4, b: 2, c: 4 });
  });

  it("should add array value to object with the same key to the array's index", () => {
    const result = sumer({ "0": 1, apple: 2 }, [3, 4, 5]);
    expect(result).toEqual({ "0": 4, apple: 2, "1": 4, "2": 5 });
  });

  it("should add number to object with key 0 when available", () => {
    const result = sumer({ "0": 1, apple: 2 }, 25);
    expect(result).toEqual({ "0": 26, apple: 2 });
  });

  it("should add number to object with key 0 when not available", () => {
    const result = sumer({ pineapple: 22, apple: 2 }, 25, 4, 2);
    expect(result).toEqual({ pineapple: 22, apple: 2, "0": 31 });
  });

  it("should add numbers, arrays, and object like its summer!", () => {
    const result = sumer(
      { pineapple: 22, apple: 2 },
      25,
      -4,
      2,
      [-24, 12, 1],
      { pineapple: 4, mango: 3, mangosteen: 2, "4": -10 },
      [1, -2, 3, 0, -9, 8]
    );
    expect(result).toEqual({
      pineapple: 26,
      apple: 2,
      "0": 0,
      "1": 10,
      "2": 4,
      mango: 3,
      mangosteen: 2,
      "3": 0,
      "4": -19,
      "5": 8,
    });
  });
});
