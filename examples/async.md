# Async 

```js
$('input').addEventListener('keyup', e => console.log(e.target.value)) // Event Queue

console.log(1) // sync 

setTimeout(() => console.log(2), 0 /* ASAP */ ) // (Macro) Task Queue

Promise.resolve(3).then(console.log) // Micro task queue

console.log(4)  // sync 

start = Date.now()

while (start + 5_000 > Date.now()) { } // BLOCKING

console.log(5)  // sync 


1 // sync 
4 // sync 

// 5 sec blocking...

5 // sync 

3 // Micro task queue

'a'  // Event Queue
'al'
'ala'

2 // (Macro) Task Queue

```