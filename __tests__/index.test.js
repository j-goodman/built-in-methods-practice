const {
  convertStringToInteger,
  convertStringToNumber,
  roundToInteger,
  isItAnArray,
  returnCountryNames,
  returnCapitalCities,
  returnCountriesAndCapitals,
} = require("../");

describe("convertStringToInteger()", () => {
  test("should convert a string number to an integer number", () => {
    const actual = convertStringToInteger("77");
    const expected = 77;
    expect(actual).toEqual(expected)
  });

  test("should convert strings with decimals to the next lowest integer", () => {
    const actual = convertStringToInteger("1001.9");
    const expected = 1001;
    expect(actual).toEqual(expected)
  });

  test("should return NaN if the string is not parsable as an integer", () => {
    const actual = convertStringToInteger("spaghetti");
    const expected = NaN;
    expect(actual).toEqual(expected)
  });
});

describe("convertStringToNumber()", () => {
  test("should convert a string number to an integer number", () => {
    const actual = convertStringToNumber("77");
    const expected = 77;
    expect(actual).toEqual(expected)
  });

  test("should include decimals in the return value", () => {
    const actual = convertStringToNumber("3.14159");
    const expected = 3.14159;
    expect(actual).toEqual(expected)
  });

  test(`should return "Not a number." if the string is not parsable as an integer`, () => {
    const actual = convertStringToNumber("Phoenix, Arizona");
    const expected = "Not a number.";
    expect(actual).toEqual(expected)
  });
});

describe("roundToInteger()", () => {
  test("should round down if that instruction is given", () => {
    const actual = roundToInteger(5.99, "down");
    const expected = 5;
    expect(actual).toEqual(expected)
  });

  test("should round up if that instructiuon is given", () => {
    const actual = roundToInteger(5.01, "up");
    const expected = 6;
    expect(actual).toEqual(expected)
  });

  test(`should round to the nearest integer if no argument is given`, () => {
    const actual = roundToInteger(5.51);
    const expected = 6;
    expect(actual).toEqual(expected)
  });
});

describe("isItAnArray()", () => {
  test("should return true if an array is given", () => {
    const actual = isItAnArray([4, 8, 15, 16, 23, 42]);
    const expected = true;
    expect(actual).toEqual(expected)
  });

  test("should return false if a non-array is given", () => {
    const actual = isItAnArray("Don Bluth");
    const expected = false;
    expect(actual).toEqual(expected)
  });

  test("should return false if a non-array is given", () => {
    const actual = isItAnArray({A: 1, B: 2, C: 3});
    const expected = false;
    expect(actual).toEqual(expected)
  });
});

const countriesObject = {
  China: "Beijing",
  India: "New Delhi",
  "United States": "Washington, D.C.",
  Indonesia: "Jakarta",
  Pakistan: "Islamabad",
}

const alternateCountries = {
  Nigeria: "Abuja",
  Brazil: "Brasília",
  Bangladesh: "Dhaka",
}

describe("returnCountryNames()", () => {
  test("should return the given country names", () => {
    const actual = returnCountryNames(countriesObject);
    const expected = ["China", "India", "United States", "Indonesia", "Pakistan"];
    expect(actual).toEqual(expected)
  });

  test("should work with other countries", () => {
    const actual = returnCountryNames(alternateCountries);
    const expected = ["Nigeria", "Brazil", "Bangladesh"];
    expect(actual).toEqual(expected)
  });
});

describe("returnCapitalCities()", () => {
  test("should return the given country names", () => {
    const actual = returnCapitalCities(countriesObject);
    const expected = ["Beijing", "New Delhi", "Washington, D.C.", "Jakarta", "Islamabad"];
    expect(actual).toEqual(expected)
  });

  test("should work with other countries", () => {
    const actual = returnCapitalCities(alternateCountries);
    const expected = ["Abuja", "Brasília", "Dhaka"];
    expect(actual).toEqual(expected)
  });
});

describe("returnCountriesAndCapitals()", () => {
  test("should return the given country names", () => {
    const actual = returnCountriesAndCapitals(countriesObject);
    const expected = [
      [ 'China', 'Beijing' ],
      [ 'India', 'New Delhi' ],
      [ 'United States', 'Washington, D.C.' ],
      [ 'Indonesia', 'Jakarta' ],
      [ 'Pakistan', 'Islamabad' ]
    ];
    expect(actual).toEqual(expected)
  });

  test("should work with other countries", () => {
    const actual = returnCountriesAndCapitals(alternateCountries);
    const expected = [
      [ 'Nigeria', 'Abuja' ],
      [ 'Brazil', 'Brasília' ],
      [ 'Bangladesh', 'Dhaka' ]
    ];
    expect(actual).toEqual(expected)
  });
});