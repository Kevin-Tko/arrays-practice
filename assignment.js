//creating an array
const numberArray = [2, 10, 4, 67, 83, 1, 99, 3, 25];

//filtering the array for nubers grater than 5
const filteredNumbersArray = numberArray.filter((num) => {
    return num > 5;
});
console.log(filteredNumbersArray);

//mapping array elements
const mappedNumbersArray = numberArray.map((number) => {
    return { num: number };
});
console.log(mappedNumbersArray);

//reducing the array into a single number through multiplication
const multiplicationOutput = numberArray.reduce((prevNum, currNum) => {
    return prevNum * currNum;
}, 1);
console.log(multiplicationOutput);

//finding the maximum number of our array
const findMax = (...numbers) => [Math.max(...numbers), Math.min(...numbers)];
const [maximum, minimum] = findMax(...numberArray);
console.log(maximum, minimum);

//Creating a set - It will eliminate the ducplicated values
const newNumberArray = [2, 2, 10, 4, 67, 83, 83, 1, 99, 3, 25];

const newSet = new Set(newNumberArray);
console.log(newSet);
