const myVariable = 'chima'
const myNumber = 45
const myFloat = 45.1256


console.log (myVariable.length)
console.log (typeof myVariable)
console.log (typeof myNumber)
console.log (myVariable.slice(2))
console.log (myVariable.slice(1,3))
console.log (myVariable.includes('im'))


console.log (Number.isInteger(myNumber))
console.log (Number.isInteger(myFloat))
console.log (Number.parseFloat(myFloat))
console.log (Number.parseFloat(45.44))
console.log (myFloat.toFixed(3))


console.log (Number.isNaN(myNumber))
console.log (myFloat.toString())

//Maths
console.log(Math.PI)
console.log(Math.floor(Math.PI))
console.log(Math.trunc(Math.PI))
console.log(Math.round(Math.PI))
console.log(Math.ceil(Math.PI))
console.log(Math.min(2,3,4,5,6))
console.log(Math.max(2,3,4,5,6))
console.log(Math.floor(Math.random()*10 + 1))
console.log(Math.floor(Math.random()*10 + 1))
console.log(Math.floor(Math.random()*10 + 1))



// code that gives a random number in my name
console.log('chima'.charAt(Math.floor(Math.random()*5)))
console.log('chima'.charAt(Math.floor(Math.random()*5)))
console.log('chima'.charAt(Math.floor(Math.random()*5)))
console.log('chima'.charAt(Math.floor(Math.random()*5)))

const anyName = 'PNEUMONOULTRAMICROSCOPICSILICAVOVANIOSIS'
console.log(anyName.charAt(Math.floor(Math.random()* anyName.length)))
