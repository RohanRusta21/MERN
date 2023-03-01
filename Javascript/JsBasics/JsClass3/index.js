console.log('Hello world');
// console.log(Math.random());
// console.log(Math.PI);
// console.log(Math.round(1.8));
// console.log(Math.max(2,4,6,3));
// console.log(Math.min(2,4,6,3));
// console.log(Math.abs(-52));

// String Primitive
// let firstName=' Mansi ';
// console.log(typeof firstName);
// make this string as object using dot notation
// console.log(firstName.length);
// console.log(firstName[0]);
// console.log(firstName.includes('Ma'));
// console.log(firstName.startsWith('Ma'));
// console.log(firstName.endsWith('Ma'));
// console.log(firstName.endsWith('si'));
// console.log(firstName.indexOf('a'));
// console.log(firstName.toUpperCase());
// console.log(firstName.toLowerCase());
// console.log(firstName.trim());
// console.log(firstName.replace('Man','khan'));

// string as object declared
// let lastName= new String('Sinha');
// console.log(typeof lastName);

// let msg='This is my first message ';
// let words = msg.split(' ');
// console.log(words);

// escape sequences
// let msg= 'hello \"World\"';
// console.log(msg);

// dynamic 
// let message= `Hello ${firstName}`;
// console.log(message);

// date and time 
// let date1= new Date();
// console.log(date1);

// let date2= new Date("2023-01-20");
//  date2.setFullYear(2022);
// date2.getDate();
// console.log(date2);

// create an array
// let numbers=[1,3,4,5,7];
// console.log(numbers);
// console.log(numbers[2]);

// insertion in array
// END
// numbers.push(10);
// console.log(numbers);

// BEGIN
// numbers.unshift(8);
// console.log(numbers);

// MIDDLE
// numbers.splice(5,0, 'a','b','v');
// console.log(numbers);

// seraching in array as primitive type
// console.log(numbers.indexOf(7));
// console.log(numbers.includes(7));
// console.log(numbers.includes(9));
// console.log(numbers.indexOf(4,2));
// console.log(numbers.indexOf(4,3));

// sreaching in array as reference type
// let courses=[
//     {no:1, naam:'Animesh'},
//     {no:1, naam:'Mansi'}
// ];
// // console.log(courses);
// does not works with indexof in primitive type
// console.log(courses.indexOf({no:1, naam:'Mansi'}));

// searching is possible by callbacks functions with find method
// let course = courses.find(function(answer){
//     return answer.naam === 'Animesh';
// })
// console.log(course);

// convert into arrow function
// let course = courses.find(answer=> answer.naam === 'Mansi');
// console.log(course);

// removing an element in array
// END
// let num=[1,2,3,4,5,6,7,];
// num.pop();
// console.log(num);

// BEGIN
// let num=[1,2,3,4,5,6,7,];
// num.shift();
// console.log(num);

// MIDDLE
// let num=[1,2,3,4,5,6,7,];
// num.splice(3,2);
// console.log(num);

// Emptying an array
// let numbers=[1,2,3,4,5];
// 1st way is not the correct way
// numbers=[];
// console.log(numbers);
// Best way
// numbers.length=0;
// console.log(numbers);
// 2nd way
// numbers.splice(0,numbers.length);
// console.log(numbers);

// Combining by concat method
// let first=[1,2,3];
// let second=[4,5,6];
// let combined= first.concat(second);
// console.log(combined);
// slicing
// let a= combined.splice(1,4);
// console.log(combined);

// combining in refernces by spread operator
// let person = {
//     firstName: 'John',
//     lastName: 'Doe',
  
// };
// let job = {
//     jobTitle: 'JavaScript Developer',
//     location: 'USA'
// };
// let employee = {
//     ...person,
//     ...job
// };
// console.log(employee);

// combining in refernces by assign method
// let person = {
//     firstName: 'John',
//     lastName: 'Doe',
//     age: 25,  
// };
// let job = { 
//     country: 'USA'
// };
// let employee = Object.assign(person, job);
// console.log(employee);

// slicing in objects????????????????

// spread operator
// let first=[1,2,3];
// let second=[4,5,6];
// let combined=[...first, 'a', ...second, 'b,' , true];
// console.log(combined);


// for...of in array
// let arr=[10,20,30,40,50];
// for(let value of arr){
//     console.log(value);
// }

// for...each loop
// let arr=[10,20,30,40,50,60];
// arr.forEach(function(numbers){
//     console.log(numbers);
// })

// joining an array by join method
// let arr=[10,20,30,40,50,60];
// const joined= arr.join(' , ');
// console.log(joined);

// sorting an array
// let arr=[34,4,22,7];
// console.log(arr.sort());
// console.log(arr.reverse());

// filtering in array
// let numbers=[1,3,-4,-2,4,5];
// let filtered= numbers.filter(function(ans){
//     return ans>=0;
// })
// console.log(filtered);
// let filtered= numbers.filter(function(ans){
//     return ans<=0;
// })
// console.log(filtered);

// mapping in array
// let numbers=[7,8,9,10];
// let answer=numbers.map(function(result){
//     return 'student_no '+ result;
// })
// console.log(answer);

// mapping in array with objects
// let numbers=[1,2,-3,-4];
// let items= numbers.map(function(num){
//     let obj={
//         value:num
//     }
//     return obj;
// })
// console.log(items);

// chaining in array
let numbers=[1,2,-3,-4];
let items = numbers.filter(value => value >= 0)
                .map(function(num){
                    let obj={
                        value:num
                    }
                    return obj;
                });
console.log(items);