// research on alert,console.log,prompt
console.log(Math.random())


// let v = `peace`
// window.alert(653789)
// window.prompt("what is your name?")


// const ask1=prompt("what is your first name")
// console.log(`${ask1}`)
// const ask2=prompt("what is your last name")
// console.log(`${ask2}`)

// ask1.concat(ask2)
// console.log(ask1.concat(ask2))
// let sta=prompt("which state are you from?")
// document.getElementById("state").textContent=`${sta}`
// let first=prompt("what is your name")
//  first=prompt("what is her name")
// console.log(`${first}`)
// const second=prompt("where are you from")
// console.log(`${second}`)
// const third=prompt("which school did you attend")
// console.log(`${third}`)
// const fourth=prompt("how old are you")
// console.log(`${fourth}`)
// const fifth=prompt("what is your favourite color")
// console.log(`${fifth}`)
// document.getElementById("earn").textContent=`${first} is your name and you are from ${second},you attended ${third} ,you are ${fourth} years old and your favourite color is ${fifth} `
const hot="CHUKWUEMEKA"
console.log(hot.length)
console.log(hot.slice(5))
console.log(hot[7])
console.log(hot[10])
console.log(hot[9])
console.log(hot[8])
// console.log((hot[7])+(hot[10])+(hot[9])+(hot[8]))

// let zz = hot[7].concat (hot[10], hot[9], hot[8])
// console.log(zz)
// console.log(zz.length)

// const a=Math.random()*1000000
// console.log(a)
// let b=Math.ceil(a)
// console.log(b)
// document.getElementById("ran").textContent = b

// l
// const ans1=prompt( "what is 6/2")
// console.log(`${ans1}`)
// const ans2=prompt( "what is 8/2")
// console.log(`${ans2}`)
// const ans3=prompt( "what is 10/2")
// console.log(`${ans3}`)
// let a=3
// let b=4
// let c=5

// if ( `${ans1}` ==a 
//     `${ans2}`==b  && `${ans3}` ==c) {
//     console.log(" wow! Earnest you are correct")
//     document.getElementById("ran").textContent = "WOW! Earnest you are correct"
// }
// else {
//     console.log ("you are wrong")
//     document.getElementById("ran").textContent = "simple question you can't solve"
// }
// let fun = prompt("who else do you want to date in our clas?")
// console.log(`${fun}`)
// document.getElementById("but").onclick=function(){
//     document.getElementById("ran").textContent=`so you liked  ${fun} and you did not say anything since , hahahhahahahahahah`
// }

// let u =["Earnest","Can", "Be","Annoying"]  
// u[2]="must"

// console.log(u)

// u.push("at", "times")
// console.log(u)
// // let a=u[3]
// document.getElementById("ran").textContent = u[3]
// let t=[ "earnest", "you ", "owe", "me" , 3000] 
// console.log(t)
// t.push("naira")
// console.log(t)
// t.shift()
// console.log(t)
// t.pop()
// console.log(t)
// (1, 2)
// console.log(t.shift()
// console.log(t)
// t.pop()
// console.log(t)
// t.unshift("earnest")
// console.log(t)
// t.splicet)
// let a=0

// document.getElementById("but1").onclick=function(){
//     document.getElementById("ran").textContent=a+=1
// }
// document.getElementById("but2").onclick=function(){
//     document.getElementById("ran").textContent=a-=2
// }
// document.getElementById("but3").onclick=function(){
//     document.getElementById("ran").textContent=`0`
// }
const person={
namee:"David",
age:"23",
address:"Rivers state",
adult: true
}
console.log(person.namee)
console.log(person.age)
console.log(person.address)
console.log((person.adult)?"David is an adult":"David is not an adult")
person.age=88
console.log(person.age)

const cars=[
car1= {
  make:"cyber truck"  ,
  model:"2020 model",
  speed:"240km/h"
},
car2={
    make:"toyota"  ,
    model:"2024 model",
    speed:"280km/h" 
},
car3={
    make:"bugati"  ,
  model:"2017 model",
  speed:"290km/h"
}
]
// console.log(cars.car1.make)
// console.log(cars.car2.make)
// console.log(cars.car3.make)

