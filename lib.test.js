import lib from "./lib";

describe("absolute", () => {
  it("should return positive if input is positive", () => {
    const result = lib.absolute(5);
    expect(result).toBe(5);
  });

  it("should return positive if input is negative", () => {
    const result = lib.absolute(-5);
    expect(result).toBe(5);
  });

  it("should return zero if input is zero", () => {
    const result = lib.absolute(0);
    expect(result).toBe(0);
  });
});
