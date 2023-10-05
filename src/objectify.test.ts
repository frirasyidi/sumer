import { objectify } from "./objectify";

describe("objectify will turn number and array to object", () => {
  it("should return an object as it is", () => {
    const result = objectify({ "0": 0, "1": 1, "2": 2 });
    expect(result).toEqual({ "0": 0, "1": 1, "2": 2 });
  });
});
