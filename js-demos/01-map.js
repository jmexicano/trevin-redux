const arr = [1,2,3,4,5,6,7,8,9,10, 15];

const fizzBuzz = arr.map(ele => {
  if(ele % 3 === 0) {
    if(ele % 5 === 0) {
      return 'fizz buzz';
    } else {
      return 'fizz';
    }
  } else if(ele % 5 === 0) {
    return 'buzz';
  } else {
    return ele
  }
});

console.log(arr);
console.log(fizzBuzz);

let expenses = [
  {
    id: 1,
    author: 'blake',
    amount: 5000
  },
  {
    id: 2,
    author: 'Jordan',
    amount: 2
  }
]

function updateExpense(expense) {
  expenses = expenses.map(exp => {
    if (exp.id !== expense.id) {
      return exp;
    } else {
      return {
        ...exp,
        ...expense
      };
    }
  });
}

console.log(expenses);
updateExpense({
  id: 2,
  author: 'Jordan',
  amount: 3
});
console.log(expenses);