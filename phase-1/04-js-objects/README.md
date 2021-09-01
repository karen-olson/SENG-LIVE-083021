### Segment 1: Creating and accessing objects

#### Create an object

Objects can be created with curly braces. They will contain key/value pairs with the key being the objects property

```
const pikachu = {
    name: 'Pikachu',
    img: 'www.img.com',
    likes: 0
}
```

#### Access and update object properties with dot and bracket

Going back to our cat example, if trying to access the value of the objects properties, can be done by using dot notation or bracket notation

```
timmy.breed
timmy['age']
```

#### When should bracket be used vs. dot

Go over when to use dot notation vs bracket notation in reference to using variables

```
function printName(obj, property) {
  return obj[property]
}

printName(timmy, 'name')
```

if using dot notation it will read property literally

```
function printName(obj, property) {
  return obj.property
}
```

Ask students to observe the nested object and think about how to return 'lighting-rod'

```
const pikachu = {
  name: "Pikachu",
  img: "www.img.com",
  likes: 0,
  abilities: [
    {
        name: "static",
    },
    {
        name: "lightning-rod",
    },
  ],
};

console.log(pikachu['abilities'][1]['name'])
```

Can use bracket and dot notation to add new property values to existing object

```
timmy.fave_snack = 'Cat Nip'

console.log(timmy)
```

#### Remove property using `delete` operator

```
delete timmy.fave_snack
```

### Modifying objects

spread operator

```
{...pikachu, color: "yellow"}
```

Can use Object.assign() as well

```
const copyOfPikachu = Object.assign({}, pikachu)
```

### Segment 2: looping through objects

#### Iterating through an object using for...in

Like arrays, we can use a for loop to loop through an objects keys

```
function objLoops(obj){
    for (const key in obj){
       console.log(obj[key])
    }
}

objLoops(pikachu)
```
