

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


# Destructure, spread

```js
obj1 = {a:1, b:2,       };
obj2 = {a:'x',    c: 'y'};
obj3 = {...obj1, ...obj2, d:'z'};
// {a: 'x', b: 2, c: 'y', d: 'z'}

```

```js
nested = {q:1}

obj1 = {a:1, b:2,    nested   };
obj2 = {a:'x',    c: 'y'};
obj3 = {...obj1, ...obj2, d:'z'};
// {a: 'x', b: 2, nested: {…}, c: 'y', d: 'z'}
obj3.a = 'zmiana'
// 'zmiana'
obj2.a
// 'x'
obj3.nested.q = 2 
// 2
obj1.nested
// {q: 2}
```

```js
nested = {q:1}

obj1 = {a:1, b:2,    nested   };
obj2 = {a:'x',    c: 'y'};
obj3 = {...obj1, ...obj2, d:'z', nested:{  ...obj1.nested } };
// {a: 'x', b: 2, nested: {…}, c: 'y', d: 'z'}
```