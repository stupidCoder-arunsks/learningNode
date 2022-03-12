// const productOfNumber = (a, b) => a * b;

// console.log(productOfNumber(2, 5));

// const student = {
//     name: "Arunsks",
//     age: 24,
//     greet: function(){
//         console.log("Hi I'm " + this.name);
//     }
// };

// student.greet();

// class Student {
//     constructor(name,age,marks){
//         this.name = name;
//         this.age = age,
//         this.marks = marks;
//     }

//     setMinimumage(minAge){
//           return (minMarks) => {
//            if(this.age > minAge && this.marks > minMarks){
//              console.log(`${this.name} is eligible for placements`);
//            }else {
//              console.log(`${this.name} is not eligible for placements`);
//            }
//         };

//     }
// };

// const arun = new Student('Arun' , 24,75);
// const karthi = new Student('Karthi',15,70);

// let result = arun.setMinimumage(22)(50);
// karthi.setMinimumage(22)(50);

// const hobbies = ['playing' , 'Travelling'];

// const student = {
//     name: "Arunsks",
//     age: 24,
//     greet: function(){
//         console.log("inside function");
//     }
// };

// console.log('Original Array' , hobbies);

// const hobbyCopy = [...hobbies]; // Spread Operator

// console.log('Copied Array' , hobbyCopy);

// hobbyCopy.push('Cycling');

// console.log('After Adding element to Array  - Original Array ' , hobbies);
// console.log('After Adding element to Array - Copied Array ' , hobbyCopy);

// const copyStudent = {...student};

// console.log(student);
// console.log(copyStudent);

// const toArray = (...args) => { // Rest Operator
//     return args;
// }

// console.log(toArray(1,2,3,4));

// const fruits = ['apple' , 'orange','mango','lemon'];

// const transFormFruit = fruits.map(fruit => fruit);
// console.log(transFormFruit);
// console.log(fruits);

//  const obj1 = {'key1': 1}

// const obj2 = { ...obj1}

// if(obj2 === obj1){

// console.log('same objects')

// }

// else{

// console.log('different objects')

// }

//  const obj1 = {'key1': 1 , 'key2' : 2}

// const obj2 = { ...obj1, key1: 1000}

// console.log(obj1)

// console.log(obj2)

// Object and Array Destruction

// const person = {
//     name:'StupidCoder',
//     age : 24
// };


// const printName = (personData) => {
//     console.log(personData.name);
// }

// const {name ,age} = person; // Object Destruction
// const numbers = ['one','two'];
// const [number1 , number2,number3] = numbers; // Array Destruction

// console.log(name,age);
// console.log(number1,number2);
// printName(person);

// const obj1 = {'key1': 1, "key2": 2, "key3": 1000}
// 	const { key1, key3}  = { ...obj1}
// console.log(key1,key3);

// const arr1 = ['value1', 'value2']
// 	const [ val1, val2 ] = arr1
// 	console.log(val1)
// 	console.log(val2)

// const obj1 = {'key1': 1, "key2": 2, "key3": 1000}

// 	let { key1, key3}  = obj1
// 	key1 = 20;
// 	key3 = 123
// 	console.log(obj1.key1, obj1.key3)

// function fetchData(callback) {
//     setTimeout(() => {
//        callback("Done!");
//     }, 500);
// }

// setTimeout(() => {
//     console.log("Timer done!");
//     fetchData((text) => {
//         console.log(text);
//     });
// }, 2000);

// console.log('Hello');
// console.log("hai");


//Call back function 

// function x(callback){
//    console.log('x');
//    callback();
// }

// x(function() {
//    console.log('y');
// });

// Promises

// function x(){
//     console.log('x');
//     const promise = new Promise((resolve,reject) => {
//          resolve('X succeafully executed...');
//     });
//     return promise;
//  }

//  x().then((text) => {
//     console.log(text);
//  });



const execute = async () => {

    console.log('a');

    console.log('b');
   
    const executeC = new Promise((resolve,reject) => {
       setTimeout(() => {
          resolve('c');
       },5000);
    });
    
    let c = await executeC;
    console.log(c);

    const executeD = new Promise((resolve,reject) => {
        setTimeout(() => {
           resolve('d');
        },1000);
     });
     
     let d = await executeD;
     console.log(d);

     const executeE = new Promise((resolve,reject) => {
        setTimeout(() => {
           resolve('e');
        },2000);
     });
     
     let e = await executeE;
     console.log(e);
}


execute();

