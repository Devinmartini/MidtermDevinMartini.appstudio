
const myAnimals= ['dog', 'cat', 'horse', 'meerkat']

name= prompt('Enter an animal:')
name= name.toLowerCase()
animalNames= myAnimals.push(name)

alert(`The last animal is a ${myAnimals[myAnimals.length-1]}.`)
