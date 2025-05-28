
# 🧰 Snappy Utils

A lightweight and efficient JavaScript utility library packed with commonly used helper functions like `capitalize`, `debounce`, `deepClone`, `flattenArray`, `isPrime`, and more. Designed to make everyday development easier and cleaner.

---

## 🚀 Features

- ✅ Capitalize strings
- ✅ Debounce functions
- ✅ Deep clone objects/arrays
- ✅ Flatten nested arrays
- ✅ Format dates
- ✅ Check for prime numbers
- ✅ Merge objects
- ✅ Generate random numbers in a range
- ✅ Truncate strings
- ✅ Get unique values from arrays

---

## 📦 Installation

```bash
npm install snappy-utils
```

or with yarn:

```bash
yarn add snappy-utils
```

---

## 🛠️ Usage

```js
import {
  capitalize,
  debounce,
  deepClone,
  flattenArray,
  formatDate,
  isPrime,
  mergeObjects,
  randomInRange,
  truncateString,
  uniqueArray
} from 'snappy-utils';

console.log(capitalize("hello")); // "Hello"
console.log(flattenArray([1, [2, [3]]])); // [1, 2, 3]
console.log(isPrime(7)); // true
```

---

## 📂 File Structure

```
├Utils/
  ├── capitalize.js
  ├── debounce.js
  ├── deepClone.js
  ├── flattenArray.js
  ├── formatDate.js
  ├── isPrime.js
  ├── mergeObjects.js
  ├── randomInRange.js
  ├── truncateString.js
  ├── uniqueArray.js
├ index.js          # Exports all functions
├ package.json
└ README.MD
```

---

## 📚 Functions Reference

### `capitalize(string)`
Capitalize the first letter of a string.

### `debounce(func, delay)`
Limit how often a function is executed.

### `deepClone(obj)`
Deeply clone an object or array.

### `flattenArray(arr)`
Flatten deeply nested arrays into a single-level array.

### `formatDate(date)`
Format a date object into a readable string.

### `isPrime(num)`
Check whether a number is prime.

### `mergeObjects(obj1, obj2)`
Merge two objects into one.

### `randomInRange(min, max)`
Generate a random number within a given range.

### `truncateString(str, maxLength)`
Truncate a string and add `...` if it exceeds the specified length.

### `uniqueArray(arr)`
Return a new array with only unique values.

---

## 📄 License

ISC

---

## 🧑‍💻 Author

Made with 💙 by Prem Chavan

