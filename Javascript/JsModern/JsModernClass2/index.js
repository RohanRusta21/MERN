console.log("Welcome ");

// document.addEventListener('click', function(){
//     console.log('I have clicked the document');
// });


let content =document.querySelector('h1');

function eventFunction(){
    content.style.backgroundColor='yellow';
    console.log('On click the background color changed to yellow');
}
content.addEventListener('click', eventFunction);
content.removeEventListener('click', eventFunction);


const text=document.querySelector('#wrapper');
text.addEventListener('click', function(event){
    console.log(event);
});

let link =document.querySelectorAll('a');
link[2].addEventListener('click', function(event){
    event.preventDefault();
    console.log('maja aya');
});


// avoid to many events
// let myDiv=document.createElement('div');
// for(let i=1; i<=100; i++){
//     let newElement=document.createElement('p');
//     newElement.textContent=('This is paragraph '+ i);
//     newElement.addEventListener('click', function(){
//         console.log("i have clicked paragraph "+i);
//     });
//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);
   

// let myDiv=document.createElement('div');
// function paraStatus(){
//     console.log("i have clicked paragraph ");
// }
// for(let i=1; i<=100; i++){
//     let newElement=document.createElement('p');
//     newElement.textContent=('This is paragraph '+ i);
//     newElement.addEventListener('click', paraStatus );
//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);


// let myDiv=document.createElement('div');
// function paraStatus(){
//     console.log("i have clicked paragraph ");
// }
// myDiv.addEventListener('click', paraStatus );
// for(let i=1; i<=100; i++){
//     let newElement=document.createElement('p');
//     newElement.textContent=('This is paragraph '+ i);
    
//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);

// let myDiv=document.createElement('div');
// function paraStatus(event){
//     console.log('para'+ event.target.textContent);
// }
// myDiv.addEventListener('click', paraStatus );
// for(let i=1; i<=100; i++){
//     let newElement=document.createElement('p');
//     newElement.textContent=('This is paragraph '+ i);
    
//     myDiv.appendChild(newElement);
// }
// document.body.appendChild(myDiv);

let element= document.querySelector('#wrapper1');

element.addEventListener('click', function(event){
    if(event.target.nodeName ==='SPAN'){
        console.log('Span is clicked '+ event.target.textContent);
    }
})