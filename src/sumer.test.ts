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
