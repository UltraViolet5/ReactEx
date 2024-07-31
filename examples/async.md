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

## Promise chain + flatMap

```js


 // echo('Ala').then(res => {
 //     echo(res + ' ma ').then((res) => {
 //         echo(res + ' kote ').then((res) => {
 //                console.log(res)
 //         })
 //     })
 // })

p = echo('Ala')
p1 = p.then((res) => res + ' ma ' )
p2 = p1.then((res) => echo(res + 'kota') )

p2.then(console.log)

```


## Flatten
```js
// callback pyramid of doom

function echo(msg) {
    return new Promise((resolve)=>{       
        setTimeout(()=>{
            resolve(msg)
        }, 2_000)
    }) 
}

 p = echo('Ala')
     .then(res => echo(res + ' ma '))
     
     p.then(res => echo(res + ' kota '))
     .then(res => console.log(res) )

     p.then(res => echo(res + ' pieseła '))
     .then(res => console.log(res) ) 
 
```

# Promise error handling

```js
function echo(msg, err) {
    return new Promise((resolve, reject)=>{       
        setTimeout(()=>{
            err ? reject(err) : resolve(msg)
        }, 2_000)
    }) 
}

 p = echo('Ala', 'Ups..')
     .then(res => echo(res + ' ma '))
     
     p
     .then(res => echo(res + ' kota ',' Upss' ))
     .catch(err => ('Nie ma kota!'))
     .then(res => console.log(res) ) //  Nie ma kota!

     p
     .then(res => echo(res + ' pieseła '))
     .then(res => console.log(res) ) // Uncaught (in promise) Ups..

// Nie ma kota!
//  Uncaught (in promise) Ups..
```

# Promise .all, .allSettled, .race

```js
 p = echo('Ala')
     .then(res => echo(res + ' ma '))
     
     pKot = p.then(res => echo(res + ' kota ' ))
             .then(res => echo(res )) 

     pPies = p.then(res => echo(res + ' pieseła '))

    // Natural transformation
    Promise.all([ pKot, pPies ]).then(res => console.log(res) ) 
 
// Promise {<pending>}
// ['Ala ma  kota ', 'Ala ma  pieseła ']


Promise.allSettled([ pKot, pPies ]).then(res => console.log(res) ) 
// 0: {status: 'fulfilled', value: 'Ala ma  kota '}
// 1: {status: 'rejected', reason: 123}
```

# Fetch

```js
fetch('http://localhost:5173/albums.json')
    .then(resp => resp.json() )
    .then(data => console.log(data) )
```