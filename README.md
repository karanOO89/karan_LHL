# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @karan_gaba/lotide`

**Require it:**

`const _ = require('@karan_gaba/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: when passed 2 arrays, give results about whether they are equal or not.
* `assertEqual`: when passed pieces of primitive data,give results about whether they are equal or not.
* `assertObjectsEqual`: when passed pieces of object data,give results about whether they are equal or not
* `countLetters`: counts the non-space characters of a string passed as an argument.
* `eqArrays`: returns true or false when passed 2 arrays, based on whether they are equal
* `eqObjects`: returns true or false when passed 2 objects, based on whether they are equal
* `findKey`: returns the key of an object based on the result of a callback function
* `findKeyByValue`: returns the key of an object based on the value
* `flatten`: returns a flattened version of nested arrays
* `head`: returns the first index of an array
* `letterPositions`: takes 2 arguments of strings, one sentence and one letter. returns the position of the letter in the
                     sentence.
* `map`: takes an array argument and a callback function, returns a new array based on the evaluation of the callback function
         on each item.
* `middle`: returns the one (if odd) or 2 (if even) middle indeces of an array
* `tail`: returns all but the first index in an array
* `takeUntil`: takes an array argument and a callback function, executes the callback on each item in the array and returns a
               new array consisting of every item up until the point at which the callback funcion evalutated to true.
* `without`: takes 2 arguments, an array and an element, and returns a new array with every element other than the one in
             specified in the arguments.
* `eqArraysRecurrsion`: returns true or false when passed 2 arrays, based on whether they are equal with recurssion method
* `eqObjectsRecurrsion`: returns true or false when passed 2 objects, based on whether they are equal with recurssion method