// console.log(cars [0].model)
// console.log(cars [1].speed)
// console.log(cars [2].speed)



// // for loop,while loop, for each loop
// for(i=0; i<cars.length ;i++)
//     // initializer,condition(breakpoint),count, then task
// console.log(cars[i])  
// const endGame1 =document.getElementById("endGame1")
// const endGame2 =document.getElementById("endGame2")
// const endGame3 =document.getElementById("endGame3")
// const btn1 =document.getElementById("btn1")
// const btn2 =document.getElementById("btn2")
// function addNumbers(a,b){
//   endGame1.textContent=a
//   endGame2.textContent=b
//   endGame3.textContent=a+b
// }
// function subtractNumbers(a,b){
//   endGame1.textContent=a
//   endGame2.textContent=b
//   endGame3.textContent=a-b
// }
// btn1.addEventListener("click", function(){
//   addNumbers(3,3)
// })
// btn2.addEventListener("click", function(){
//   subtractNumbers(12,9)
// })
// function createNumber(cal){
//   console.log("hello")
//   return cal();
// }

// function anotherFunction(){
//   console.log("we are learning")
// }
// createNumber(anotherFunction)

// function returnKey(){
//   return "Hello"
// }
// endGame.textContent=returnKey();



function greetName(){
  let time = 12
  if(time=12){
    var time2 = 23
    console.log(time2)
  } else{
    console.log(time2 +1)
    console.log("no greet")
  }
  console.log(time2)
}
greetName();
// arrow functions

const fnxName=() => console.log("arrow functions")
fnxName();
// assignment

// const clas =[ 
//   {name: "Joy",
//     desc:"she is troublesome"
//   },
//   {name: "Earnest",
//     desc:"he is brilliant"
//   },
//   {name: "Peace",
//     desc:"she works out."
//   },
//   {name: "Promise",
//     desc:"he is playful"
//   },
//   {name: "Chibuike",
//     desc:"he is calm"
//   },
//   {name: "Martins",
//     desc:"he is tall"
//   },
// ]
// let input = prompt('input the last digit of your phone number or your name')
// let classY = document.getElementById('class')
// const clasOne = `this user's name is ${clas[0].name}. ${clas[0].desc}`
// const clasTwo = `this user's name is ${clas[1].name}. ${clas[1].desc}`
// const clasThree = `this user's name is ${clas[2].name}. ${clas[2].desc}`
// const clasFour = `this user's name is ${clas[3].name}. ${clas[3].desc}`
// const clasFive = `this user's name is ${clas[4].name}. ${clas[4].desc}`
// const clasSix = `this user's name is ${clas[5].name}. ${clas[5].desc}`

// if (input == 0 || input == clas[0].name){
//   console.log('user paid school fees')
//   classY.textContent = clasOne
// }
// else if (input == 1 || input == clas[1].name){
//   console.log('user paid school fees')
//   classY.textContent = clasTwo
// }
// else if (input == 2 || input == clas[2].name){
//   console.log('user paid school fees')
//   classY.textContent = clasThree
// }
// else if (input == 3 || input == clas[3].name){
//   console.log('user paid school fees')
//   classY.textContent = clasFour
// }
// else if (input == 4 || input == clas[4].name){
//   console.log('user paid school fees')
//   classY.textContent = clasFive
// }
// else if (input == 5 || input == clas[5].name){
//   console.log('user paid school fees')
//   classY.textContent = clasSix
// }
// else{
//   console.log ('this user is not qualified to be in LOCTECH')
//   classY.textContent='This user is owing LOCTECH, HAHAHAHAHAHAHAHAHAHAHAHAH'
// }
// // recursive functions
// function recure (a) {
//   if (a <= 0){
//     console.log ("done")
//     return;
//   }
//   // recursive condition
//   console.log (a)
//   recure(7)
// }
// // using resursive function to calc the sum of an array
// const someArray =[ 2,4,5,6,9]
// function sumOfArray(n){
//     if(n.length ===0 ) {
//       console.log ("hurray!!")
//       return 0;
//     }
//     // recursive condition
//     console.log(n)
//     return n[0] +sumOfArray(n.slice(1))
//   }
//   console.log (sumOfArray(someArray))
//   // methods in javascript
//   let gun ={
//     case: function(){
//       console.log ("peacelawry is a telecoms boss")
//     }
//   }
//   gun.case()
//   // for each method
//   const fruits = [
//     "mango", "orange", "pineapple", "indomie", "watermelon"
//   ]
//   fruits.forEach( function(x,y,z){
//     console.log(x, "is at the index of", y ,"inside the ", z, "array")
//   }
// )

