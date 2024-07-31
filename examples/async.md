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

## The Loop
https://www.youtube.com/watch?v=cCOL7MC4Pl0&ab_channel=JSConf
https://www.youtube.com/watch?v=8aGhZQkoFbQ&ab_channel=JSConf

---

# Echo

```js
function echo(msg) {
    setTimeout(()=>{
        console.log(msg)
    },2000)
}

wynik = echo('Ala ma kota')

console.log(wynik, 'juz')

123

// undefined 'juz'
// 123
// Ala ma kota
```

---

#   Hollywod Principle 
```js
// CSP Continuation Passing Style / Callback / Wywołanie zwrotne

function echo(msg, callback) {
    setTimeout(()=>{
        callback(msg)
    }, 2_000)
}

echo('Ala ma kota', ComA )

echo('Ala ma banana', ComB), 


 function ComA(msg) {
     console.log('A',msg)
 }

 function ComB(msg) {
     console.log('B',msg)
 }

// 2 sec ..

// A Ala ma kota
// B Ala ma banana
```


# callback pyramid of doom

```js
function echo(msg, callback) {
    setTimeout(()=>{
        callback(msg)
    }, 2_000)
}

echo('Ala', res => {
     echo(res + ' ma ', res => {
        echo(res + ' kota ', res => {
            console.log(res)
        })
     })
})

// 6 sec...
// Ala ma  kota 
```
---

# new Promise

```js
function echo(msg) {
    return new Promise((resolve)=>{       
        setTimeout(()=>{
            resolve(msg)
        }, 2_000)
    }) 
}

promise = echo('Ala')

// ----

promise.then(console.log) 
promise.then(console.log) 
// Promise {<pending>}
// 2 sec..
// Ala

promise.then(console.log)
console.log('juz')
// juz
// Ala

```