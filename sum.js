/*
theSum function
[1] Return 0 if there is no number
[2] Return the numbre one + two 
[3] Return the numbre one + two + tree 
[4] Return the numbre one + two + tree + four 
[5] Return the total
*/
const theSum = (...numbers) => numbers.reduce((pv, cv) => pv + cv, 0);

module.exports = theSum;