// const products =[
//   {name:"laptop", price: 1000},
//   {name:"phone", price: 600},
//   {name:"tablet", price: 400} ];
//   // expected price is 1000 but its now 600
//   products.forEach(function(eachItem){
//     eachItem.discountedPrice= eachItem.price * 0.5
//     console.log(`the price for ${eachItem.name} is ${eachItem.price} but the discounted price is ${eachItem.discountedPrice}`)
//   }
// )
// console.log(products)

// // map function retuns an array

// const frui =["mango", "orange", "pineapple", "indomie"]
//  const fru = frui.map(function(elem,index,array){
//   return elem
// })
//   console.log(fru)

//   // map over this array and display the name
//   const peopl =[
// {name: "joy", desc: "she is dark"},
// {name: "joy", desc: "she is ....."},
// {name: "joy", desc: "she is ....."},
// {name: "joy", desc: "she is ....."},
// {name: "joy", desc: "she is ....."},

//   ]
//   peopl.map((element,index,array) =>{
//     console.log(element.name)
//   })
//   // find function checks for the first element that satisfies a condition
//   const num =[2,6,5,3,7,10]
// const fin=num.find(function(element,index,array){
//   return element>5
// })
// console.log (fin)
  
//   const nam =[2,6,5,3,7,10]
// const fil=num.filter(function(element,index,array){
//   return element>5
// })
// console.log (fil)
//   // filter function gets all elements that satisfy a condition
//   const ask = prompt("search for name")
//   const fix =peopl.filter(function(elem){
//     if (ask===elem.name){
  
//       console.log(elem.desc)
//     }
//   })
//   // assignment .. achieve the above result using return .. console.log (fil)

  // rest parameters is used when exact arguements passed
  function  para (...re){
    console.log(...re)
  }
  para(2,5,6,5,84,38)

  // spread in objects 
  const num1=[2,6,5,3,7,10]
  const num2=[2,6,77,3,177,10]
  console.log(...num1,...num2)
// array destructuring

  const vehicles =["mustang","cargo" , "expedition"];
  // old way
  console.log( vehicles[0])
  console.log( vehicles[1])
  console.log( vehicles[2])
  // end of old way 

  // new way  destructuring
  const [aa, bb , cc] =vehicles
  console.log(aa)


  // assignment ;. destructure the following objects
const user ={
  id:1 ,
  profile: "tall",
  username: "Johndoe",
  location: "New york"
}

// without destructuring
function greet (user){
  console.log(`hello ${user.name} your age is ${user.age}`)
}
const use =greet ({name: "vivian", age:20})
console.log (use)
// with destructuring
function greet2({name,age}){
  return `hello ${name} your age is ${age}`
}
const use2 = greet2({name: "vicky", age:30})
console.log(use2)

// default params
function greet2 ( nam ="peacelawry", age= 30){
  return `hello  ${nam} your age is ${age}`
}
console.log(greet2())
// reduce function
const red =[2,3,4,6,]
const red2=red.reduce(function(accumulator, currentValue){
  return accumulator + currentValue
} ,2 )
console.log(red2)