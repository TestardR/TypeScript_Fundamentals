// compiling and variables

const n = 5;

const dec = 5.232;

const obj = {
  x: 5,
  y: 9.4
};

// explicit definitions
const a: number = 5.23;
const obj1: { x: number; y: number } = {
  x: 22,
  y: 3.2
};

// using interface

interface myObj {
  x: number;
  y: number;
  z?: number; // optional
}

const obj2: myObj = {
  x: 22,
  y: 33
};

const obj3: myObj = {
  x: 101,
  y: 222
};

obj3.z = 22;

// functions

const add = (x: number, y: number) => x + y;
const sum: (x: number, y: number) => number = (x: number, y: number) => x + y;

type AddFunc = (x: number, y: number) => number;

const add1: AddFunc = (x: number, y: number) => x + y;

add1(123, obj3.z);

const add2 = (nums: { a: number; b: number }) => nums.a + nums.b;

// unions

// number or string
let maybeNum: number | string | boolean | AddFunc = 5;
maybeNum = 'hello';
maybeNum = add;

interface Dog {
  bark: string;
}

interface Cat {
  purr: string;
}

type DogCat = Dog & Cat;

let dogCat: DogCat = {
  bark: 'bark',
  purr: 'purr'
};

if (typeof dogCat === 'string') {
  console.log('you are a string');
}

// casting
// force typescript
add(dogCat as any, dogCat as any);

// any

const doesAnything = (x: any) => {
  console.log(x);
};

doesAnything({});
doesAnything(() => 5);
