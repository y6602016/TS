import axios from 'axios';

const url = 'https://jsonplaceholder.typicode.com/todos/2';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url).then(res => {
  const todo = res.data as Todo;

  const id = todo.id;
  const title = todo.title;
  const completed = todo.completed;

  logTodo(id, title, completed);  
});


const logTodo = (id: number, title: string, completed: boolean) => {
  console.log(`
    The todo with id: ${id}
    Has a titke of: ${title}
    Is it finished?: ${completed}
  `)
}



// When to use annotations
// (1) Fucntion that returns the 'any' type
const json = '{"x": 10, "y": 20}';
// JSON.parse defautly return any type
const coordinate: {x: number; y: number} = JSON.parse(json)
console.log(coordinate); // {x: 10, y :20} 

// (2) When decalare a variable on one line
// and initialize if later
let words = ['red', 'green', 'blue'];
let foundWord: boolean; // declare it's type, we'll use it later
for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = false;
  }
}

// (3) When inference incorrectly
let numbers = [-10, -1, 12];
// declare it's type boolean or number, if use inference, it can't inference
// what we reaaly need, so declare the options of type, no inference
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    // numberAboveZero can be boolean or number
    numberAboveZero = numbers[i];
  }
}