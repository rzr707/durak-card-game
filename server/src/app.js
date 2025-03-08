"use strict";

function add(a, b) {
    return a + b;
}


function helloWorld() {
    console.log("Hello World!");
}


// `npm test` will run this function too despite
// that only `add` func is explicitly tested.

// The reason helloWorld() gets called during your
// tests is that helloWorld() is executed immediately
// when the file is imported into your test file.
// In JavaScript, when you require() a file, all the
// code in that file is executed immediately,
// including function calls.
helloWorld();

module.exports = { add };
