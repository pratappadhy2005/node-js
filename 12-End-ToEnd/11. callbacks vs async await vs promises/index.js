async function a() {
    console.log("A1");
    await null;
    console.log("A2");
}

console.log("B1");

setTimeout(() => console.log("B2"));

a();

Promise.resolve().then(() => console.log("B3"));

console.log("B4");


console.log("================");

async function a1() {
    console.log("A11");
    await null;
    console.log("A22");
}

console.log("B12");

setTimeout(() => console.log("B22"));

a1();

Promise.resolve().then(() => console.log("B33"));

console.log("B44");

console.log("================");

// Write execution order with comments 

/**Why it interleaves like that

Think in three phases:

1) All synchronous(call stack)

Runs straight through both blocks until the stack is empty:

First block sync: B1, A1, B4, ================

Second block sync: B12, A11, B44

So far:

B1
A1
B4
================
B12
A11
B44

2) Microtasks (Promises and await continuations)

By the time sync code finishes, these microtasks have been queued in this order:

A2 (continuation of first await null)

B3 (Promise.then in first block)

A22 (continuation of second await null)

B33 (Promise.then in second block)

So microtasks run as:

A2
B3
A22
B33

3) Macrotasks (timers)

Then the timers fire (queued earlier first):

B2

B22

So:

B2
B22
**/