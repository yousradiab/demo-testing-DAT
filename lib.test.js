import lib from "./lib.js";
import fizzBuzz from "./fizzbuzz.js"

describe("absolute", () => {
  it("should return a positive number if input is positive", () => {
    const result = lib.absolute(1);
    expect(result).toBe(1);
  });

  it("should return a positive number if input is negative", () => {
    const result = lib.absolute(-1);
    expect(result).toBe(1);
  });

  it("should return 0 if input is 0", () => {
    const result = lib.absolute(0);
    expect(result).toBe(0);
  });
});

// Når man skal teste string
describe("greet", () => {
  it("should return the greeting message", () => {
    const result = lib.greet("Mosh");

    // testresultatet skal matche dette for passed
    expect(result).toMatch(/Mosh/);

    expect(result).toContain("Mosh");
  });
});

// teste array
describe("getCurrinceies", () => {
  it("should return supported currencies", () => {
    const result = lib.getCurrencies();
    expect(result).toContain("USD");
    expect(result).toContain("AUD");
    expect(result).toContain("EUR");
    expect(result.length).toBe(3);

    // ideal way
    // expect(result).toEqual(expect.arrayContaining(["EUR", "USD", "AUD"]))
  });
});

describe("getProduct", () => {
  it("should return the product with the given id", () => {
    const result = lib.getProduct(1);
    expect(result).toMatchObject({ id: 1, price: 10 });
    expect(result).toHaveProperty("id", 1);
    expect(result).toHaveProperty("price", 10);
  });
});

describe("registerUser", () => {
  it("should throw if user is falsy", () => {
    const args = [null, undefined, NaN, "", 0, false];
    args.forEach((a) => {
      expect(() => {
        lib.registerUser(a);
      }).toThrow();
    });
  });

    it("should return a user object if valid username is passed", () => {
    const result = lib.registerUser("mosh");
    expect(result).toMatchObject({ username: "mosh" });
    expect(result.id).toBeGreaterThan(0);
  });

});



describe("fizzBuzz", () => {

    it("should throw an exception if input is not a number", () => {
    const args = ["a", null, undefined, {}, false];
    args.forEach((a) => {
      expect(() => {
        fizzBuzz(a);
      }).toThrow();
    });
  });

  it('should return fizzBuzz if input is divisible by 3 and 5', () => {
    const args= [15, 30, 45];
    args.forEach((a) => expect(fizzBuzz(a).toBe("fizzBuzz")));
  })

   it("should return Fizz if input is only divisible by 3", () => {
    const args = [3, 6, 9, 12];
    args.forEach((a) => expect(fizzBuzz(a)).toBe("Fizz"));
  });

    it('should return Buzz if input is only divisible by 5', () => {
        const args = [5, 10, 20, 25]
        args.forEach((a) => expect(fizzBuzz(a)).toBe("Buzz"))

    })

it('should return input if input is not divisible by 3 or 5', () => {
    const args = [15, 30, 45]
    args.forEach((a) => expect(fizzBuzz(a).toBe(a)))
})
})

  it("should return input if input is not divisible by 3 or 5", () => {
    const args = [1, 2, 4, 7, 8, 11, 13, 14];
    args.forEach((a) => expect(fizzBuzz(a)).toBe(a));
  });

  
