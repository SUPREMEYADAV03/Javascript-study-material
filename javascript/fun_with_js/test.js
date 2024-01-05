// Array | Packed vs Holey | JSVU | V8-Debug

const arr = []
%Debugprint(arr);

// Continous vs Holey
// Both are divided into three categories

// 1.SMI (small Integer)
// 2.Double Elements (float)
// 3.Packed Elements (float, string, function)

const arrTwo = [1, 2, 3, 4, 5]
// PACKED_SMI_ELEMENTS - MOST OPTIMIZED

arrTwo.push(6.0) // PACKED_DOUBLE_ELEMENTS - 2nd MOST OPTIMIZED

arrTwo.push('7') // PACKED_ELEMENTS - 3rd MOST OPTIMIZED

// once downgraded cannot be upgraded

arrTwo[10] = 11 // Holey_ELEMENTS

console.log(arrTwo);
console.log(arrTwo.length);
console.log(arrTwo[9]);
console.log(arrTwo[19]);

// Holes are very expensive in js

// bound check
// hasOwnProperty(arrTwo, 9)
// hasOwnProperty(arrTwo.prototype, 10)
// hasOwnProperty(Object.Prototype)

const arrThree = [1, 2, 3, 4, 5]
console.log(arrThree[8]);

// SMI > DOUBLE > PACKED
// H_SMI > H_DOUBLE > H_PACKED

const arrFour = new Array(3);
// just 3 holes .
// HOLEY_SMI_ELEMENTS

arrFour[0] = '1' // H_PACKED // HOLEY_ELEMENTS
arrFour[1] = '2' 
arrFour[2] = '3'

const arrFive = []
arr.push('1') // PACKED_ELEMENTS
arr.push('1') // PACKED_ELEMENTS
arr.push('1') // PACKED_ELEMENTS

const arrSix = [1, 2, 3, 4, 5]
arrSix.push(NaN) // PACKED_DOUBLE
arrSix.push(Infinity) // PACKED_DOUBLE

// for, for-of, forEach // use methods

