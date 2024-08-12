// Code Along Norms: 
// 1. Only be on Repl.it/classroom resources
// 2. Actively follow along and engage
// 3. Ask questions and flag if you get stuck
// 4. Take notes as needed!

let name= prompt("what's your name?")
// With a  + sign, need to add a space
console.log("Welcome to my game, " + name)
//With a , sign, spaces addded automatically
console.log("Welcome to my game, ", + name)
//STRING INTERPOLATION
//With backkticks, you can input variables directley
console.log(`Welcome to my game, ${name}`)

let role = prompt ("What role do you want?(magician, figheter, peasent)")
console.log(`Okay, ${name}, your role  is now ${role}.`)

//Prompt  assummes the input is a string
let powerLevel = parseInt("What is your powerlevel?")
//To change it to a number , useparseInt/parseFloat
powerLevel = parseInt(powerLevel)
///let powerLevelNum = arseInt(powerLevel)
//console.log(typeof powerLevel)