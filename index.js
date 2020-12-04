const date = new Date();
const n = date.toDateString();
const time = date.toLocaleTimeString();

const d1 = new Date();
console.log(d1);
const result = d1.getTime();

console.log('Date: ' + n);
console.log('Time: ' + time);
console.log(`From January 1st 1970 to ${n}, is`, result,"milliseconds");

/* 
Output:

Date: (Week Day) (Month) (Day) (Year)
Time: (Hour):(Min):(Sec) (Period)
January 1st 1970 to (Weekday) (Month) (Day) (Year), is (millionseconds) milliseconds

Example:
Date: Thu Dec 03 2020
Time: 10:54:24 PM
January 1st 1970 to Thu Dec 03 2020, is 1607064864296 milliseconds
*/
