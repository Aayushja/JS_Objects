// Exercises: Level 1
// Q. Create an empty object called dog 

const dogi = {}

//Q. Print the the dog object on the console 

console.log(dogi)

// Q.  Add name, legs, color, age and bark properties for the dog object. The bark property is a method which return woof woof 

   const dog = {
       name: 'Goku',
       legs: 4,
       color: 'yellow',
       age: 5,
       bark: 'woof woof',

       //method
       getBarkProperties: function() {
           return ` ${this.bark} `
       }

   }
   console.log(dog)
   console.log(dog.getBarkProperties())


   //Q. Get name, legs, color, age and bark value from the dog object 

   console.log(dog.name)
   console.log(dog.legs)
   console.log(dog.color)
   console.log(dog.age)
   console.log(dog.bark)


   //Q. Set new properties the dog object: breed, getDogInfo

  //breed
   dog.breed ="Labra"
   console.log(dog.breed)

   //getDogInfo
   const dogy = {
    name: 'Goku',
    legs: 4,
    color: 'yellow',
    age: 5,
    bark: 'woof woof',

    //method
    getDogInfo: function() {
        return ` ${this.dogy} `
    }

}
console.log(dogy)
console.log(dogy.getDogInfo())


//Exercises: Level 2


const users = {
    Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
    }, 
   //JavaScript notes
    Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
    },
    Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
    },
    Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
    },
    John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
    },
    Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
    },
    Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: false,
    points: 40
    }
   }

   //Q. Find the person who has many skills in the users object.
   console.log(users.Asab.skills)
   
//Q.Count logged in users,count users having greater than equal to 50 points from the following object

//var count = Object.keys(users).length;
//console.log(count); 


//Q. Get all keys or properties of users object 

console.log(Object.keys(users))

//Q. Get all the values of users object 

console.log(Object.values(users))

//Q.  Use the countries object to print a country name, capital, populations and languages.


const countries = {
    name: 'India',
    Capital: 'New Delhi',
    populations: '1.3 B',
    bark: 'Hindi'
}
console.log(countries)
