const fizzbuzz = require("./fizzbuzz");

//Esperamos recibir, el resultado de nuestra operación es fizzbuzz(1).
//Por último comprobación
describe("fizzbuzz", () => {
  test("should print error message if the argument is not a type number", () => {
    const expected = "Error: the argument is not of type number";
    const result = fizzbuzz("16");
    expect(expected).toBe(result);
  });

  test("should print 1 if receive 1", () => {
    const expected = 1;
    const result = fizzbuzz(1);
    expect(expected).toBe(result);
  });

  //Cuando el mumero sea múltipo de 3 imprima fizz

  test("sholud print fizz if they receive 3", () => {
    const expected = "fizz";
    const result = fizzbuzz(3);
    expect(expected).toBe(result);
  });

  test("should print fizz if they receive a multiple of 3", () => {
    const expected = "fizz";
    const result = fizzbuzz(6);
    expect(expected).toBe(result);
  });

  test("should print buzz if they receive 5", () => {
    const expected = "buzz";
    const result = fizzbuzz(5);
    expect(expected).toBe(result);
  });

  test("should print buzz if they receive a multiple of 5", () => {
    const expected = "buzz";
    const result = fizzbuzz(10);
    expect(expected).toBe(result);
  });

  test("should print fizzbuzz if they receive a multiple of 3 and 5", () => {
    const expected = "fizzbuzz";
    const result = fizzbuzz(15);
    expect(expected).toBe(result);
  });
});
