// Should convert a string representing a number into a number.
// If the number is not an integer, round down to the nearest integer.
// If the string cannot be parsed as a number, return NaN.
function convertStringToInteger(string) 
{
  // let num = Number(string)
  return Number.isNaN(string) ? NaN : Math.floor(string)
}

// Should convert a string representing a number into a number.
// Should work with integers or numbers with decimals.
// If the string cannot be parsed as a number, return a string 
// that says "Not a number.".
function convertStringToNumber(string) 
{
  // return Number.parseInt(string) ? Number.parseFloat(string) : "Not a number."

  return Number.parseFloat(string) ? Number.parseFloat(string) : "Not a number."

  // string = Number.parseFloat(string) // in order to use Number.isNan you have to convert the varible to Number.parseInt() or .parseFloat()
  // return Number.isNaN(string) ? "Not a number." : Number.parseFloat(string)
}

// Should round a number to an integer. The instruction will be
// one of the following strings:
// "up" -- round up to the next highest integer
// "down" -- round down to the next lowest integer
// If no instruction is given, round to the nearest integer.
function roundToInteger(num, instruction) 
{
  if (instruction === "up") 
  {
    return Math.ceil(num)
  }
  else if (instruction === "down")
  {
    return Math.floor(num)
  }
    return Math.round(num)
}

// Returns true if the given argument is an array, or
// false if it's not.
function isItAnArray(item) 
{
  return Array.isArray(item)
}


// The next few functions use an object with the following shape:
const countriesObject = {
  China: "Beijing",
  India: "New Delhi",
  "United States": "Washington, D.C.",
  Indonesia: "Jakarta",
  Pakistan: "Islamabad",
}

// Should return an array of the given country names.
function returnCountryNames(object) 
{
  return Object.keys(object)
}

// Should return an array of the given country capital cities.
function returnCapitalCities(object) 
{
  return Object.values(object)
}

// Should return an array of arrays, each containing a
// country's name, and then that country's capital.
// For example:
/*
[
  [ 'China', 'Beijing' ],
  [ 'India', 'New Delhi' ],
  [ 'United States', 'Washington, D.C.' ],
  [ 'Indonesia', 'Jakarta' ],
  [ 'Pakistan', 'Islamabad' ]
]
*/
function returnCountriesAndCapitals(object) 
{
return Object.entries(object)
}

// Don't change anything below this line.
module.exports = {
  convertStringToInteger,
  convertStringToNumber,
  roundToInteger,
  isItAnArray,
  returnCountryNames,
  returnCapitalCities,
  returnCountriesAndCapitals,
};
