//oops concept

//extends a class

// function createBiscuit(name,price,qty,category){
//     this.name=name;;
//     this.price=price;
//     this.qty=qty;
//     // this.company=company;
//     this.category=category;
// }

// createBiscuit.prototype.company= "Britania";

// let biscuit =new createBiscuit("Britania",20,1,"Sweet");
// let biscuit2 =new createBiscuit("GoodDay",25,1,"Sweet");

// console.log(biscuit.company);
// console.log(biscuit2.company);

// function createPencil(name, price, color, company) {
//     this.name = name;;
//     this.price = price;
//     this.color = color;
//     this.company = company;
// }

// createPencil.prototype.write = function (text) {
//     let h1 = document.createElement("h1");
//     h1.innerText = text;
//     h1.style.color = this.color;
//     document.body.appendChild(h1);
// }

// createPencil.prototype.erase = function () {
//     let data = document.querySelectorAll("h1");
//     data.forEach((elem) => {
//         if (elem.style.color == this.color) {
//             elem.remove();

//         }
//     })
// }
// let pencil1 = new createPencil("Nataraj", 10, "red", "Nataraj Pvt Ltd");
// let pencil2 = new createPencil("Apsara", 12, "blue", "Apsara Pvt Ltd");


//CLASSES

// class CreatePencil{
//     constructor(name, price, color, company) {
//         this.name = name;;
//         this.price = price;
//         this.color = color;
//         this.company = company;
//     }

//     write(text) {
//         let h1 = document.createElement("h1");
//         h1.innerText = text;
//         h1.style.color = this.color;
//         document.body.appendChild(h1);
//     }   

//     erase() {
//         let data = document.querySelectorAll("h1");     
//         data.forEach((elem) => {
//             if (elem.style.color == this.color) {
//                 elem.remove();  }
//         })
//     }
// }   

// let pencil1 = new CreatePencil("Nataraj", 10, "red", "Nataraj Pvt Ltd");
// let pencil2 = new CreatePencil("Apsara", 12, "blue", "Apsara Pvt Ltd");

//super and extends

// class User{
//     constructor(name,email,address,username){
//         this.name=name;
//         this.email=email;
//         this.address=address;
//         this.username=username;
//     }
// }

// class Admin extends User{
//     constructor(name,email,address,username){
//         super(name,email,address,username);
//         this.role="Admin";
//     }
// }

// let user=new User("John Doe","dsengar@gmail.com","123 Main St","johndoe");
// let user2=new Admin("Jane Smith","ss@gmail.com","456 Oak Ave","janesmith");
// console.log(user);
// console.log(user2);

// let admin=new Admin("Alice Johnson","dsengar489@gmail.com","789 Pine Rd","alicejohnson");
// console.log(admin);

//sync and async

// console.log("Anurag Maurya")
// console.log("Divyanshi Sengar")
// console.log("Ragini Kumari")

// setTimeout(() => {
//     console.log("I am late guys");
// }, 2000);

// console.log("Sahdev Rajput")

//callback pattern

// function abcd(val){
//     setTimeout(val,Math.floor(Math.random()*10*1000));
// }

// // abcd(29);

// abcd(function(){
//     console.log("I am callback function");
// })

//callback hell

// function profilelkraao(username, cb) {
//     setTimeout(() => {
//         console.log("Fetching profile data for " + username);
//         cb({ _id: 2233441, username });
//     }, 2000);

// }

// function sarepostlekaraao(userid, cb) {
//     setTimeout(() => {
//         cb({ post1: "My first post", post2: "My second post", post3: "My third post" });
//     }, 3000);
// }

// function saresavedpostnikalo(userid, cb) {
//     setTimeout(() => {
//         cb({ post1: "Saved post 1", saved: [1, 2, 3, 4, 5, 6, 7, 8, 9] })
//     }, 2000)
// };

// profilelkraao("anuragmaurya", function (data) {
//     // console.log(username);
//     sarepostlekaraao(data._id, function (post) {
//         console.log(post);
//         saresavedpostnikalo(data._id, function (saved){
//             console.log(saved);
//             //.....
//         });
//     }
//     );
// });


//pahle anuragmaurya ke data ki fetching hogi jse hi wo aa jayega
//uske badd callback function ko call kiya jayega data ke sath
//fir callback function us data pr kaam karega

//CALLBACK HELL KO PROMISES KI HELP SE SOLVE KIA JATA HAI

//PROMISES

let pr=new Promise(function(res,rej){
    setTimeout(()=>{
        let rn=Math.floor(Math.random()*10);
        if(rn%2==0){
            res("Success! Your random number is "+rn);
        }else{
            rej("Failure! Your random number is "+rn);
        }
    },1000)
})

// pr.then(function(message){
//     console.log("This is in the then "+message);
// }).catch(function(message){
//     console.log("This is in the catch "+message);
// });

async function abcd(){
   try{
     let val=await pr;
     console.log(val);
   }catch(err){
    console.log(err);
   }
}
abcd();




