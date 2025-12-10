
// let  b=93;

//var 
//window m add hota hai
//functional scope hota hai
//aap firse declear kar sktey ho error nhi aayega


// let - block scope hota hai

// function add(){
//   if(true){
//     let c=105;
//     console.log("Happy Now");
//   }
//   console.log(c+50);
// }

// add();

// scope of variable- local,global,function

// function greet() {
//   let a = 15;
//   console.log(a);
//   console.log("Hello");

//   if (true) {
//     console.log(a + 200);
//   }
// }
// console.log(a);
// greet();

// if(true){
//   let a=29;
//   console.log("h");
// }
// console.log(a); block scoped 

// function greet() {
// let a = 15;
// console.log(a);
// console.log("Hello");
// if (true) {
//   let a=100;
//   console.log(a + 200);
// }
// console.log(a+500);
// }

// console.log(a);

// greet();

// let g=29;
// function greet() {
//   var a = 15;
//   console.log(a);
//   console.log("Hello"); 
// }
// // console.log(a);

// greet();

// console.log(g);

//Early return pattern

// function gradescore(marks){
//   if(marks>=90) return 'A+';

//   if(marks>=80 && marks<90) return 'A';

//   if(marks>=70 && marks<80) return 'B';

//    if(marks>=60 && marks<70) return 'C';

//   if(marks>=33 && marks<60)  return 'D';

//   if(marks>=0 && marks<33)  return 'Fail';



// }

// console.log(gradescore(50));

// ROCK PAPER SCISSOR

// function rps(user,comp){
//   var us=0,cmp=0;
//   if(user=="rock" && comp=="paper"){
//     cmp++;
//   }
//   else if(user=="scissor" && comp=="rock"){
//     cmp++;
//   }else if(user=="paper" && comp=="scissor"){
//     cmp++;
//   }
//   else if(user=="rock" && comp=="scissor"){
//     us++;
//   }
// }

// rps(rock,scissor);

//hoisting
// add();


// let add=function(){
//   console.log("Hello");
// }

// let multiply=(a,b)=>{

// }

// function kmp(val) {
//   val();
// }

// kmp(function () {
//   console.log("First class citizen");
// });

//higher order function

// function abcd(){
//   return function(){
//     console.log("HOF");
//   }
// }
// // 
// abcd()();

// Array

// let fruit = ["apple", "mango", "banana", "grapes"];

// // console.log(fruit[1]);
// fruit.push("Guava");
// fruit.unshift("Pineapple");
// fruit.pop();

// let arr=["Green","Yellow"];
// arr.splice(1,0,"Red","Blue");

// let arr=[1,2,3,4,5,6];
// let newArr=arr.slice(1,4);

// let names=["zara","arjun","hera","bhavya"];
// names.sort()

// let num=[1,2,3,4];
// let newnum= num.map(function(val){
//     return val*val;
// })

// let num=[5,12,8,20,3];
// let sum=num.reduce((accumulator,val)=>{
//     return accumulator+val;
// },0)

// let va=num.find((val)=>{
//     return val<10;
// });

// let arr=[45,60,28,90]
// let vararr=arr.every((val)=>{
//     return val%2==0;
// })

// let fulname=["harsh","sharma"]
// let[a,b]=fulname;

// let a=[1,2];
// let b=[3,4];

// a=[...b];

// let arr=[1,2,3];
// let newarr=[...arr];


// let obj={
//     name:"harsh",
//     age:23,
//     city:"delhi"
// };
// console.log(obj.name);
// console.log(obj['city']);
// let aa='age';

// object destructuring
// const user = {
//   name: "Divyanshi",
//   address: {
//     city: "Hathras",
//     pin: 204101,
//     location: {
//       lat: 27.6,
//       long: 78.0
//     }
//   }
// };

// let {lat,long}=user.address.location;

//Looping in object

// let obj1={
//     name:"harsh",
//     age:23,
//     email:"test123@gmail.com",
//     addresses:{
//         city:"hathras",
//         pin:204102
//     }
// };

// let obj2={...obj1}
// obj2.address.city="indore";

//jab aapka ek object nested object banta h or jb hum usko copy krte h
// chahe spread operator k through kyu na ho top level
// value real copy hoti hein andr ke nested objects wapas se
// reference pass hota h

// for(let key in obj1){
//     console.log(key + " "+obj1[key]);
// }

// DEEP CLONING
// let obj2=Object.assign({}.obj1)

//stringfy - object to string
//parse - string to real form obj

// let obj2=JSON.parse(JSON.stringify(obj1));
// obj2.address.city="indore"


//OPTIONAL CHAINING AND COMPUUTER PROPERTIES

// obj1?.address?.city

// const location1={
//     city:"bhopal",
//     coordinates:{
//         lat:23.2,
//         lng:77.4
//     },
// };


// const user={
//     "first-name":"harsh"
// };

// let {"first-name":firstname}=user;


// const course={
//     title:"javascript",
//     duration:"4 weeks"
// };

// for (let key in course){
//     console.log(key);
// }

// const original={a:1,b:2};

// const cop={...original};

// let ab=document.getElementById("id1");
// ab.innerHTML="Anurag Maurya"
// ab.hidden=true;
// console.dir(ab);
// let bc=document.querySelector('h2')
// console.dir(bc)
// let abcd=document.getElementsByClassName("abcd");
// console.dir(abcd);

