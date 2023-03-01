// console.log('Hello Jee');
// function declaration
// function run(){
//     console.log('running');
// } 
// function invoke or function call
// run();

// named function assignment
// let stand= function walk(){
//     console.log('walking');
// }
// stand();
// it will give error
// walk();
// let jump=stand;
// jump();

// anonymous function assignment
// let stand2= function(){
//     console.log('walking');
// }
// stand2();

// dynamic language
// let x=1;
// x='a';
// console.log(x);

// function sum(a,b){
//     return a+b;
// }
// console.log(sum(2,3));
// console.log(sum(2));
// console.log(sum());
// console.log(sum(2,3,4,5,6));

// special object---- arguments
// function sum(a,b){
//     console.log(arguments);
//     return a+b;
// }
// let ans= sum(1,2);
// let ans2= sum(1,2,3,4,5,6);

// console.log(ans);
// console.log(ans2);

// dynamic function
// function sum(a,b){
//     let total= 0;
//     for( let value of arguments){
//         total=total+value;        
//     }
//     return total;
// }
// console.log(sum(2,4));
// let ans2= sum(1,2,3,4,5,6);
// console.log(ans2);
// let ans3=sum();
// console.log(ans3);

// rest operator
// function sum(...args)
// {
//     console.log(args);
// }
// sum(1,2,3,4,5,6,7,8);

// function sum(num,...args)
// {
//     console.log(args);
// }
// sum(1,2,3,4,5,6,7,8);

// function sum(num,value,...args)
// {
//     console.log(args);
// }
// sum(1,2,3,4,5,6,7,8);

// no parameters after rest operator
// function sum(num,value,...args,num2)
// {
//     console.log(args);
// }
// sum(1,2,3,4,5,6,7,8);

// deafult parameter
// function interest(p, r=6,y=10){
//     return p*r*y/100;
// }
// console.log(intrest(1000));
// console.log(interest(1000,10));

// getters and setters
// let person={
//     fName:'Mansi',
//     lName:'Sinha',
//     get fullName(){
//         return `${person.fName} ${person.lName}`;
//     },
//     set fullName(value){
//         let parts=value.split(' ');
//         this.fName=parts[0];
//         this.lName=parts[1];
//     }

// }
// getter
// console.log(person.fullName);
// person.fullName='Rahul Kumar';
// console.log(person.fullName);

// try catch
// let person={
//         fName:'Mansi',
//         lName:'Sinha',
//         get fullName(){
//             return `${person.fName} ${person.lName}`;
//         },
//         set fullName(value){
//             if(typeof value !== String){
//                 throw new Error("You have not sent a string");
//             }
//             let parts=value.split(' ');
//             this.fName=parts[0];
//             this.lName=parts[1];
//         }
    
//     }

//     try{
//         person.fullName=false;
//     }
//     catch(e){
//         alert(e);
//     }

//     console.log(person.fullName);

// reducing in arr
let arr=[1,2,3,4,5];
let totalSum=arr.reduce((accumulator,currentValue)=> accumulator+currentValue,0);
console.log(totalSum);