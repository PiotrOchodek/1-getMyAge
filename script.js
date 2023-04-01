const getAge = (input) => {
  return Math.floor((Date.now() - Date.parse(input)) / 31556952000);
};

const myAge = getAge(1990, 1, 1);
const myAge2 = getAge('1990');
const myAge3 = getAge(new Date(1990, 1, 1));
console.log(myAge);
console.log(myAge2);
console.log(myAge3);
