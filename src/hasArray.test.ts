import { hasArray } from "./hasArray";

describe("hasArray will check a given array has an array in it", () => {
  it("should return true when there is", () => {
    const result = hasArray(1, 2, [3, 4], 5);
    expect(result).toBe(true);
  });

  it("should return false when there is no array in it", () => {
    const result = hasArray(1, 2, 3, 4, 5);
    expect(result).toBe(false);
  });
});