// let mybtn=document.querySelectorAll('.buy-now');
// console.dir(btn);
// let arr=[...mybtn];
// for(let i=0;i<arr.length;i++){
//     arr[i].style.backgroundColor="blue";
// }
// mybtn.style.backgroundColor="blue";

// let h1=document.getElementById('id1');
// h1.textContent="Welcome to sheryians";

// let ele=document.querySelectorAll('li');
// let arr1=[...ele];

// for(let i=0;i<arr1.length;i++){
//     console.log(arr1[i].textContent);
// }

//textcontent is faster than innerhtml and textcontent aapko saara content nikal 
//ke deta h including the hidden text bhi jo ki innerhtml nhi krta textcontent krta h
// is faster than innerhtml.

// let par=document.querySelector('p');
// par.innerHTML="<b> updated </b> by JavaScript";
 // will show the tags as it is


//  let sel=document.querySelector('select');
//  let h1=document.querySelector('h1');

// //  console.log(sel)
// sel.addEventListener("change",function(dets){
//     console.log(dets.target.value);
//     h1.textContent=` ${dets.target.value} Device Selected`;
//     h1.style.textTransform="Capitalize";
// })

// let h1=document.querySelector('h1');

// window.addEventListener("keyup",function(dets){
//     console.log("Key released");
    
//         h1.textContent=dets.key;
    
// })

// let inp=document.querySelector('input');

// inp.addEventListener("input",function(dets){
//     if(dets.data!=" ")
//     {
//         console.log(dets.data)
//     }
// })

// let div=document.querySelector("#div1");
// let file=document.querySelector("#fileinp");

// div.addEventListener("click",function(){
//     file.click();
// })

// file.addEventListener("change",function(dets){
    
//     console.log(dets.target?.files[0].name)
//     div.textContent=dets.target.value;
// })


// let form=document.querySelector('form');
// let inputs=document.querySelectorAll("input");
// let main=document.querySelector(".main");

// form.addEventListener("submit",function(dets){
//     dets.preventDefault();
//     console.log(inputs[0].value)
//     console.log(inputs[1].value)
//     console.log(inputs[2].value)
//     console.log(inputs[3].value)
//     // console.log(inputs[4].value)
// })

// let form=document.querySelector('form');
// let input=document.querySelectorAll('input');
// let btn=document.querySelector('btn')

// form.addEventListener("submit",function(dets){
//     dets.preventDefault();
//     console.log(input[0].value);
//     // console.dir(dets);
// })


// CAD DESIGN**********************************************
/*form.addEventListener("submit",function(dets){
    dets.preventDefault();

    let card=document.createElement("div");
    card.classList.add("card");

    let profile=document.createElement("div");
    profile.classList.add("profile");

    // card.appendChild(profile);
    // console.log(card)

    let img=document.createElement("img");
    img.setAttribute("src",inputs[0].value);
   

    let h3=document.createElement("h3");
    h3.textContent=inputs[1].value;
    let h5=document.createElement("h5");
    h5.textContent=inputs[2].value;
    let p=document.createElement("p");
    p.textContent="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.";
     profile.appendChild(img);
    card.appendChild(profile);
    
    card.appendChild(h3);
    card.appendChild(h5);
    card.appendChild(p);

    main.appendChild(card);

    inputs.forEach(function(input){
        if(input.type!=="submit"){
            input.value="";
        }
    })
})*/





// let div=document.querySelector("#abcd");

// div.addEventListener("mousemove",function(dets){
//     abcd.style.backgroundColor="red";
// })
// div.addEventListener("mouseout",function(dets){
//     abcd.style.backgroundColor="yellow";
// })

// window.addEventListener("mousemove",function(dets){
//     // console.log(dets.clientX, dets.clientY);
//     abcd.style.top=dets.clientY+"px";
//     abcd.style.left=dets.clientX+"px";
// })



// let abcd=document.querySelector('#abcd');
// abcd.addEventListener("mouseover",function(dets){
//     console.log(dets)
// })

// let btn=document.querySelector('button');
// btn.addEventListener("click",function(dets){
//     console.log("btn clicked");
//     console.log(dets)
// })

//EVENT BUBBLING *****************************************

// let nav=document.querySelector('.nav');
// let main=document.querySelector('.main');



// main.addEventListener('click',function(){
//     console.log("Main called");
// })

// nav.addEventListener('click',function(){
//     console.log("Nav called");
// })

// let ele=document.querySelector('ul');

// ele.addEventListener("click",function(dets){
    // console.log(dets);
    // dets.target.style.textDecoration="line-through";
    // dets.target.classList.add("lt");
    // dets.target.classList.toggle("lt");
    
    // dets.target.style.textDecoration="line-through";
// })

//EVENT CAPTURING***************************

// let a=document.querySelector('.a');
// let b=document.querySelector('.b');
// let c=document.querySelector('.c');

// a.addEventListener('click',function(){
//     console.log("a clicked");
// },true)
// b.addEventListener('click',function(){
//     console.log("b clicked");
// })
// c.addEventListener('click',function(){
//     console.log("c clicked");
// })

