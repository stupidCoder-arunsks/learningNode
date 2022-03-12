
  
// console.log("Learning asyn and await with promises");

//promises 

// console.log("Person 1 ticket");
// console.log("person 2 ticket");

// const wifeBringingMyTicket = new Promise((resolve,reject) => {
//     setTimeout(() => {
//         resolve("ticket");
//     },3000);
// });

// const getPopCorn = wifeBringingMyTicket.then((e) => {
//     console.log("husband: let we get in");
//     console.log("wife: no I'm feeling angry");
//     return new Promise((resolve,reject) => {
//         resolve(`${e} popcorn`);
//     });
//     // console.log(e)
// });

// const getButter = getPopCorn.then((m) => {
//     console.log("husband:here is popcorn and shall we get in now");
//     console.log("wife: you forgot to add a butter to it ");
//     return new Promise((resolve,reject) => {
//      resolve(`Butter ${m}`);
//     });

// });

// getButter.then((message) => console.log(message));

// console.log("Person 4 ticket");
// console.log("Person 5 ticket");


// Async and await with promises 

console.log("Person 1 ticket");
console.log("person 2 ticket");

const preMovie = async () => {

    const wifeBringingMyTicket = new Promise((resolve, reject) => {
        setTimeout(() => resolve("ticket"),3000);
    });

    let ticket = await wifeBringingMyTicket;

    // console.log('ticket' , ticket);

    console.log("husband: let we get in");
    console.log("wife: no I'm feeling angry");

    const getPopCorn = new Promise((resolve, reject) => {
        setTimeout(() => resolve("PopCorn"),3000);
    });

    let popCorn = await getPopCorn;
 
    // console.log(popCorn);

    console.log("husband: Shall we get in now ");
    console.log("wife: no you forget to add butter to popcorn ");
    
    const getButter = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Butter"),3000);
    });

    let butter = await getButter;

    console.log("husband: Shall we go in now ");
    console.log("wife: no i need cold drink ");
    
    const getColdDrinks = new Promise((resolve, reject) => {
        setTimeout(() => resolve("Cold Drink"),3000);
    });

    let coldDrink = await getColdDrinks;

    console.log(`Husband:Anything else darling`);
	console.log(`Wife: lets go we are going to miss the preview`);
  console.log(`Husband: thanks for the reminder `);

  return ticket;

}

preMovie().then((ticket) => console.log(ticket) );



// function functionOne(){
   

// }




