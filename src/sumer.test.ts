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
});
