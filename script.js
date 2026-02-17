const questionElement = document.querySelector(".que-text");
const optionsElement = document.querySelector(".option-list");
const nextButton = document.querySelector(".next-btn");
const infoBox = document.querySelector(".info-box");
const resultBox = document.querySelector(".result-box");
const restartButton = document.querySelector(".buttons .restart");
const quitButton = document.querySelector(".buttons .quit");


let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerText = "Next";
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  questionElement.innerText = currentQuestion.question;

  currentQuestion.answers.forEach(answer => {
    const button = document.createElement("button");
    button.innerText = answer.text;
    button.addEventListener("click", selectAnswer);

    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }

    answerButtons.appendChild(button);
  });
}





























const questions = [
  {
    question: "What is the correct syntax for referring to an external script called 'script.js'?",
    options: [
      "<script href='script.js'>",
      "<script name='script.js'>",
      "<script src='script.js'>",
      "<script file='script.js'>"
    ],
    answer: "<script src='script.js'>"
  },
  {
    question: "Which of the following is not a valid JavaScript variable name?",
    options: [
      "myVariable",
      "_variable",
      "$variable",
      "1stVariable"
    ],
    answer: "1stVariable"
  },
  {
    question: "How do you write a comment in JavaScript?",
    options: [
      "// This is a comment",
      "<!-- This is a comment -->",
      "/* This is a comment */",
      "** This is a comment **"
    ],
    answer: "// This is a comment"
  },
  {
    question: "Which method converts a JSON string into a JavaScript object?",
    options: [
      "JSON.parse()",
      "JSON.stringify()",
      "JSON.toObject()",
      "JSON.convert()"
    ],
    answer: "JSON.parse()"
  },
  {
    question: "What does the `this` keyword refer to in JavaScript?",
    options: [
      "The current function",
      "The global object",
      "The object that 'owns' the current code",
      "The previous function in the call stack"
    ],
    answer: "The object that 'owns' the current code"
  },
  {
    question: "Which method is used to add an element at the end of an array?",
    options: [
      "push()",
      "pop()",
      "shift()",
      "unshift()"
    ],
    answer: "push()"
  },
  {
    question: "What will the following code output: `console.log(0.1 + 0.2 === 0.3);`?",
    options: [
      "true",
      "false",
      "undefined",
      "NaN"
    ],
    answer: "false"
  },
  {
    question: "How do you convert a string to an integer in JavaScript?",
    options: [
      "parseInt()",
      "parseFloat()",
      "toString()",
      "Number()"
    ],
    answer: "parseInt()"
  },
  {
    question: "What is the result of the following code: `console.log([2] == [2]);`?",
    options: [
      "true",
      "false",
      "undefined",
      "NaN"
    ],
    answer: "false"
  },
  {
    question: "Which keyword is used to declare a block-scoped variable?",
    options: [
      "`var`",
      "`let`",
      "`const`",
      "`int`"
    ],
    answer: "`let`"
  },
  {
    question: "What is a closure in JavaScript?",
    options: [
      "A way to close a function",
      "A function having access to its parent scope even after the parent function has closed",
      "A built-in method for closing an object",
      "A security feature in JavaScript"
    ],
    answer: "A function having access to its parent scope even after the parent function has closed"
  },
  {
    question: "What does the `==` operator do in JavaScript?",
    options: [
      "Checks for strict equality (value and type)",
      "Checks for loose equality (value only)",
      "Assigns a value",
      "Compares object references"
    ],
    answer: "Checks for loose equality (value only)"
  },
  {
    question: "Which of the following is a non-primitive data type?",
    options: [
      "number",
      "string",
      "boolean",
      "object"
    ],
    answer: "object"
  },
  {
    question: "Which array method creates a new array with all elements that pass a test implemented by the provided function?",
    options: [
      "map()",
      "filter()",
      "reduce()",
      "forEach()"
    ],
    answer: "filter()"
  },
  {
    question: "Which method is used to remove the last element from an array?",
    options: [
      "push()",
      "pop()",
      "shift()",
      "unshift()"
    ],
    answer: "pop()"
  },
  {
    question: "What is the Temporal Dead Zone (TDZ)?",
    options: [
      "A location in memory where variables are stored",
      "The time between a variable's declaration and its initialization when using `let` and `const`",
      "A feature that slows down JavaScript execution",
      "A specific time zone setting in the Date object"
    ],
    answer: "The time between a variable's declaration and its initialization when using `let` and `const`"
  },
  {
    question: "Which method is used to execute a function on each element in an array and return a single output value?",
    options: [
      "map()",
      "filter()",
      "reduce()",
      "forEach()"
    ],
    answer: "reduce()"
  },
  {
    question: "What does the `bind()` method do?",
    options: [
      "Executes a function immediately",
      "Attaches an event listener to an element",
      "Returns a new function with the `this` context permanently bound to a specific object",
      "Converts a function to a string"
    ],
    answer: "Returns a new function with the `this` context permanently bound to a specific object"
  },
  {
    question: "Which keyword is used to handle asynchronous operations and wait for a Promise to resolve?",
    options: [
      "`wait`",
      "`defer`",
      "`async`",
      "`await`"
    ],
    answer: "`await`"
  },
  {
    question: "What will the following code print: `const obj = { a: 1 }; const obj2 = { ...obj, a: 2 }; console.log(obj2);`?",
    options: [
      "`{ a: 1 }`",
      "`{ a: 2 }`",
      "`{ a: 1, a: 2 }`",
      "`undefined`"
    ],
    answer: "`{ a: 2 }`"
  },
  {
    question: "What are variables used for in JavaScript Programs?",
    options: [
      "Storing numbers, strings, and other data",
      "Performing mathematical calculations",
      "Changing HTML elements dynamically",
      "Defining functions"
    ],
    answer: "Storing numbers, strings, and other data"
  },
  {
    question: "Which tag is an extension to HTML that can enclose any number of JavaScript statements?",
    options: [
      "`<javascript>`",
      "`<script>`",
      "`<js>`",
      "`<code>`"
    ],
    answer: "`<script>`"
  },
  {
    question: "Where do we put the JavaScript inside an HTML element?",
    options: [
      "`<head>`",
      "`<body>`",
      "Both `<head>` and `<body>` are valid",
      "`<footer>`"
    ],
    answer: "Both `<head>` and `<body>` are valid"
  },
  {
    question: "What does 'use strict' do?",
    options: [
      "Enforces strict type checking in JavaScript",
      "Enables all new ES6 features",
      "Turns on strict mode, which enforces cleaner coding practices and helps catch errors",
      "Prevents a script from running if any error is present"
    ],
    answer: "Turns on strict mode, which enforces cleaner coding practices and helps catch errors"
  },
  {
    question: "Which method is used to remove the first element from an array?",
    options: [
      "push()",
      "pop()",
      "shift()",
      "unshift()"
    ],
    answer: "shift()"
  },
  {
    question: "What is the difference between `null` and `undefined`?",
    options: [
      "`null` means a variable has no value, while `undefined` means a variable has been declared but not assigned a value.",
      "`undefined` means a variable has no value, while `null` means it hasn't been declared.",
      "They are the same thing.",
      "`null` is an object, `undefined` is a string."
    ],
    answer: "`null` means a variable has no value, while `undefined` means a variable has been declared but not assigned a value."
  },
  {
    question: "Which property is used to get the number of elements in an array?",
    options: [
      "count",
      "size",
      "length",
      "index"
    ],
    answer: "length"
  },
  {
    question: "What is the purpose of the `typeof` operator?",
    options: [
      "To check if a variable is defined",
      "To return the data type of a variable or expression",
      "To perform type casting",
      "To create a new variable"
    ],
    answer: "To return the data type of a variable or expression"
  },
  {
    question: "Which function is used to print content to the browser console?",
    options: [
      "alert()",
      "document.write()",
      "console.log()",
      "print()"
    ],
    answer: "console.log()"
  },
  {
    question: "How do you declare a constant variable in JavaScript?",
    options: [
      "`var`",
      "`let`",
      "`const`",
      "`constant`"
    ],
    answer: "`const`"
  },
  {
    question: "Which symbol is used for comments in JavaScript?",
    options: [
      "//",
      "<!-- -->",
      "/* */",
      "#"
    ],
    answer: "//"
  },
  {
    question: "What are arrow functions?",
    options: [
      "Functions with a special arrow syntax (`=>`) that are shorter and do not bind their own `this` value",
      "Functions used for drawing arrows on an HTML canvas",
      "A new data type in JavaScript",
      "Functions that only return boolean values"
    ],
    answer: "Functions with a special arrow syntax (`=>`) that are shorter and do not bind their own `this` value"
  },
  {
    question: "What is the result of `null + 1`?",
    options: [
      "`1`",
      "`NaN`",
      "`Error`",
      "`undefined`"
    ],
    answer: "`1`"
  },
  {
    question: "What is the result of `undefined + 1`?",
    options: [
      "`1`",
      "`NaN`",
      "`Error`",
      "`undefined`"
    ],
    answer: "`NaN`"
  },
  {
    question: "Which operator is used to check for the existence of a property in an object or its prototype chain?",
    options: [
      "`of`",
      "`in`",
      "`has`",
      "`exists`"
    ],
    answer: "`in`"
  },
  {
    question: "What is an event loop in JavaScript?",
    options: [
      "A loop that iterates over array elements",
      "A mechanism that allows JavaScript to perform non-blocking operations despite being single-threaded",
      "A specific type of `for` loop",
      "A function that handles all user interactions"
    ],
    answer: "A mechanism that allows JavaScript to perform non-blocking operations despite being single-threaded"
  },
  {
    question: "Which of the following methods are used to manipulate arrays?",
    options: [
      "push(), pop(), shift(), unshift()",
      "add(), remove(), first(), last()",
      "append(), delete(), start(), end()",
      "insert(), eject(), top(), bottom()"
    ],
    answer: "push(), pop(), shift(), unshift()"
  },
  {
    question: "What is the difference between `call()`, `apply()`, and `bind()`?",
    options: [
      "They are all identical in functionality and syntax",
      "`call()` and `apply()` execute immediately while `bind()` returns a new function; `call()` takes separate arguments, `apply()` an array of arguments",
      "`bind()` executes immediately while `call()` and `apply()` return new functions",
      "They are used for different data types (strings, numbers, objects)"
    ],
    answer: "`call()` and `apply()` execute immediately while `bind()` returns a new function; `call()` takes separate arguments, `apply()` an array of arguments"
  },
  {
    question: "Which method would you use to create a shallow copy of an array?",
    options: [
      "Array.copy()",
      "Using the spread operator (`...`)",
      "JSON.stringify() and JSON.parse()",
      "Using the `slice()` method with no arguments"
    ],
    answer: "Using the spread operator (`...`)"
  },
  {
    question: "Which method is used to add an element at the beginning of an array?",
    options: [
      "push()",
      "pop()",
      "shift()",
      "unshift()"
    ],
    answer: "unshift()"
  },
  {
    question: "What does 'NaN' stand for?",
    options: [
      "Not a Number",
      "New array number",
      "Null and nothing",
      "Not any number"
    ],
    answer: "Not a Number"
  },
  {
    question: "What is a callback function?",
    options: [
      "A function that is called by the browser automatically",
      "A function passed as an argument to another function, to be executed later",
      "A function that calls itself repeatedly",
      "A function that returns another function"
    ],
    answer: "A function passed as an argument to another function, to be executed later"
  },
  {
    question: "What does ECMAScript refer to?",
    options: [
      "A specific version of the JavaScript language",
      "The official name of the JavaScript programming language standard",
      "A framework built with JavaScript",
      "A library for database interaction"
    ],
    answer: "The official name of the JavaScript programming language standard"
  },
  {
    question: "Which statement is true regarding variable scoping with `var`?",
    options: [
      "`var` has block scope",
      "`var` has function scope",
      "`var` has global scope only",
      "`var` is deprecated in modern JavaScript"
    ],
    answer: "`var` has function scope"
  },
  {
    question: "What are Promises used for in JavaScript?",
    options: [
      "Managing synchronous code flow",
      "Handling internationalization and localization",
      "Managing asynchronous operations (like API calls) more effectively",
      "Creating animations on a webpage"
    ],
    answer: "Managing asynchronous operations (like API calls) more effectively"
  },
  {
    question: "How do you check if a value is an Array?",
    options: [
      "typeof value === 'array'",
      "value instanceof Array",
      "Array.isArray(value)",
      "Both `value instanceof Array` and `Array.isArray(value)` are valid"
    ],
    answer: "Both `value instanceof Array` and `Array.isArray(value)` are valid"
  },
  {
    question: "What is the difference between an Array and an Object?",
    options: [
      "Arrays are only for numbers, objects for strings",
      "Arrays are indexed by numbers, while objects are indexed by strings (keys)",
      "Objects are ordered, arrays are unordered",
      "There is no difference, they are interchangeable"
    ],
    answer: "Arrays are indexed by numbers, while objects are indexed by strings (keys)"
  },
  {
    question: "Which of the following is not a primitive data type?",
    options: [
      "Number",
      "Boolean",
      "Array",
      "Undefined"
    ],
    answer: "Array"
  },
  {
    question: "What method is used to select an element by its ID in the DOM?",
    options: [
      "document.getElementsByClass()",
      "document.querySelector()",
      "document.getElementById()",
      "document.findByID()"
    ],
    answer: "document.getElementById()"
  },
  {
    question: "What is the output of `typeof function(){}`?",
    options: [
      "`\"object\"`",
      "`\"function\"`",
      "`\"undefined\"`",
      "`\"string\"`"
    ],
    answer: "`\"function\"`"
  },
  {
    question: "Which method is used to add one or more elements to the beginning of an array?",
    options: [
      "push()",
      "pop()",
      "shift()",
      "unshift()"
    ],
    answer: "unshift()"
  },
  {
    question: "What is the output of `console.log('5' - 3)`?",
    options: [
      "`\"53\"`",
      "`2`",
      "`\"2\"`",
      "`NaN`"
    ],
    answer: "`2`"
  }
];
