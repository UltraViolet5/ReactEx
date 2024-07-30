

## Reduce

```js

[1,2,3,4,5].map( x =>  x*2 )
// (5) [2, 4, 6, 8, 10]

[1,2,3,4,5].reduce( (sum,x) => {
    console.log(`${sum} + ${x} = ${sum+x}`)
    return sum + x
}, 0)

// 0 + 1 = 1
// 1 + 2 = 3
// 3 + 3 = 6
// 6 + 4 = 10
// 10 + 5 = 15

// 15

```

# Monoid

[1,2,3] + [] == [1,2,3]
'text' + '' = 'text'
123 + 0 = 123
123 * 1 = 123

state + {...state } == state
{y:123} + {...state, x:1 } == {x:1, y:123}