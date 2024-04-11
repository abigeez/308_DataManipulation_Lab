// The initial numbers that must be verified.
const n1 = 10;
const n2 = 15;
const n3 = 20;
const n4 = 5;

// Check one: add up to 50
// This is a fairly simple operation using
// arithmetic operators and a comparison.
const isSum50 = (n1 + n2 + n3 + n4) == 50;

// Check two: at least two odd numbers
// Here, we use modulus to check if something is odd.
// Since % 2 is 0 if even and 1 if odd, we can use
// arithmetic to count the total number of odd numbers.
const isTwoOdd = (n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2;

// Check three: no number larger than 25
// This time, we use the OR operator to check
// if ANY of the numbers is larger than 25.
const under25 = n1 < 25 || n2 < 25 || n3 < 25 || n4 < 25;
console.log(under25);

// Check four: all unique numbers
// This is long, and there are more efficient
// ways of handling it with other data structures
// that we will review later.
const isUnique = n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4;

// Here, we put the results into a single variable 
// for convenience. Note how we negate isOver25 using
// the ! operator. We could also have tested for 
// "isUnder25" as an alternative.
const isValid = isSum50 && isTwoOdd && under25 && isUnique;

// Finally, log the results.
console.log(isValid);

// Here's another example of how this COULD be done,
// but it SHOULD NOT be done this way. As programmers,
// we break things into small, manageable pieces so that
// they can be better understood, scaled, and maintained.
const dontDoThis = ((n1 + n2 + n3 + n4) == 50) && 
  ((n1 % 2) + (n2 % 2) + (n3 % 2) + (n4 % 2) >= 2) && 
  !(n1 > 25 || n2 > 25 || n3 > 25 || n4 > 25) && 
  (n1 != n2 && n1 != n3 && n1 != n4 && n2 != n3 && n2 != n4 && n3 != n4);

//part one:
  // Checking if all numbers are divisible by 5 

  const isDiv5 = (n1 % 5) + (n2 % 5) + (n3 % 5) + (n4 % 5) === 0;
  console.log(isDiv5);
  //output is true, meaning that there are no remainders left from either of the values when they are divided by 5, 
  //resulting in all of them being divisible by 5.
console.log(`The four numbers are all divisible by 5, according to the provided criteria: ${isDiv5}.`);

  //checking if the first number is greater than the last
const largThan = n1 > n4;
console.log(largThan)
//output is true

console.log(`The first number, 'n1,' is larger than the last number, 'n4,' according to the following expression: ${largThan}.`);


//artithmetic chain

const subTract = (n2-n1);
console.log(subTract);
// output is 5, because 15-10 = 5
console.log(`'n2' is given a value of "${n2}," and 'n1' is given a value of "${n1}." So 
'n1' subtracted by 'n2' is equal to: ${n2-n1}.`);

const mulT = (subTract * n3);
console.log(mulT);
//output is 100 because 5 * 20 is 100.
console.log( `The output is "${mulT}," because the third number, 'n3' is multiplied by 'subTract.'`);

const remn4 = (mulT % n4);
console.log(remn4);
// output is zero because n4 =5 , when % by mulT =100 is 
// 0 because 5 goes into 100, 20 times so there are no remainders left.
console.log(`'n4' is given a value of "${n4}," and 'mulT' is given a value of "${mulT}."
When 'n4' is multiplied by 'mulT' it is equal to ${n4*mulT},`);

//changing the way over25 calculates.  I changed the variable name to under25
 // instead of over25 by const under 25 = n1 < 25 || n2 < 25 || n3 < 25 || n4 < 25;      
 //I also found another way to do it, which, I don't know which one is better practice,
 //but they both seem to achieve the same result.
 // I also used const under25 = (n1 && n2 && n3 && n4)<25;



 //part two//

 //question one

 const totalMi = 1500
 const mpg30 = 30
 //the value of totalMi is 1500 because that's the total amount of miles for the trip
 //the value of mpg30 is 30 because that's the amount of gallons it takes per mile while driving 
 //55 mph.

 console.log(`'totalMi' is assigned a value of "${totalMi}," and 'mpg30' is assigned a value of "${mpg30}." 
 Therefore, 'totalMi' divided by 'mpg30' is equal to ${totalMi % mpg30}.`);
 //I solved what the amount of gallons would be for the trip which is totalMi (1500) the total amount of miles of the trip
 //divided by the amount of amount of miles per galon which is 30 or mpg30. The result is 50 gallons.


 //part two question two
 const amtMi = 50

 //I got the value of amtMi because I divided the total miles of the trip totalMi - 1500
// divided by mpg30 - 30 mpg when the car is going at 55mph which then equals 
// 50 gallons needed. 

 const gasPri = 3
 // gasPri has the value of 3 because that is the price per gallon

 const amtMi = (totalMi % mpg30) === 50
 
 console.log(`'amtMi' is assigned a value of "${amtMi}," and gasPri is assigned a value of "${gasPri}." 
 So, 'amtMi' multiplied by 'gasPri' is equal to ${amtMi * gasPri}.`);

 //part two question 3

 const milPh = 55

 //milPh has the value of 55 because that's the mph that the car travels at 30mpg.

 const ttlHr = (totalMi % milPh) === 27.27

 //ttlHr has the value of 27.27 because the total amount of miles per trip, 1500 (totalMi)
//divided by the 55mph (milPh) is 27.27, the amount of hours the trip will take.

console.log(`'totalMi' is assigned a value of "${totalMi}," and 'milPh' is assigned a value of "${gasPri}."
Thus, 'totalMi' divided by 'milPh' is equal to ${totalMi % milPh}.`);

// What makes the most sense to travel at which speed for the duration of the trip is
// to travel 55mph because it is the most fuel-efficient, only costing 30 gallons at $3/per gallon
//which costs $150 and is under budget, whereas going 60mph, with 28 mpg the total amount of gallons used
// would be 53, 53 x 3 = $160, which is higher in costs, and finally, going 75mph with a 23mpg
// would cost about 65 gallons, which is $195 and over budget.

