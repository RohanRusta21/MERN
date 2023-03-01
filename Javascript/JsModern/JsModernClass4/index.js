console.log('Mansi Sinha Here!!!...');

// example of synchronous code
// function sync(){
//     console.log('first');
// }
// sync();

// console.log('second');

// example of asynchronous code
// setTimeout(function(){
//     console.log('third');
// }, 7000);
// function sync(){
//     console.log('first');
// }
// sync();

// console.log('second');

// create promise
// let meraPromise = new Promise( function(resolve,reject){
//     console.log('I am inside Promise');
//     resolve('resolved');
//     // reject(new Error('Promise rejected'));
// });
// console.log('Phela');

// promise with async code
// let meraPromise1 = new Promise( function(resolve,reject){
//    setTimeout(function(){
//     console.log('I am inside the asynchronous promise1');
//    },7000);
//     resolve('resolved');
//     // reject(new Error('Promise rejected'));
// });

// let meraPromise2 = new Promise( function(resolve,reject){
//     setTimeout(function(){
//      console.log('I am inside the asynchronous promise2');
//     },3000);
//      resolve('resolved');
//      // reject(new Error('Promise rejected'));
//  });
// console.log('Phela');

// then catch
// let meraPromise1 = new Promise(function(resolve, reject) {
//         setTimeout(function() {
//             console.log('I am insde Promise1');
//         }, 5000);
//         // resolve(1234567890);
//         reject(new Error('Bhaisahab Error aaaye hai'));
// });

// meraPromise1.then((value) => { console.log(value)});
// meraPromise1.catch((error) => { console.log(error)});
// meraPromise1.then((value) => { console.log(value)}, (error) => { console.log("Recieved an Error")});


// multiple promise with code dependency
// let firstPromise = new Promise(function(resolve, reject){
//     setTimeout(()=>{
//         console.log('first Promise completed');
//     },2000);
//     resolve(true);
// });

// let output = firstPromise.then(()=>{
//     let secondPromise = new Promise(function(resolve,reject){
//         setTimeout(()=>{
//             console.log('second Promise completed');
//         },4000);
//         resolve ('value of second promise');
//     })
//     return secondPromise;
// })
//  output.then((value)=>console.log(value));

// async function
// async function abcd(){
//     return 7;
// return "abcd";
// }
// console.log(abcd());
// async always return a promise 

// await 
// async function utility(){
//     let delhiMausaum= new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve ("Delhi is too hot");
//         },1000);
//     });
//      let chennaiMausaum = new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve("Chennai is cool");
//         },3000);
//      });
    
//      let dl=await delhiMausaum;
//      let cm=await chennaiMausaum;
     
//      return [dl,cm];
// }


// fetch API
// async function utility() {
//     let content = await fetch('https://jsonplaceholder.typicode.com/posts/1');
//     let output = await content.json();
//     // console.log(content);
//     console.log(output);
// }
// console.log(utility());

// fetchapi post call
// async function helper() {
//     let options = {
//         method: 'POST',
//         body: JSON.stringify({
//           title: 'Babbar',
//           body: 'Tagdi Body ',
//           userId: 1998,
//           weight: 90,
//         }),
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         },
//     };
    
//     let content = await fetch('https://jsonplaceholder.typicode.com/posts', options);
//     let response = content.json();
//     return response;
// }
// async function utility() {
//     let ans = await helper();
//     console.log(ans);
// }
// utility();

// closures
function init() {
    let name = "Mozilla"; 
    function displayName() {
      // displayName() is the inner function, that forms the closure
      console.log(name); // use variable declared in the parent function
    }
    return displayName;
}
let a = init();
a();
