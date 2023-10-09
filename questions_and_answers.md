<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B: ReferenceError: greetign is not defined

<i>1st declare a variable as greeting name by let, then assign an object in greetign. So this greetign veriable reference not store our memory. So we can not access greetign. So output will be an error greetign is not defined</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, '2');
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C: "12"

<i>line-2: Is a return, we know always every function has return something, if we don't any return function by default return undefined. So this is a summetion function, it return summention value, so we use return in function body for get summetion value.
line-5: This is a function call. We know, a function is working when it will call. So here we call the function with parameter, cause our function want two number for summetion by parameter value.
</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ['🍕', '🍫', '🥑', '🍔'];
const info = { favoriteFood: food[0] };

info.favoriteFood = '🍝';

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A: `['🍕', '🍫', '🥑', '🍔']`

<i>First of all, we take a variable name is food and assign an array,here some food item. Then we take a another variable name is info and assign an object, this object have one property and value, the property is favoriteFood but the value come from our food array, food[0] means our object value will be our food array first item. So we can assume our info output is - {favoriteFood: '🍕'}. Next line we update our info object favoriteFood property value by '🍝'. and last line we are console.log(food). Since we are not changed any value of food array, so it's remain same like before. so our console output will be an array look like ['🍕', '🍫', '🥑', '🍔']</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B:`Hi there, undefined`

<i>First of all, we take a function which name is sayHi. It take a value from parameter and it return Hi there and the parameter name, here using template string, that means, when the function will invoked, it wants a parameter value, here we input any data, this value showing in template string as daynamic value at ${name} place.</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C: 3

<i>First of all we take a variable name is count and which value is 0. Then take an array name is nums and value is [0,1,2,3]. now we use forEach array method on nums array. It runs every nums element for one time. forEach method take a callback function. And this callback function find parameter, 1st parameter will be our nums array every element, we take it as num, and num value change every loop, and this loop go throw our every nums array element. So we can assume that, num will be 0,1,2,3 | now in forEach we check condition that, if num available or true then count += 1, means count increase 1 with it's previous value. So, our 1st condition we found / if(0) count += 1 /it look like this. So we know JavaScript is not a strict type language, and also javascript assume single 0 as a boolean false. Ultimately here we found false therefore we can not enter if block so our count value remain 0. then the num value come 1,2,3 respectively. this time javascript denote all value are true and we can enter the if block and increaes count value 1 for 3 times. cause 1st time skip for false value. so ultimately we found count total is 3.</i>

</p>
</details>
