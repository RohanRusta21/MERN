console.log('Chaliye shuru krte hai');

// object create
// contains only properties
// const rectangle={
//     length:1, 
//     breadth:2
// }

// contains property and behaviour
// let rectangle={
//     length:1, 
//     breadth:2,

//     draw: function(){
//         console.log('drawing rectangle');
//     }
// }

// factory function first way
// function createRectangle(){
//     return rectangle={
//         length:1, 
//         breadth:2,
    
//         draw: function(){
//             console.log('drawing rectangle');
//         }
//     };
// }
// let rectangleObj1=createRectangle(2,3);

// factory function second way

// function createRectangle(len, bre){
//     return rectangle={
//         length:len, 
//         breadth:bre,
           
//         draw(){
//             console.log('drawing rectangle');
//         }
//     };
// }
// let rectangleObj1=createRectangle(2,3);

// factory function third way
// function createRectangle(len, bre){
//     return rectangle={
//         len, 
//         bre,
           
//         draw(){
//             console.log('drawing rectangle');
//         }
//     };
// }
// let rectangleObj1=createRectangle(7,5);

// constructor function first way
// function Rectangle(){
//     this.length=1;
//     this.breadth=3;
//     this.draw=function(){
//         console.log('drawing rectangle using constructor function');
//     }
// }

// let rectangleObject=new Rectangle();

// constructor function second way
// function Rectangle(len,bre){
//     this.length=len;
//     this.breadth=bre;
//     this.draw=function(){
//         console.log('drawing rectangle using constructor function');
//     }
// }
// let rectangleObject=new Rectangle(5,7);

// constructor property
// rectangleObject.constructor;
// ƒ Rectangle(len,bre){
//     this.length=len;
//     this.breadth=bre;
//     this.draw=function(){
//         console.log('drawing rectangle using constructor function');
//     }
// }

// Rectangle.constructor
// ƒ Function() { [native code] }

// let Rect = new Function('len', 'bre',`this.length=len;
// this.breadth=bre;
// this.draw=function(){
//     console.log('drawing rectangle using constructor function');
// }`)
// let obj= new Rect(2,3);

// Dynamic nature of objects
// rectangleObject.color='yellow';
// console.log(rectangleObject);
// delete rectangleObject.color;
// console.log(rectangleObject);

// constructor function third way is not the correct way to create an object
// function Rectangle(len,bre){
//     this.len;
//     this.bre;
//     this.draw=function(){
//         console.log('drawing rectangle using constructor function');
//     }
// }

// let rectangleObject=new Rectangle(5,7);
// primitive
// let a=10;
// let b= a;
// a++;
// console.log(a);
// console.log(b);

// reference
// let a={
//     value:10
// };
// let b =a;
// a.value++;
// console.log(a.value);
// console.log(b.value);

// pass by value
// let a=10;
// function inc(a){
//     a++;
// }
// inc(a);
// console.log(a);

// pass by reference
// let a={
//     value:10
// };
// function inc(a){
//     a.value++;
// }
// inc(a);
// console.log(a);

// for...in loop -- over the properties of an object
let rectangle={
    length:3,
    breadth:5
};
//key prints the properties
// for(let key in rectangle){
//     console.log(key);
// }
//[key] prints the value
// for(let key in rectangle){
//     console.log(key+":"+ rectangle[key]);
// }

// for...of loop --- iterable objects but for now try it over the primitive type
// Object.keys for properties
// for(let key of Object.keys(rectangle))
//  {
//     console.log(key);
//  }
 // Object.entries for value
//  for(let key of Object.entries(rectangle))
//  {
//     console.log(key);
//  }

// to find whether property exists or not? in object
// if('color'in rectangle){
//     console.log('present');
// }
// else{
//     console.log('absent');
// }
// if('length'in rectangle){
//     console.log('present');
// }
// else{
//     console.log('absent');
// }

// object cloning(create copy of object) by iteration
// let src={
//     a:10, b:20, c:30
// };
// let desc={};
// for(let key in src){
//     desc[key]=src[key];
// }
// console.log(desc);
// src.a++;
// console.log(src);
// console.log(desc);

// assign
// let src={
//     a:10, b:20, c:30
// };
// let desc=Object.assign({}, src);
//let desc=Object.assign({}, src, rectangle);

// console.log(desc);
// src.a++;
// console.log(src);
// console.log(desc);

// spread operator
// let src={
//     a:10, b:20, c:30
// };
// let desc={...src}

// console.log(desc);
// src.a++;
// console.log(src);
// console.log(desc);

