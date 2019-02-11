// //falsy
// false
// 0 (zero)
// '' //(empty string)
// null
// undefined
// NaN

// //truthy
// '0' //(a string containing a single zero)
// 'false' //(a string containing the text “false”)
// [] //(an empty array)
// {} //(an empty object)
// function x(){}// (an “empty” function)

console.log([]==false, []==0, []=='', [[[]]]==false);

// false, zero and empty strings are all equivalent.
// null and undefined are equivalent to themselves and each other but nothing else.
// NaN is not equivalent to anything – including another NaN!
// Infinity is truthy – but cannot be compared to true or false!
// An empty array is truthy – yet comparing with true is false and comparing with false is true?!

5 + null    // returns 5         because null is converted to 0
"5" + null  // returns "5null"   because null is converted to "null"
"5" + 2     // returns "52"      because 2 is converted to "2"
"5" - 2     // returns 3         because "5" is converted to 5
"5" * "2"   // returns 10        because "5" and "2" are converted to 5 and 2