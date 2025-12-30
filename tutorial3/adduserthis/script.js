// function addUser() {
//     const name = document.getElementById("name").value;
//     const role = document.getElementById("role").value;
//     const bio = document.getElementById("bio").value;
//     const photo = document.getElementById("photo").value || 
//                   "https://via.placeholder.com/150";

//     if (name === "" || role === "" || bio === "") {
//         alert("Please fill all required fields");
//         return;
//     }

//     const userCard = document.createElement("div");
//     userCard.className = "user-card";

//     userCard.innerHTML = `
//         <img src="${photo}">
//         <h3>${name}</h3>
//         <div class="role">${role}</div>
//         <div class="bio">${bio}</div>
//     `;

//     document.getElementById("users").appendChild(userCard);

//     // Clear form
//     document.getElementById("name").value = "";
//     document.getElementById("role").value = "";
//     document.getElementById("bio").value = "";
//     document.getElementById("photo").value = "";
// }

let form=document.querySelector('form');
let name=document.querySelector('#name');
let role=document.querySelector('#role');
let bio=document.querySelector('#bio');
let photo=document.querySelector('#photo');

const userManager = {
    users: [],
    init:function(){
        // alert("User Manager Initialized");
        form.addEventListener("submit",this.submitForm.bind(userManager));
    },
    submitForm:function(e){
        e.preventDefault();
        this.adduser();
        // console.log(this);
    },
    adduser: function () {
        this.users.push({
            name:name.value,
            role:role.value,
            bio:bio.value,
            photo:photo.value
        });
        form.reset();
        this.renderUi();
     },
     renderUi:function(){ 
        document.getElementById("users").innerHTML="";
        this.users.forEach(function(user){
            // Parent div
            const userCard = document.createElement("div");
            userCard.className = "user-card";

            // Image
            const img = document.createElement("img");
            img.src = user.photo;

            // Name
            const name = document.createElement("h3");
            name.innerText = user.name;

            // Role
            const role = document.createElement("div");
            role.className = "role";
            role.innerText = user.role;

            // Bio
            const bio = document.createElement("div");
            bio.className = "bio";
            bio.innerText = user.bio;

            // Append all elements
            userCard.appendChild(img);
            userCard.appendChild(name);
            userCard.appendChild(role);
            userCard.appendChild(bio);

            // Finally add to DOM
            
            document.getElementById("users").appendChild(userCard);

        });
     },
    removeuser: function () { },
};

userManager.init();
// let h1=document.querySelector('h1');
// const obj={
//     name:"divya",
//     sayName:function(){
//         h1.addEventListener('click', ()=>{
//             console.log(this);
//         })
        
//     }
// }

// obj.sayName();


// let h1=document.querySelector('h1');
// const obj={
//     name:"divya",
//     sayName:function(){
//         h1.addEventListener('click', this.subclr.bind(obj));
//     },
//     subclr:function(){
//         console.log(this);
//         // console.log("cleared !")
//     }   
// }

// obj.sayName();

//addeventlistener m this ki value h1 ko point kregi 
//this.subclr h1 ko hi point kregi

// let h1=document.querySelector('h1');

// const obj={
//     name:"divya",
// }

// function sayName(){
//     console.log(this);
// }
// let fnc=sayName.bind(obj);
// fnc();


