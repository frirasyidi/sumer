import { objectify } from "./objectify";

describe("objectify will turn number and array to object", () => {
  it("should return an object as it is", () => {
    const result = objectify({ "0": 0, "1": 1, "2": 2 });
    expect(result).toEqual({ "0": 0, "1": 1, "2": 2 });
  });

  it("should change a number to object", () => {
    const result = objectify(8);
    expect(result).toEqual({ "0": 8 });
  });

  it("should change an array to object using index as key", () => {
    const result = objectify([8, 7, 6, 5]);
    expect(result).toEqual({ "0": 8, "1": 7, "2": 6, "3": 5 });
  });
});
