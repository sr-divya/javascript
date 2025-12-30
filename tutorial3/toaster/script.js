//scope- created variables and methods kaha tak use kar sktey ho

//line 1 -- variable



//scope- functional scope. global scope,    block scope

//functional scope- function ke andr hi use ho skta hai
//global scope- pura program mein khi bhi use ho skta hai
//block scope- if, for, while ke andr jo variable banta hai wo
//  bahar use nhi ho skta hai. let and const ke sath hota hai ye
//{} curly braces m hi use ho skta hai ye

//agr aapka code kisi bhi braces ke andr nhi hai to aapka
//code global hai

//var is a functinonal scopeed variable
//let and const are block scoped variables

// function abcd() {
//     if(true){
//         let a=15;
//         const b=29;
//         console.log(a);
//         console.log(b);
//     }
//     console.log(a)//error
//     console.log(b)//error
// }

// abcd();
//so, let and const are block scoped variables

// function abcd(){
//     if(true){
//         var a=90;
//     }
//     console.log(a);

// }

// abcd();

// EXECUTION CONTENT

// dynamic scoping vs lexical scoping

//closure and how variables are looked up in closure

//encapsulation


// //lexical scoping
// var a=15;
// function abcd(){
//     console.log(a)
// }

// function xyz(){
//     var a=32;
//     // console.log(a);
//     abcd();
// }

// abcd();

//closures

// function outer(){
//     let count=22;
//     return function(){
//         count++;
//         console.log(count);
//     };

// }

// let fnc=outer();
// // console.log(fnc);
// fnc();
// fnc();
// fnc();
// fnc();
// fnc();


// private counter

// function clicklimiter() {
//     let click = 0;
//     return function () {
//         if (click < 5) {
//             click++;
//             console.log("clicked " + `${click} times`);
//         } else {
//             console.error("click limit reached");
//         }
//     }

// }

// let fnc=clicklimiter();
// fnc();
// fnc();
// fnc();
// fnc();
// fnc();
// fnc();

//Toaster




// Toast Notification System

// id=toast

// function creatToaster(config){
//     return function(notification){
        
//         let div=document.createElement("div");
//         div.className=`fixed bg-gray-800 text-white px-6 py-3 rounded shaodw-lg pointer-events-none ${config.positionX==="right"?"right-10":"left-10"} ${config.positionY==="top"?"top-10":"bottom-10"} `;
//         div.textContent=notification;
//         document.body.appendChild(div);

//         setTimeout(()=>{
//             document.body.removeChild(div);
//         },config.duration * 1000);
//     };
// }

// let toaster=creatToaster({
//     positionX:"left",
//     positionY:"top",
//     theme:"dark",
//     duration:3,
// });

// toaster("This is a dummy notification!");

//For multiple toasts

// function creatToaster(config){
//     return function(notification){
//         const div=document.createElement("div");
//         div.textContent=notification;
//         div.className="inline-block bg-gray-800 text-white px-6 py-3 rounded shaodw-lg pointer-events-none transsition-opacity duration-300"
//         document.querySelector(".parent").appendChild(div);

//         if(config.positionX!=="left" || config.positionY!=="top"){
//             document.querySelector(".parent").className+=
//             `${config.positionX==="right" ? " right-5":"left-5"} ${config.positionY==="bottom"?"bottom-5":"top-5"}`;
//         }

//         setTimeout(()=>{
//             document.querySelector(".parent").removeChild(div);
//         },config.duration * 1000);
//     }
// }


// let toaster=creatToaster({
//     positionX:"right",
//     positionY:"top",
//     theme:"dark",
//     duration:3,
// })

// toaster("This is a dummy notification!");


// setTimeout(()=>{
//     toaster("This is a third dummy notification!");
// },2000);



//this keyword

// console.log(this);//window object

// function abcd(){
//     console.log(this);
// }

// abcd();

// let obj={
//     name:"divya",
//     sayName: function(){
//         let xyz=()=>{
//             console.log(this.name);
//         }

//         xyz();
//     }
// }

// obj.sayName();
//object

// let obj={
//     name:"divya",
//     sayName:function(){
//         console.log(this.name);
//     }
// }

// obj.sayName();

//event handler

// document.querySelector('h1').addEventListener("click",function(){
//     console.log(this);
//     alert("you clicked on "+ this.textContent);
// });

//bind,call and apply

let obj={
    name:"divya"
};

function abcd(a,b,c){
    console.log(this,a,b,c);
}
//function ki new copy bnata hai usm bydefault this ki value
// object hoti hai

let fnc=abcd.bind(obj,1,2,3);
console.log(fnc)
fnc();


