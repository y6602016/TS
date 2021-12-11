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


// function
const add = (a: number, b: number): number => {
  return a + b;
}

// function destructure
// paramter = (object : annotation(property and property's type))
const logWeather = ({date, weather}: {date: Date; weather: string;}): void => {
  console.log(date);
  console.log(weather);
}

const todayWeather = {
  date: new Date(),
  weather: 'sunny'
};

logWeather(todayWeather);

// object
const profile = {
  age: 20,
  _name: 'alex',
  coords: {
    lat: 0,
    lng: 15
  },
  setAge(age: number): void{
    this.age = age;
  }
};

// if destructure the property of the object
// need to explicitly declare it's type definded in the object
const {age, _name} : {age: number, _name: string} = profile;
const {coords: {lat, lng}} : {coords: {lat: number; lng: number}} = profile;