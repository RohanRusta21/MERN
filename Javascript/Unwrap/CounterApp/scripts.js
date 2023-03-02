console.log('Lets  Start');
// using queryselector we get the element
const countValue= document.querySelector('#counter');

let increment=()=>{
    // get the value from UI
    let value= parseInt(countValue.innerHTML);
    // increase the value 
    value= value+1;
    // set the value onto UI
    countValue.innerHTML=value;
}
function decrement(){
    // get the value from UI
    let value= parseInt(countValue.innerHTML);
    // decrease the value
    value= value-1;
    // set the value onto UI
    countValue.innerHTML=value;
}
