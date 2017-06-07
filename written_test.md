## Written Portion (40 min)
This part of the test is closed book!

1. You've started a project in JavaScript, but for some reason your runtime lacks the `map` function! Attach one to the `Array` prototype!

```js

/* As a reminder, `map` takes a callback function and returns a *new* array, with each new value created by the output of the callback function. So:

const arr = [1,2,3];
arr.map((val) => val * val) // [1,4,9]

*/

```

Please write your answer [here](./map.js)
Array.prototype.map = function(cb){
	let resultArr = [];
	for(let i=0; i<this.length; i++){
		resultArr.push(cb(arr[i]))
	}
	return resultArr
}

2. What is a React `component`?

---
> Your answer here...
---
an object that resutls in HTML content.

3. You can define a React component a few different ways, including (1) as a simple function or (2) as a class that extends the `Component` piece of the React library. How should you decide when to use which syntax?

---
> Your answer here...
---

if your component doesn't require managing state, use the simple function.  Use the class only when requiring state.

4. Please transpile the following JSX code into JavaScript that the browser can understand:

```js
<div>
    <h1 className='headline'>Hello Dojo!</h1>
</div>
```

---
> Your answer here...
---

5. Reverse an array. Write a function that accepts an array and returns *the same array* with the values reversed.

```js
const arr = [1,2,3];
reverseArr(arr);
console.log(arr) // [3,2,1];
```

Please write your answer [here](./reverseArr.js)
function reverseArr(arr) { 
	let resultArr = [];
	for(let i=arr.length-1; i>=0; i--){
		resultArr.push(arr[i])
	}

	arr = resultArr;
}

6. How does using the `new` keyword affect a function's behavior in JavaScript?

---
> Your answer here...
---
creates a new object.  and provides access with 'this'

7. What is the best thing?
* A) Callbacks
* B) Objects
* C) Promises
* D) Pushing to Github

---
> Your answer here...
---
C - promises
Done! Time to start the [React app](./app-details.md)!